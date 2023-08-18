
import { PlanRocketImage, EarthCatImage, RocketImage, RainbowImage, StarYellowImage, GalaxyXlImage, GlassNFT, BellNFT, CatOriginalNFT, WifiNFT, ShineImage} from "@/assets"
import CombineModal from "@/components/CombineModal";
import SubButton from "@/components/SubButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const CombinePage:React.FC = () => {
    const [ currentId, setcurrentId ] = useState('')
    const [ animate, setAnimate ] = useState(false)
    const go = useNavigate()
    function handleCombineBtn () {
        go("/profile")
    }
   
    function handleAnimate(id:string) {
        setAnimate(true)
        setcurrentId(id)
        console.log(currentId)
    }
    
   
    return <>
        <div className="mx-auto px-[60px]  h-[780px] mb-[200px] relative">
            <h1 className="text-white text-[96px] font-bold mb-[50px] text-center">Combine</h1>
            <div className="opacity-90 mt-[10px]">
                <img src="../../../../src/assets/images/galaxylg.png" />
            </div>
            <div 
                className="absolute bottom-[150px] left-[50px] scale-50 cursor-pointer"
                onClick={() => {handleAnimate('glass')}}
            >
                <div className={`${ animate && currentId === 'glass' ? 'animate-rotate fillmode-forwards' : 'animate-bounce'}`}>
                    <GlassNFT />
                </div>
            </div>
            <div 
                className="absolute bottom-[50px] left-[170px] scale-50 cursor-pointer"
                onClick={() => {handleAnimate('bell')}}
            >
                <div className={`${ animate && currentId === 'bell' ? 'animate-rotate fillmode-forwards' : 'animate-bounce'}`}>
                    <BellNFT />
                </div>
            </div>
            <div className="absolute right-[100px] bottom-[100px] scale-90 cursor-pointer">
                <div className="animate-bounce">
                    <CatOriginalNFT />
                </div>
            </div>
            <div className="absolute bottom-[170px] right-[180px] scale-50 cursor-pointer">
                <div className="animate-bounce">
                    <WifiNFT />
                </div>
            </div>
            <div className="absolute bottom-[350px] right-[100px] z-20 scale-75">
                <EarthCatImage />
            </div>
            {  
                animate === true && 
                <div className="absolute bottom-[50px] right-[0px] scale-50">
                    <div className="animate-spin">
                        <img src="../../../../src/assets/images/circle.png" />  
                    </div>
                </div>
            }
            <div>

            </div>
            <div className="absolute top-[50px] left-[80px] scale-[20%] z-20">
                <div className="animate-bounce">
                    <img src="../../../../src/assets/images/question.png" />
                </div>
            </div>
            <div className="absolute top-[150px] left-[70px] scale-[30%]">
                <div className="">
                    <img src="../../../../src/assets/images/box.png" />
                </div>
            </div>
            <div className="absolute top-[150px] left-[420px] scale-[50%] ">
                <div className="animate-pulse">
                    <ShineImage />
                </div>
            </div>
            <div className="absolute bottom-[50px] left-[520px] z-20">
                <SubButton 
                    btnName="Combine"
                    pxNumber={120}
                    bgColor='inherit'
                    onClickEvent={handleCombineBtn}
                />
            </div>
        </div>
        
    </>
};
  
export default CombinePage;