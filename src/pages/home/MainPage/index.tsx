import { LogoImage, CatHolderImage, EarthRotateImage, DotImage, StarImage} from "@/assets"
import CanvasLogo from "@/components/CanvasLogo";

import SubButton from "@/components/SubButton";


const MainPage:React.FC = () => {
  return <>
    <div className="relative w-[1200px] h-[760px] bg-dark-80 mx-auto">
      <div className="absolute top-[20px] z-20 left-1/2 -translate-x-1/2 ">
        <LogoImage />
      </div>
      <div className="absolute top-[20px] z-10 left-1/2 -translate-x-1/2 opacity-70">
        <CanvasLogo />
      </div>
      <div className="absolute top-[200px] z-10 left-1/2 -translate-x-1/2">
        <CatHolderImage />
      </div>
      <div className="absolute top-[370px] z-20 left-1/2 -translate-x-1/2">
        <div className="animate-spin">
          <EarthRotateImage />
        </div>
      </div>
      <div className="absolute top-[20px] left-[30px] z-0 animate-pulse">
        <DotImage />
      </div>
      <div className="absolute top-0 left-[82px] z-0 animate-pulse animation-delay-900">
        <StarImage />
      </div>
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10">
        <SubButton 
          btnName="Mint"
          pxNumber={120}
        />
      </div>
    </div>
    
   
  </>
};
  
export default MainPage;