import React from "react";
import { useSelector } from "react-redux";


export default function ServiceOn({ props }) {
    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    return (
        <div className="flex flex-wrap justify-center   gap-[20px]  ">

            <a href={props?.link} target='_main'>
                <div className={` ${mode ? '!bg-white  ' : '  !bg-zinc-200'} !text-black  p-[10px] rounded-full  `}>
                    {/* <p className="font-bold ">Fiverr</p> */}
                    <img className="w-[50px] h-[50px] rounded-full  " src={props?.image} alt="" />
                </div>
            </a>

        </div>

    )
}