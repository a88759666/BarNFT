
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeaderBar from "@/components/HeaderBar";
import NavBar from "./components/NavBar";
import NFTCard from "@/components/NFTCard";

import { GlassNFT, BellNFT, FrameNFT, CatNFT, RainbowNFT, WifiNFT, CoinIcon, WalletIcon} from "@/assets"
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
type props = {
  onHandleToggleNFT: (toggleNFT:toggleStep) => void
}

const Menu:React.FC<props> = ({
  onHandleToggleNFT
}) => {
  return <>
    <div className="w-[420px] bg-dark-50 py-[25px] px-[30px]">
      <div className="flex flex-col items-start">
        <h1 className="text-white font-bold text-[24px] mb-[30px]">Kind</h1>
        <label className="flex flex-row justify-between items-center w-full mb-[30px]">
          <h2 className="text-white font-[400] text-[16px]">All NFT</h2>
          <input 
            type="radio"
            name="toggle"
            defaultChecked={true}
            className="appearance-none w-[24px] h-[24px] border-2 border-white rounded-md cursor-pointer checked:bg-gold" 
            onClick={() => {onHandleToggleNFT('all')}}
          />
        </label>
        <label className="flex flex-row justify-between items-center w-full mb-[30px]">
          <h2 className="text-white font-[400] text-[16px]">Season NFT</h2>
          <input 
            type="radio"
            name="toggle"
            defaultChecked={false}
            className="appearance-none w-[24px] h-[24px] border-2 border-white rounded-md cursor-pointer checked:bg-gold" 
            onClick={() => {onHandleToggleNFT('season')}}
          />
        </label>
        <label className="flex flex-row justify-between items-center w-full mb-[30px]">
          <h2 className="text-white font-[400] text-[16px]">Special NFT</h2>
          <input 
            type="radio"
            name="toggle"
            defaultChecked={false}
            className="appearance-none w-[24px] h-[24px] border-2 border-white rounded-md cursor-pointer checked:bg-gold" 
            onClick={() => {onHandleToggleNFT('special')}}
          />
        </label>
        <hr className="w-full h-[2px] bg-dark-100 mb-[40px]"/>
        <div className="flex flex-row bg-gray-dark w-full p-[20px] gap-[20px]">
          <div className="w-[95px] h-[95px] rounded-full bg-gray" />
          <div className="basis-2/3 flex flex-col items-start">
            <h1 className="text-white font-bold text-[24px] mb-[10px]">Name</h1>
            <div className="flex flex-row gap-[15px] mb-[5px]">
              <WalletIcon />
              <h2 className="text-white font-[400] text-[16px]">Wallet Address</h2>
            </div>
            <div className="flex flex-row gap-[15px]">
              <CoinIcon />
              <h2 className="text-white font-[400] text-[16px]">Coins</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
}

type toggleStep = 'all' | 'season' | 'special' | '鬼靈精怪的眼鏡' | '響噹噹的鈴鐺' | '破舊的畫框' | '沒甚麼用的控制器' | '可愛的貓貓' | '五顏六色的彩虹'

