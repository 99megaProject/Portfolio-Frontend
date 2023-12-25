import { ServiceOn } from '../export.comp'
import { useSelector } from "react-redux";



export default function Follow({ props }) {
    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)
    return (
        <div className="flex flex-wrap justify-center  gap-[20px]  ">

            <a href={props?.link} target="_main">
                <div className={` ${mode ? '!bg-white  ' : '  !bg-zinc-200'} p-[10px] !text-black rounded-full  rounded  `}>
                    {/* <p className="font-bold ">Freelancer</p> */}
                    <img className="w-[50px] h-[50px] rounded-full  " src={props?.image} alt="" />
                </div>
            </a>


        </div>
    )
}