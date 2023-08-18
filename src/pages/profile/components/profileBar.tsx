import {ProfileBgImage, CatWorryNFT, WalletIcon, CoinIcon} from "@/assets"
import CombineModal from "@/components/CombineModal"
import SubButton from "@/components/SubButton"
import Modal from "@/pages/explore/components/Modal"
import { useEffect, useState } from "react"

type props = {
    id?: string
}
const ProfileBar:React.FC<props> = ({
    id
}) => {
    const [ showModal, setShowModal] = useState(false)
    function openModalClick() {
        setShowModal(!showModal)
        // console.log("modal")
    }
    function closeModal() {
        setShowModal(false)
    }
    useEffect(()=>{
        if(showModal === true ){
            document.body.addEventListener('dbclick', closeModal)
            return () => {
                document.body.removeEventListener('dbclick', closeModal);
            }
        }
      },[showModal])
    return <>
        <div className="w-full h-[350px] bg-dark-80 relative">
            <div className="px-[250px] ">
                <ProfileBgImage />
            </div>
            <div className="w-[280px] h-[280px] bg-gray rounded-full overflow-hidden absolute left-[250px] bottom-[-50px]">
                <div className="ml-[50%] -translate-x-1/2 mt-[15%] ">
                    <CatWorryNFT />
                </div>
            </div>
            <div className="flex flex-col absolute left-[550px] bottom-[15px]">
                <div className="w-[589px] h-[133px] bg-dark-60 flex flex-col items-start p-[20px] rounded-lg">
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
                <div className="flex flex-row mt-[15px] gap-[15px]">
                    <SubButton 
                        btnName="Collection"
                    />
                    <SubButton 
                        btnName="Combine"
                        onClickEvent={openModalClick}
                    />
                    <SubButton 
                        btnName="Activity"
                    />
                </div>
            </div>
            <div className="">
                { showModal ? <CombineModal  showModal={showModal} closeModal={closeModal}/> : null  }
            </div>
        </div>
    </>
}

export default ProfileBar