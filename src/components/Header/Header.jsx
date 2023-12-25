import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoToggleOutline } from "react-icons/io5";
import { IoToggleSharp } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { modeReduc } from '../slice'

export default function Header() {


    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    const dispatch = useDispatch()


    const modeHandle = () => {
        dispatch(modeReduc(!mode))
    }





    return (
        <>
            <header >
                <nav className={` ${mode_style} h-[50px] items-center flex px-[5vw] justify-between`}>
                    <div>
                        <h1 className={`text-3xl font-bold cursor-pointer  `}><span className="text-violet-400" >S</span>ANDEEP</h1>
                    </div>
                    <div className="cursor-pointer">
                        {/* light mode */}
                        <div className={`text-3xl font-bold flex gap-[5px] ${!mode ? 'flex' : "hidden"} `} onClick={modeHandle} >
                            < MdOutlineLightMode />
                            < IoToggleOutline />
                        </div>
                        {/* dark mode */}
                        <div className={`text-3xl font-bold flex gap-[5px] ${mode ? 'flex' : "hidden"} `} onClick={modeHandle} >
                            <LuMoon />
                            <IoToggleSharp />
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}