import { CloudImage, DotImage, EarthRotateImage, MintCatImage, PlanetRocketImage, PlanRocketImage, RocketRainbowImage, StarImage } from "@/assets"

import SubButton from "@/components/SubButton";

type Props = {
  currentPage:string
}
const MintPage:React.FC<Props> = ({currentPage}) => {
  return <>
    <div className="w-[1200px] h-[760px] bg-dark-80 mx-auto relative overflow-hidden">
      {/* <MintCatImage /> */}
      <div className="absolute top-[50px] left-[40px] z-0 animate-pulse">
        <DotImage />
      </div>
      <div className="absolute top-[25px] left-[95px] z-0 animate-pulse animation-delay-900">
        <StarImage />
      </div>
      <div className="absolute bottom-[100px] z-20 left-[160px]">
        <div className="animate-swing  direction-alternate-reverse">
          <CloudImage />
        </div>
      </div>
      <div className="absolute bottom-0 z-20 left-1/2 -translate-x-1/2">
        <PlanetRocketImage />
      </div>
      <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2">
        <div className={`
          ${
            currentPage === 'MintPage' ? 'animate-liftOff fillmode-forwards' : null
          }`}>
            <RocketRainbowImage />
        </div>
      </div>
    </div>
    <div className="text-center mt-[20px]">
        <SubButton 
          btnName="Mint"
          pxNumber={120}
        />
    </div>
   
  </>
};
  
export default MintPage;