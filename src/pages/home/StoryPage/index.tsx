
import { CatSupriseImage, ShineImage, UfoCatImage, UfoImage } from "@/assets"
import SubButton from "@/components/SubButton";
type Props = {
    currentPage:string
}

const StoryPage:React.FC<Props> = ({currentPage}) => {
  return <>
    <div className="mx-auto px-[60px] relative h-[880px] z-10">
        <div className="absolute z-100 flex flex-col items-start">
            <h1 className="text-white text-[96px] font-bold mb-[50px]">Story</h1>
            <p className="text-white text-[24px] font-[600] leading-[60px]" onClick={()=>{console.log(currentPage)}}>
                在遙遠的宇宙，存在一個神奇的貓貓星球<br></br>
                為慶祝貓貓星球建國70周年，貓貓星球的國王—玉皇大喵<br></br>
                決定舉辦一場盛大的宴會，並賞賜最時尚的貓國人數不盡的貓罐頭<br></br>
                貓國人無不渾身解數，把自己的傳家寶都拿了出來<br></br>
                我們的主人公—醉醉貓，決定搭火箭前往地球尋找新的機緣<br></br>
                快來幫助醉醉貓成為最時尚的貓國人吧~<br></br>
            </p>
            <div className="flex flex-row gap-[20px] mt-[40px]">
                <SubButton 
                    btnName="Skip"
                    pxNumber={75}
                    textColor='white'
                    bgColor='gray-dark'
                />
                <SubButton 
                    btnName="Next"
                    pxNumber={75}
                    textColor='white'
                    bgColor='gray-dark'
                />
            </div>
        </div>
        {/* <div className="absolute bottom-0 right-0 z-10">
            <UfoCatImage />
        </div> */}
        <div className="absolute bottom-0 right-[25px] z-10">
            <UfoImage />
        </div>
        <div className="absolute bottom-0 right-0 z-20 animate-pulse">
            <ShineImage />
        </div>
        <div className="absolute bottom-[-90px] right-[180px] z-10">
            <div className={`
                ${
                    currentPage === 'StoryPage' ? 'animate-absorb fillmode-forwards' : null
                }`}>
                    <CatSupriseImage />
            </div>
        </div>
    </div>
    

    
   
  </>
};
  
export default StoryPage;