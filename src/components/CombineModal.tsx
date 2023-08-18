import { useEffect, useRef, useState } from "react";
import { BellNFT, CatBellNFT, CatFrameNFT, CatGlassNFT, CatNFT, CatOriginalNFT, CatUfoNFT, FrameNFT, GlassNFT, ShineImage, WifiNFT } from "@/assets"
import SubButton from "@/components/SubButton";
import { Console } from "console";

type props = {
    closeModal: () => void
    showModal:boolean
    
}
const CombineModal:React.FC<props> = ({
    closeModal,
    showModal,
    
}) => {
    const [ selectStatusA, setSelectStatusA ] = useState(false)
    const [ selectStatusB, setSelectStatusB ] = useState(false)
    const [ currentId, setCurrentId ] = useState('')
    const [ selectA, setSelectA ] = useState('')
    const [ selectB, setSelectB ] = useState('')
    const [ animateCombine, setAnimateCombine ] = useState(false)
    const [ combineAfter, setCombineAfter ] = useState('')
    const [ combineAfterState, setCombineAfterState ] = useState(false)
    const combineAfterStateRef = useRef(combineAfterState)

    function handleSelectA() {
        setSelectStatusA(true)
        
    }
    function handleSelectB() {
        setSelectStatusB(true)
    }
    function handleSelectNFT(currentId:string) {
        setCurrentId(currentId)
    }
    function handleReselect(){
        setSelectStatusA(false)
        setSelectStatusB(false)
        setSelectA('')
        setSelectB('')
        setCurrentId('')
    }
    function handleCombine() {
        setAnimateCombine(true)
        setCombineAfterState(true)
        if ( selectA === 'oringinCat' && selectB === 'bell' ||  selectA === 'bell' && selectB === 'oringinCat'){
            setCombineAfter('catBell')
            console.log('success')
        } else if ( selectA === 'oringinCat' && selectB === 'glass' ||  selectA === 'glass' && selectB === 'oringinCat'){
            setCombineAfter('catGlass')
        } else if ( selectA === 'oringinCat' && selectB === 'frame' ||  selectA === 'frame' && selectB === 'oringinCat'){
            setCombineAfter('catFrame')
        } else if ( selectA === 'oringinCat' && selectB === 'wifi' ||  selectA === 'wifi' && selectB === 'oringinCat'){
            setCombineAfter('catWifi')
        }
        
    }
    useEffect(() => {
        if (selectStatusA && selectStatusB === false) {
            setSelectA(currentId);
        }
    }, [currentId]);

    useEffect(() => {
        if (selectStatusB && selectA !== '') {
            setSelectB(currentId);
        }
    }, [ currentId]);

    useEffect(() => {
        let timer: NodeJS.Timeout
        if(combineAfterState){
            combineAfterStateRef.current = false
            timer = setTimeout((
                () => {
                    setCombineAfterState(combineAfterStateRef.current)
                }
            ), 8000)
        }
        return () => clearTimeout(timer);
    },[combineAfterState])

    return <>
        {
            animateCombine && 
            <div>
                {   combineAfterState &&
                    <div className={`${  combineAfterState  ? 'animate-rotateCombine' : null } fixed inset-0 z-[60] flex items-center justify-center`}>
                        {/* <div className="absolute top-[0px] left-[350px] scale-[20%] z-[70]">
                            <div className="animate-bounce">
                                <img src="../../../../src/assets/images/question.png" />
                            </div>
                        </div>
                        <div className="absolute top-[150px] left-[340px] scale-[30%] z-[60]">
                            <div className="">
                                <img src="../../../../src/assets/images/box.png" />
                            </div>
                        </div>
                        <div className="absolute top-[150px] left-[690px] scale-[50%] z-[60]">
                            <div className="animate-pulse">
                                <ShineImage />
                            </div>
                        </div> */}
                        <div className="absolute top-[calc(50%-150px)] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[30%] z-[70]">
                            <div className="animate-bounce">
                                <img src="../../../../src/assets/images/question.png" />
                            </div>
                        </div>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[30%] z-[60]">
                            <div className="">
                                <img src="../../../../src/assets/images/box.png" />
                            </div>
                        </div>
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[50%] z-[60]">
                            <div className="animate-pulse">
                                <ShineImage />
                            </div>
                        </div>
                    </div>
                }         
                <div className={`${ animateCombine ? 'animate-combineA' : null }  scale-[1.2] absolute top-[200px] left-[440px] z-50`}>
                    { 
                        selectA === 'oringinCat' ? <CatOriginalNFT /> : null
                    }
                    { 
                        selectA === 'bell' ? <BellNFT /> : null
                    }
                    { 
                        selectA === 'glass' ? <GlassNFT /> : null
                    }
                    { 
                        selectA === 'frame' ? <FrameNFT /> : null
                    }
                    { 
                        selectA === 'wifi' ? <WifiNFT /> : null
                    }
                </div>
                <div className={`${ animateCombine ? 'animate-combineB' : null }  scale-[1.2] absolute top-[200px] right-[440px] z-50`}>
                    { 
                        selectB === 'oringinCat' ? <CatOriginalNFT /> : null
                    }
                    { 
                        selectB === 'bell' ? <BellNFT /> : null
                    }
                    { 
                        selectB === 'glass' ? <GlassNFT /> : null
                    }
                    { 
                        selectB === 'frame' ? <FrameNFT /> : null
                    }
                    { 
                        selectB === 'wifi' ? <WifiNFT /> : null
                    }
                </div>
                <div className="absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-[50] ">
                    <img src="../../../../src/assets/images/circle.png" className="animate-rotateCircle"/>  
                </div>
                
                {
                    <div className={`${ combineAfterState === false ? 'opacity-100' : null }  scale-[1.2] absolute top-[50%] left-[50%] translate-x-[-50%] z-50 opacity-0`}>
                    {
                        combineAfter === 'catBell' ? <CatBellNFT /> : null
                    }
                    {
                        combineAfter === 'catGlass' ? <CatGlassNFT /> : null
                    }
                    {
                        combineAfter === 'catFrame' ? <CatFrameNFT /> : null
                    }
                    {
                        combineAfter === 'catWifi' ? <CatUfoNFT /> : null
                    }
                        <div className="scale-[0.45] z-[60] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <div className="animate-pulse">
                                <ShineImage />
                            </div>
                        </div>
                    </div>
                }

                <div className="absolute bottom-[-80%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[60]">
                    <SubButton 
                        btnName="close"
                        onClickEvent={() => { setAnimateCombine(false) }}
                    />
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-dark-100" />
            </div>
        }
        

        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto">
                {/*content*/}
                <div className="shadow-lg  focus:outline-none">
                    <img src="../../../../src/assets/images/combineCat.png" />
                </div>
                <div className="absolute top-[210px] left-[210px]">
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex flex-row gap-[60px] items-center">
                            <div className="relative w-[294px] h-[294px] rounded-2xl bg-dark-50 overflow-hidden cursor-pointer">
                                <div className="absolute top-[-50px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                { 
                                    selectStatusA === false && 
                                    <div 
                                        className="absolute top-[2px] left-[2px] w-[290px] h-[290px] ring-gold ring-2 animate-pulse box-border rounded-2xl"
                                        onClick={handleSelectA}
                                    >
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-[700] text-[70px]">Select</p>
                                    </div>
                                }
                                {
                                    selectStatusA && <div className="scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    { 
                                        selectA === 'oringinCat' ? <CatOriginalNFT /> : null
                                    }
                                    { 
                                        selectA === 'bell' ? <BellNFT /> : null
                                    }
                                    { 
                                        selectA === 'glass' ? <GlassNFT /> : null
                                    }
                                    { 
                                        selectA === 'frame' ? <FrameNFT /> : null
                                    }
                                    { 
                                        selectA === 'wifi' ? <WifiNFT /> : null
                                    }
                                    </div>
                                }
                                
                                
                                
                            </div>
                            
                            <div className="flex flex-col gap-[20px]">
                                <SubButton 
                                    btnName="Reselect"
                                    onClickEvent={handleReselect}
                                /> 
                                <SubButton 
                                    btnName="Combine"
                                    onClickEvent={handleCombine}
                                />      
                            </div>

                            <div className="relative w-[294px] h-[294px] rounded-2xl bg-dark-50 overflow-hidden cursor-pointer">
                                <div className="absolute top-[-50px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                { 
                                    selectStatusB === false && 
                                    <div 
                                        className="absolute top-[2px] left-[2px] w-[290px] h-[290px] ring-gold ring-2 animate-pulse box-border rounded-2xl"
                                        onClick={handleSelectB}
                                    >
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-[700] text-[70px]">Select</p>
                                    </div>
                                }
                                {
                                    selectStatusB && <div className="scale-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    { 
                                        selectB === 'oringinCat' ? <CatOriginalNFT /> : null
                                    }
                                    { 
                                        selectB === 'bell' ? <BellNFT /> : null
                                    }
                                    { 
                                        selectB === 'glass' ? <GlassNFT /> : null
                                    }
                                    { 
                                        selectB === 'frame' ? <FrameNFT /> : null
                                    }
                                    { 
                                        selectB === 'wifi' ? <WifiNFT /> : null
                                    }
                                    </div>
                                }
                                
                            </div>
                        </div>
                        <div className="w-[600px] flex flex-row gap-[15px] animate-slideSlow hover:paused overflow-hidden">
                            <div className={`
                                ${currentId === 'oringinCat' ? 'selectNFT' : null}
                                relative w-[94px] h-[94px] rounded-2xl bg-dark-50 overflow-hidden 
                            `}>
                                <div className="absolute top-[-20px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                <div 
                                    className="scale-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => { handleSelectNFT?.('oringinCat')}}
                                >
                                    <CatOriginalNFT /> 
                                </div>
                            </div>
                            <div className={` 
                                ${currentId === 'bell' ? 'selectNFT' : null}
                                relative w-[94px] h-[94px] rounded-2xl bg-dark-50 overflow-hidden 
                            `}>
                                <div className="absolute top-[-20px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                <div    
                                    className="scale-[0.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => { handleSelectNFT?.('bell')}}
                                >
                                    <BellNFT /> 
                                </div>
                            </div>
                            <div className={` 
                                ${currentId === 'glass' ? 'selectNFT' : null}
                                relative w-[94px] h-[94px] rounded-2xl bg-dark-50 overflow-hidden 
                            `}>
                                    <div className="absolute top-[-20px] left-0 scale-[1.75]">
                                        <img src="../../../../src/assets/images/galaxy.jpg" />
                                    </div>
                                    <div 
                                        className="scale-[0.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                        onClick={() => { handleSelectNFT?.('glass')}}
                                    >
                                        <GlassNFT /> 
                                    </div>
                            </div>
                            <div className={` 
                                ${currentId === 'frame' ? 'selectNFT' : null}
                                relative w-[94px] h-[94px] rounded-2xl bg-dark-50 overflow-hidden 
                            `}>
                                <div className="absolute top-[-20px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                <div 
                                    className="scale-[0.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => { handleSelectNFT?.('frame')}}
                                >
                                    <FrameNFT /> 
                                </div>
                            </div>
                            <div className={` 
                                ${currentId === 'wifi' ? 'selectNFT' : null}
                                relative w-[94px] h-[94px] rounded-2xl bg-dark-50 overflow-hidden 
                            `}>
                                <div className="absolute top-[-20px] left-0 scale-[1.75]">
                                    <img src="../../../../src/assets/images/galaxy.jpg" />
                                </div>
                                <div 
                                    className="scale-[0.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => { handleSelectNFT?.('wifi')}}
                                >
                                    <WifiNFT /> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                
                <button
                    className="right-[150px] absolute top-[180px] focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="text-white h-6 w-6 text-4xl block outline-none focus:outline-none">
                      X
                    </span>
                </button>
            </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-20 bg-dark-100"></div>
    </>
}

export default CombineModal