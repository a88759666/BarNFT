import Container from "@/components/Container"
import HeaderBar from "@/components/HeaderBar"
import NFTCard from "@/components/NFTCard"
import ProfileBar from "./components/profileBar"
import {CatOriginalNFT, CatBellNFT, CatGlassNFT, CatFrameNFT, CatUfoNFT, BellNFT } from "@/assets"
import { useState } from "react"
import Footer from "@/components/Footer"


const Profile:React.FC = () => {
    const [ currentId, setcurrentId ] = useState('')
    function chooseNFT(currentId:string) {
        setcurrentId(currentId)
        // console.log(currentId)
    }

    return <>
        <Container>
            <div className="sticky top-0 z-50">
                <HeaderBar />
            </div>
        </Container>
        
        <ProfileBar id={currentId}/>
        <Container>
            <div className="flex flex-row gap-[55px] flex-wrap mt-[80px] mb-[80px]">
                <NFTCard 
                    NFTImage={<CatOriginalNFT />}
                    currentId="oringinCat"
                    width={253}
                    height={208}
                    openModal={chooseNFT}
                    NFTName='普通的貓'
                    catHas={true}
                />
                <NFTCard 
                    NFTImage={<BellNFT />}
                    currentId="bell"
                    width={253}
                    height={208}
                    openModal={chooseNFT}
                    NFTName='響噹噹的鈴鐺'
                    catHas={false}
                    scaleNum={60}
                />
                <NFTCard 
                    NFTImage={<CatBellNFT />}
                    width={253}
                    height={208}
                    currentId="bellCat"
                    openModal={chooseNFT}
                    NFTName='鈴響噹噹的鈴鐺'
                    catHas={true}
                />
                <NFTCard 
                    NFTImage={<CatGlassNFT/>}
                    currentId="glassCat"
                    width={253}
                    height={208}
                    openModal={chooseNFT}
                    NFTName='貓貓戴了眼鏡'
                    catHas={true}
                />
                <NFTCard 
                    NFTImage={<CatFrameNFT/>}
                    currentId="shoutCat"
                    width={253}
                    height={208}
                    openModal={chooseNFT}
                    NFTName='吶喊的貓'
                    catHas={true}
                />
                <NFTCard 
                    NFTImage={<CatUfoNFT />}
                    currentId="dramaCat"
                    width={253}
                    height={208}
                    openModal={chooseNFT}
                    NFTName='浮誇的貓'
                    catHas={true}
                />
            </div>
            <Footer />

        </Container>


    </>
}

export default Profile