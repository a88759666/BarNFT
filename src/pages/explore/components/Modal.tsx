import { useEffect, useState } from "react";
import { BellNFT, CatNFT, FrameNFT, GalaxyLgImage, GlassNFT, ModalCatImage, RainbowNFT, WifiNFT } from "@/assets"
import SubButton from "@/components/SubButton";

type props = {
    closeModal: () => void
    showModal:boolean
    id?:string
}
const Modal:React.FC<props> = ({
    closeModal,
    showModal,
    id
}) => {
   
    return <>
        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="shadow-lg  focus:outline-none">
                    <ModalCatImage />
                </div>
                <div className="absolute top-[220px] left-[180px]">
                    <div className="flex flex-row gap-[30px]">
                        <div className="relative w-[500px] h-[500px] rounded-2xl bg-dark-50 overflow-hidden">
                            <div className="absolute top-0 left-0">
                                <GalaxyLgImage />
                            </div>
                            <div className="scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                { 
                                    id === 'glass' ? <GlassNFT /> : null
                                }
                                { 
                                    id === 'bell' ? <BellNFT /> : null
                                }
                                { 
                                    id === 'frame' ? <FrameNFT /> : null
                                }
                                { 
                                    id === 'wifi' ? <WifiNFT /> : null
                                }
                                { 
                                    id === 'cat' ? <CatNFT /> : null
                                }
                                { 
                                    id === 'rainbow' ? <RainbowNFT /> : null
                                }
                            </div>
                            
                        </div>
                        <div className="flex flex-col w-[325px]">
                            <div className="w-full bg-gray px-[10px] py-[5px] rounded-xl mb-[20px]">
                                <h1 className="text-dark-100 font-[700] text-[36px]">Name</h1>
                            </div>
                            <div className="w-full border-gray border-2 flex flex-row justify-between items-center px-[10px] py-[5px] rounded-xl mb-[30px]">
                                <h1 className="text-white font-[700] text-[20px]">Info</h1>
                                <h1 className="text-white font-[700] text-[20px]">History</h1>
                                <h1 className="text-white font-[700] text-[20px]">DNA</h1>
                            </div>
                            <div className="w-full min-h-[245px] border-gold border-2 px-[10px] py-[5px] rounded-xl mb-[50px]">
                                <h1 className="text-gold font-[700] text-[24px]">Owner</h1>
                                <h1 className="text-gold font-[700] text-[24px]">Address</h1>
                            </div>
                            <SubButton
                                btnName="Mint"
                                pxNumber={120}
                            />
                        </div>
                    </div>
                </div>
                
                <button
                    className="right-[140px] absolute top-[160px] focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-4xl block outline-none focus:outline-none">
                      X
                    </span>
                </button>
            </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-dark-100"></div>
    </>
}

export default Modal