import SubButton from "./SubButton";
import {PersonalIcon, DiscordIcon, TwitterIcon} from "@/assets"
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const HeaderBar:React.FC = () => {
  const [ scrolling, setScrolling ] = useState(false)
  const [ scrollTop, setScrollTop ] = useState(0)
  const [ explorePage, setExplorePage] = useState(false)
  const go = useNavigate()

  useEffect(() => {
    function onScroll(){
      let currentPosition = window.pageYOffset
      // console.log(currentPosition)
      setScrollTop(currentPosition)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[scrollTop])

  useEffect(()=>{
    const location = window.location.href.split('/')[3] 
    if(location === 'explore'){
      setExplorePage(true)
    } else if(location === 'profile'){
      setExplorePage(true)
    } else {
      setExplorePage(false)
    }
    console.log(location)
  },[location])

  return <>
    <header className={`
      ${
        scrolling === true ? 'bg-dark-50 bg-opacity-80' : 'bg-dark-100' 
      } w-full flex flex-row justify-between items-center py-[40px] `}>
      <div>
        <h1 className="font-sans text-gold font-bold text-[24px] cursor-pointer"  onClick={() => go("/home")}>Tipsy Cat</h1>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row mr-[10px]">
          <li className="mr-[10px]">
            <a className="peer relative nav_btn">Explore</a>
              <ul className="absolute top-[94px] hidden peer-hover:block hover:flex-col hover:flex bg-dark-80 drop-shadow-2xl border-t-2 border-gold ml-[-6px]">
                <li className="li_btn" onClick={() => go("/explore")}>All NFT</li>
                <li className="li_btn" onClick={() => go("/explore")}>Season NFT</li>
              </ul>
          </li>
          <li>
            <a className="relative peer nav_btn">About us</a>
              <ul className="absolute top-[94px] hidden  peer-hover:block hover:flex flex-col bg-dark-80 drop-shadow-2xl border-t-2 border-gold ml-[8px]">
                <li className="li_btn" onClick={() => { explorePage && go("/home#MainPage")}}><a href="#MainPage">Main</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#StoryPage")}}><a href="#StoryPage">Story</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#MintPage")}}><a href="#MintPage">Mint</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#PlanPage")}}><a href="#PlanPage">Plan</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#RoadmapPage")}}><a href="#RoadmapPage">Roadmap</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#TeamPage")}}><a href="#TeamPage">Team</a></li>
                <li className="li_btn" onClick={() => { explorePage && go("/home#FAQPage")}}><a href="#FAQPage">FAQ</a></li>
              </ul>
          </li>
        </ul>
        <SubButton 
          btnName="Connect Wallet"
          pxNumber={30}
        />
        <div className="absolute right-[200px] z-10 opacity-0">
          <ConnectButton label="connect  Walleteeew"/>
        </div>

        <div className="ml-[40px] flex flex-row items-center gap-[30px]" >
          <div className="cursor-pointer peer relative items-center py-[10px]">
            <PersonalIcon />
          </div>
          <ul className="absolute top-[105px] hidden peer-hover:block hover:flex flex-col bg-dark-80 drop-shadow-2xl ml-[-40px] border-t-2 border-gold">
            <li className="li_btn" onClick={() => go("/profile")}>All NFT</li>
            <li className="li_btn" onClick={() => go("/profile")}>Season NFT</li>
          </ul>
          <div className="flex flex-row items-center gap-[10px] cursor-pointer">
            <DiscordIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </header>
  </>
}
    
  export default HeaderBar;