const Explore:React.FC = () => {
  const [ menu, setMenu ] = useState(false)
  const [ showModal, setShowModal] = useState(false)
  const [ currentId, setcurrentId ] = useState('')
  const [ toggleNFT, setToggleNFT ] = useState<toggleStep>('all')

  const mockData = [
    {
        name:'鬼靈精怪的眼鏡',
        id:'glass'
    }, 
    {
        name:'響噹噹的鈴鐺',
        id:'bell' 
    },
    {
        name:'破舊的畫框',
        id:'frame'
    },
    {
        name: '沒甚麼用的控制器',
        id:'wifi'
    },
    {
        name:'可愛的貓貓',
        id:'cat'
    },
    {
        name: '五顏六色的彩虹',
        id:'raimbow'
    }
]
  const [ searchValue, setSearchValue] = useState("")
  const [ debouncedSearchValue, setDebouncedSearchValue] = useState("");
  const [ sortValue, setSortValue ] = useState<typeof mockData | undefined>(undefined)

  const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
      if (debouncedSearchValue.length > 0) {
          const filtered = mockData.filter((item) => {
            return item.name.includes(debouncedSearchValue);
          })
          setSortValue(filtered)
      } else {
          setSortValue(undefined)
      }
      
  }

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setDebouncedSearchValue(searchValue);
      }, 500);
      return () => clearTimeout(timeoutId);
  }, [searchValue, 500]);
  
  function closeModal() {
    setShowModal(false)
  }
  function openModalClick(currentId:string) {
    setShowModal(!showModal)
    setcurrentId(currentId)
  }

  const handleToggleNFT = (toggleNFT:toggleStep) => {
    setToggleNFT(toggleNFT)
  } 

  function handleSearch(searchValue:toggleStep){
    setToggleNFT(searchValue)
    setSearchValue('')
    console.log(searchValue)
  }

  useEffect(()=>{
    if(showModal === true ){
        document.body.addEventListener('dbclick', closeModal)
        console.log(showModal)
        return () => {
            document.body.removeEventListener('dbclick', closeModal);
        }
    }
  },[showModal])

  return <>
  <div className="w-screen h-screen relative flex-col">
    <Container>
      <div className="sticky top-0 z-50">
        <HeaderBar />
      </div>
    </Container>
    
    <div className="mb-[50px]">
      <NavBar 
        openMenu={ () => {setMenu(!menu)} }
        onHandleSearch={(searchValue)=>{handleSearch?.(searchValue)}}
        searchValue={searchValue}
        sortValue={sortValue}
        handleSearchChange={handleSearchChange}
        mockData={mockData}
        setSearchValue={setSearchValue}
      />
    </div>
    <Container>
      <div className="flex flex-row mb-[50px]">
        {menu === true &&
          <div className="basis-1/3">
            <Menu onHandleToggleNFT={handleToggleNFT}/>
          </div>
        }
        <div>
          {
            toggleNFT === 'all' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<GlassNFT />}
                currentId="glass"
                openModal={openModalClick}
                NFTName='鬼靈精怪的眼鏡'
              />
              <NFTCard 
                NFTImage={<BellNFT />}
                currentId="bell"
                openModal={openModalClick}
                NFTName='響噹噹的鈴鐺'
              />
              <NFTCard 
                NFTImage={<FrameNFT />}
                currentId="frame"
                openModal={openModalClick}
                NFTName='破舊的畫框'
              />
              <NFTCard 
                NFTImage={<WifiNFT />}
                currentId="wifi"
                openModal={openModalClick}
                NFTName='沒甚麼用的控制器'
              />
              <NFTCard 
                NFTImage={<CatNFT />}
                currentId="cat"
                openModal={openModalClick}
                NFTName='可愛的貓貓'
              />
              <NFTCard 
                NFTImage={<RainbowNFT />}
                currentId="rainbow"
                openModal={openModalClick}
                NFTName='五顏六色的彩虹'
              />
            </div>
          }
          {
            toggleNFT === 'season' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<GlassNFT />}
                currentId="glass"
                openModal={openModalClick}
                NFTName='鬼靈精怪的眼鏡'
              />
              <NFTCard 
                NFTImage={<BellNFT />}
                currentId="bell"
                openModal={openModalClick}
                NFTName='響噹噹的鈴鐺'
              />
              <NFTCard 
                NFTImage={<FrameNFT />}
                currentId="frame"
                openModal={openModalClick}
                NFTName='破舊的畫框'
              />
              <NFTCard 
                NFTImage={<WifiNFT />}
                currentId="wifi"
                openModal={openModalClick}
                NFTName='沒甚麼用的控制器'
              />
            </div>
          }
          {
            toggleNFT === 'special' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<CatNFT />}
                currentId="cat"
                openModal={openModalClick}
                NFTName='可愛的貓貓'
              />
              <NFTCard 
                NFTImage={<RainbowNFT />}
                currentId="rainbow"
                openModal={openModalClick}
                NFTName='五顏六色的彩虹'
              />
            </div>
          }
          {
            toggleNFT === '鬼靈精怪的眼鏡' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<GlassNFT />}
                currentId="glass"
                openModal={openModalClick}
                NFTName='鬼靈精怪的眼鏡'
              />
            </div>
          }
          {
            toggleNFT === '響噹噹的鈴鐺' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
               <NFTCard 
                NFTImage={<BellNFT />}
                currentId="bell"
                openModal={openModalClick}
                NFTName='響噹噹的鈴鐺'
              />
            </div>
          }
          {
            toggleNFT === '破舊的畫框' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<FrameNFT />}
                currentId="frame"
                openModal={openModalClick}
                NFTName='破舊的畫框'
              />
            </div>
          }
          {
            toggleNFT === '沒甚麼用的控制器' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<WifiNFT />}
                currentId="wifi"
                openModal={openModalClick}
                NFTName='沒甚麼用的控制器'
              />
            </div>
          }
          {
            toggleNFT === '可愛的貓貓' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<CatNFT />}
                currentId="cat"
                openModal={openModalClick}
                NFTName='可愛的貓貓'
              />
            </div>
          }
          {
            toggleNFT === '五顏六色的彩虹' && <div className="flex flex-row gap-[20px] flex-wrap justify-center mb-[60px]">
              <NFTCard 
                NFTImage={<RainbowNFT />}
                currentId="rainbow"
                openModal={openModalClick}
                NFTName='五顏六色的彩虹'
              />
            </div>
          }
        </div>
      </div>
      { showModal ? <Modal showModal={showModal} closeModal={closeModal} id={currentId}/> : null  }
      <Footer />
    </Container>
  </div>
   
  </>
};
  
export default Explore;