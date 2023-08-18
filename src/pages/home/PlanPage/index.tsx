
import { PlanRocketImage, EarthCatImage, RocketImage, RainbowImage, StarYellowImage} from "@/assets"
import Canvas from "@/components/Canvas";



const PlanPage:React.FC = () => {
  return <>
    <div className="mx-auto px-[60px] relative h-[780px] mb-[200px]">
        <div className="absolute z-50 flex flex-col items-start ">
            <h1 className="text-white text-[72px] font-bold mb-[50px]">發行計畫</h1>
            <p className="text-white text-[24px] font-[600] leading-[60px]">
                地球各處散落著各種不同的時尚單品，有傳聞說，玉皇大喵Ⅱ世曾穿戴的飾品、禮服<br></br>
                也被不名人士帶到了地球，好稀有。快幫助醉醉貓收集飾品，成為時尚達人吧<br></br>
            </p>
        </div>
        <div className="absolute bottom-[300px] right-0 z-20">
            <EarthCatImage />
        </div>
        <div className="absolute left-[-250px] top-[-100px] z-10 scale-[0.75] opacity-90">
            <Canvas />
        </div>
        <div className="absolute bottom-[-70px] left-0 z-10">
            <div className="animate-slide">
                <RocketImage />
            </div>
        </div>
        <div className="absolute bottom-0 ml-[-650px]">
            <RainbowImage />
        </div>
        <div className="absolute bottom-[-100px] left-0 z-20">
            <div className="animate-pulse">
                <StarYellowImage />
            </div>
        </div>
    </div>
    {/* <div className="ml-[-450px]">
        <PlanRocketImage />
    </div> */}
    
  </>
};
  
export default PlanPage;