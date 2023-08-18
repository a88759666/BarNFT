import SubButton from "./SubButton";
import { DiscordFollowIcon, TwitterFollowIcon, IgFollowIcon, YoutubeFollowIcon} from "@/assets"


const Footer:React.FC = () => {
    return <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-start mb-[50px]">
                <div className="flex flex-col">
                    <h1 className="text-white text-[24px] font-bold mb-[10px]">NEWSLETTER</h1>
                    <p className="text-white text-[16px] font-[400] mb-[15px]">
                        Subscribe to our newsletter for<br></br>
                        exclusive drops, perks, events & more
                    </p>
                    <div className="flex flex-row gap-[20px]">
                        <input
                            type='text'
                            placeholder='Your Email Address...'
                            name="email"
                            className="w-[280px] px-[15px] py-[5px] appearance-none bg-dark-100 outline-none border-2 border-white rounded-md placeholder:italic placeholder:text-slate-400 "
                        />
                        <SubButton 
                            btnName="Subscrib"
                            pxNumber={30}
                            textColor='white'
                            bgColor='#888888'
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start">
                    <h1 className="text-white text-[24px] font-bold mb-[10px]">Follow us</h1>
                    <div className="flex flex-row gap-[15px]">
                        <DiscordFollowIcon />
                        <TwitterFollowIcon />
                        <IgFollowIcon />
                        <YoutubeFollowIcon />
                    </div>
                </div>
            </div>
            <hr className="w-full border border-white mb-[40px]" />
            <div className="flex flex-row justify-between items-start mb-[50px]">
                <div className="flex flex-col">
                    <h1 className="text-gold text-[24px] font-bold mb-[30px]">Tipsy Cat</h1>
                    <p className="text-white text-[16px] font-[400] leading-[26px] max-w-[380px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vel mi faucibus mauris, mauris ornare. Sagittis ultrices nisl cras ut sit adipiscing
                    </p>
                </div>
                <div className="flex flex-row gap-[85px] items-start">
                   <div className="flex flex-col items-start gap-[20px]">
                        <h1 className="text-gold text-[16px] font-[700]">Explore</h1>
                        <h1 className="text-white text-[12px] font-[700]">All NFT</h1>
                        <h1 className="text-white text-[12px] font-[700]">Season NFT</h1>
                        <h1 className="text-white text-[12px] font-[700]">Combine NFT</h1>
                   </div>
                   <div className="flex flex-col items-start gap-[20px]">
                        <h1 className="text-gold text-[16px] font-[700]">About us</h1>
                        <h1 className="text-white text-[12px] font-[700]">Story</h1>
                        <h1 className="text-white text-[12px] font-[700]">Roadmap</h1>
                        <h1 className="text-white text-[12px] font-[700]">Team</h1>
                        <h1 className="text-white text-[12px] font-[700]">FAQ</h1>

                   </div>
                   <div className="flex flex-col items-start gap-[20px]">
                        <h1 className="text-gold text-[16px] font-[700]">Profile</h1>
                        <h1 className="text-white text-[12px] font-[700]">Profile</h1>
                        <h1 className="text-white text-[12px] font-[700]">Collection</h1>
                        <h1 className="text-white text-[12px] font-[700]">Activity</h1>
                   </div>
                </div>
            </div>
        </div>
    </>
  };
    
  export default Footer;