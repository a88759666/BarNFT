import { RoadmapCatImage } from "@/assets"

type props = {
    month?: string,
    date?: string,
    text?: string,
    top?: number,
    left?: number
}
const InfoCard:React.FC<props> = ({
    month,
    date,
    text,
    top,
    left
}) => {
    const cardStyle = {
        top: `${top}px`,
        left: `${left}px`,
    };
    return <>
        <div className="flex flex-row items-center absolute z-20" style={cardStyle}>
            <div className="w-[13px] h-[13px] bg-gray rounded-full mr-[25px]" />
            <div className="flex flex-col items-start mr-[20px]">
                <p className="text-white text-[20px] font-[600]">2022</p>
                <p className="text-white text-[28px] font-[600] mt-[-10px]">{month}/{date}</p>
            </div>
            <div className="flex flex-col items-start max-w-[495px]">
                <text className="text-[#E9FF60] text-[24px] font-[600]">{text}</text>
                <p className="text-white text-[12px] font-[600] leading-[19px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolor aperiam at fuga, animi cum quidem magni magnam facere, quos minus error! Sapiente ?</p>
            </div>
        </div>
    </>
}

const RoadmapPage:React.FC = () => {
  return <>
    <div className="mx-auto px-[60px] relative h-[960px]">
        <div className="absolute z-100 flex flex-col items-start mt-[400px]">
            <h1 className="text-white text-[72px] font-bold mb-[10px]">Roadmap</h1>
            <p className="text-white text-[24px] font-[600] leading-[60px]">
                喵嗚的Diary<br></br>
                記錄著喵嗚在地球的驚心歷險記<br></br>
                和成為時尚王背後不為人知的辛酸路程
            </p>
        </div>
        <div className="absolute top-0 left-[180px] z-10">
            <RoadmapCatImage />
        </div>
        <InfoCard 
            month="11"
            date="15"
            text="發行1000個 喵嗚 NFT，購買即獲得活動門票"
            top={290}
            left={540}
        />
        <InfoCard 
            month="11"
            date="16"
            text="發行1000個 喵嗚 NFT，購買即獲得活動門票"
            top={415}
            left={500}
        />
        <InfoCard 
            month="11"
            date="19"
            text="發行1000個 喵嗚 NFT，購買即獲得活動門票"
            top={550}
            left={630}
        />
        <InfoCard 
            month="11"
            date="22"
            text="發行1000個 喵嗚 NFT，購買即獲得活動門票"
            top={685}
            left={615}
        />
    </div>
  </>
};
  
export default RoadmapPage;