
import { CSSProperties } from 'react';
import galaxyImage from "@/assets/images/galaxy.jpg"

type props = {
    NFTImage: React.ReactNode
    openModal?: (currentId:string) => void
    width?: number
    height?: number
    currentId?: string 
    NFTName?: string
    catHas?: boolean
    scaleNum?: number
}
const NFTCard:React.FC<props> = ({
    NFTImage,
    openModal,
    width = 387 || 253,
    height = 316 || 188,
    currentId,
    NFTName,
    catHas,
    scaleNum
}) => {
    const cardWidthHeight = {
        width: `${width}px`,
        height: `${height}px`
    }
    const cardScale:CSSProperties  = {
        transform: `scale(${scaleNum}%)`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: '-70% -60%'
    }
    return <>
    <div key={currentId} className="flex flex-col">
        <div className={`relative rounded-t-lg bg-[#1A191B] px-[10px] pt-[10px]`} style={cardWidthHeight}>
            <div 
                className="rounded-2xl overflow-hidden"
                onClick={() => {currentId && openModal?.(currentId)}}
            >
                {/* <GalaxyImage /> */}
                <img src={galaxyImage} className="z-0" />
            </div>
            <div 
                className={`
                    ${catHas ? 'mt-[50px]' : '' } absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                `}
                style={cardScale}
                onClick={() => {currentId && openModal?.(currentId)}}
            >
                {NFTImage}
            </div>
        </div>
        <div className={`w-[${width}px] h-[83px] rounded-b-lg bg-[#282828] flex flex-col items-start px-[15px] py-[10px] z-10`}>
            <h1 className="text-white font-bold text-[16px] mb-[5px]">{NFTName}</h1>
            <p className="text-white font-[400] text-[12px] mb-[10px]">
                玉皇大喵每次出巡，必帶的魔毯。<br></br>
                聽說帶有溫暖的功能
            </p>
        </div>
    </div>
        
    </>
  };
    
  export default NFTCard;