
import {HamburgerIcon, SearchIcon } from "@/assets"
import SubButton from "@/components/SubButton";
import { useEffect, useState } from "react";
type toggleStep = 'all' | 'season' | 'special' | '鬼靈精怪的眼鏡' | '響噹噹的鈴鐺' | '破舊的畫框' | '沒甚麼用的控制器' | '可愛的貓貓' | '五顏六色的彩虹'


type props = {
    openMenu: () => void
    onHandleSearch: (searchValue: toggleStep) => void
    searchValue: string,
    sortValue: { name: string; id: string; }[] | undefined,
    handleSearchChange: React.ChangeEventHandler<HTMLInputElement>
    mockData: { name: string; id: string; }[]
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}
const NavBar:React.FC<props> = ({
    openMenu,
    onHandleSearch,
    searchValue,
    sortValue,
    handleSearchChange,
    mockData,
    setSearchValue
}) => {
    

    // useEffect(()=>{
    //     console.log(debouncedSearchValue)
    // })

    return <>
        <header className="flex flex-row justify-between items-center px-[15%] py-[15px] bg-dark-80">
            <div className="flex flex-row gap-[20px]"> 
                <div className="mt-[10px] cursor-pointer">
                    <HamburgerIcon 
                        onClick={openMenu}
                    />
                </div>
                <SubButton 
                    btnName="NFT product"
                    pxNumber={30}
                />
                <SubButton 
                    btnName="Collection"
                    pxNumber={30}
                />
                
            </div>
            <div className="flex flex-col relative">
                <label className="flex flex-row border-2 border-white rounded-md overflow-hidden bg-dark-100 items-center">
                    <input
                        type='text'
                        placeholder='search bar'
                        name="search"
                        className="w-[280px] px-[15px] py-[5px] text-center appearance-none bg-dark-100 outline-none placeholder:italic placeholder:text-slate-400 text-white"
                        value={searchValue} 
                        onChange={handleSearchChange}
                        autoComplete="off"
                    />
                    <div 
                        className="pr-[5px] cursor-pointer"
                        onClick={()=>{onHandleSearch?.(searchValue as toggleStep)}}
                    >
                        <SearchIcon />
                    </div>
                </label>
                {
                    searchValue && <div className="absolute top-[40px] left-0 w-full bg-white flex flex-col z-50 rounded-xl overflow-hidden">
                        <ul className="">
                            {
                                sortValue !== undefined
                                    ? sortValue.map((item) => <li key={item.id} className="p-[10px] border-b-2 border-gray-light cursor-pointer" onClick={()=>{setSearchValue(item.name)}}>{item.name}</li>)
                                    : mockData.map((item) => <li key={item.id} className="p-[10px] border-b-2 border-gray-light cursor-pointer" onClick={()=>{setSearchValue(item.name)}}>{item.name}</li>)
                            }
                        </ul>
                    </div>
                }
                
            </div>
      </header>
    </>
  }
    
  export default NavBar;