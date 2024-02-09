import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export function Skill({ props }) {


    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    return (

        <div className={`px-[20px] font-semibold rounded py-[10px] ${mode ? '!bg-white !text-black ' : '!text-black !bg-zinc-200'}`}>
            <p className="capitalize">{props}</p>
        </div>

    )
}

export function SliderBtn() {

    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    return (

        <div>
            <button className="px-[5px] hover:bg-red-200 bg-violet-300 transition duration-2000 m-[10px] py-[5px] rounded-full " ><IoIosArrowRoundBack className="text-5xl transform hover:translate-x-[-10px]" onClick={leftBtnHandle} /></button>
            <button className="px-[5px] hover:bg-red-200 bg-violet-300 transition duration-2000 py-[5px] rounded-full "  ><IoIosArrowRoundForward className="text-5xl transform hover:translate-x-[10px]" onClick={rightBtnHandle} /> </button>
        </div>

    )
}