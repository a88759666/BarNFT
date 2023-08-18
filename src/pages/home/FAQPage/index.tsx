
import { LineImage, PlanetRainbowImage } from "@/assets"

const FaqCard:React.FC = () => {
    return <>
        <div className="flex flex-col items-start max-w-[470px]">
            <h1 className="text-white text-[24px] font-[600] mb-[10px]">Loream Ipsum</h1>
            <p className="text-white text-[12px] font-[600]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, perferendis?</p>
        </div>
    </>
}

const FAQPage:React.FC = () => {
  return <>
    <div className="mx-auto px-[60px] relative h-[980px] flex flex-col items-center">
        <h1 className="text-white text-[72px] font-bold mb-[50px] text-center">FAQ</h1>
        <div className="absolute z-10 flex flex-row items-start gap-[50px]  mt-[120px]">
            <div className="flex flex-row gap-[30px]">
                <div className="mt-[40px]">
                    <LineImage />
                </div>
                <div className="flex flex-col gap-[45px]">
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                </div>
            </div>
            <div className="flex flex-row gap-[30px]">
                <div className="mt-[40px]">
                    <LineImage />
                </div>
                <div className="flex flex-col gap-[45px]">
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                    <FaqCard />
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 z-0 ml-[-60px]">
            <PlanetRainbowImage />
        </div>
    </div>
    
  </>
};
  
export default FAQPage;