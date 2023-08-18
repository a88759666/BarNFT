import { TeamBgImage, TeamCatCardImage, DiscordGrayImage, TwitterGrayImage, DotImage  } from "@/assets"

const CatCard:React.FC = () => {
    return <>
        <div className="relative">
            <TeamCatCardImage />
        </div>
        <div className="flex flex-row items-center absolute top-[165px] left-[130px] gap-[10px]">
            <div className="w-[150px] h-[150px] rounded-md bg-[#282828]" />
            <div className="flex flex-col max-w-[220px]">
                <h1 className="text-white text-[16px] font-bold">NameName</h1>
                <h2 className="text-[#787878] text-[14px] font-bold mb-[12px]">subtitle</h2>
                <text className="text-white text-[12px] font-[400] mb-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aut reprehenderit. Animiesentium?</text>
                <div className="ml-auto flex flex-row gap-[10px]">
                    <TwitterGrayImage />
                    <DiscordGrayImage />
                </div>
            </div>
        </div>
    </>
}

const TeamPage:React.FC = () => {
  return <>
    <div className="mx-auto px-[60px] relative h-[880px]">
        <div className="absolute z-100">
            <h1 className="text-white text-[96px] font-bold mb-[50px]">Team</h1>
        </div>
        <div className="absolute top-0 left-0 z-10 animate-pulse">
            <TeamBgImage />
        </div>
        <div className="absolute top-[215px] left-[100px] z-20">
            <CatCard />
        </div>
        <div className="absolute top-[20px] left-[710px] z-20">
            <CatCard />
        </div>
        <div className="absolute top-[460px] left-[620px] z-20">
            <CatCard />
        </div>
    </div>
  </>
};
  
export default TeamPage;