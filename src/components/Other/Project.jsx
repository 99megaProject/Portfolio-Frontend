import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastErrorProp } from "../utils.variable";

import { projectFn } from "../../controllers/project.controller";

export default function Project({ props }) {


  const mode_style = useSelector((state) => state.mode_style);
  const mode = useSelector((state) => state.mode);
  const [readFlage, setReadFlage] = useState(false);

  const name = props?.name || ''
  const date = props?.date || ''
  const description = props?.description || ''
  const image = props?.image || ''
  const technologies = props?.technologies || ''
  const link = props?.link || ''
  const video = props?.video || ''





  return (
    <div className="block rounded-lg p-4 relative shadow-sm shadow-indigo-100">
      <div className="">
        <a href={link} target="_main"><img
          alt="Home"
          src={image}
          className="h-56 w-full cursor-pointer  rounded-md object-cover"
        />
        </a>

        <div className="mt-2">
          <dl>
            <div>
              <dd className="text-sm text-gray-500">
                {date?.from}
                {<span className="opacity-0 select-none">....</span>}
                {date?.to}
              </dd>
            </div>

            <div>
              <a href={link} target="_main" > <dd className="font-medium capitalize">{name}</dd></a>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div>
              <div className="flex flex-wrap gap-[10px] select-none cursor-pointer ">
                {technologies &&
                  technologies?.map((tech) => (
                    <div key={Math.random()}
                      className={`px-[20px] font-semibold rounded py-[10px] ${mode ? "!bg-white !text-black " : "!text-black !bg-zinc-200"
                        }`}
                    >
                      <p className="capitalize">{tech}</p>
                    </div>
                  ))


                }
              </div>

              {/* description */}
              <div className="my-[20px]  ">
                {/* small -30 large 50 */}
                <p className="text-1xl capitalize">
                  {
                    !readFlage ? (window?.screen?.availWidth > 768 ?
                      description?.slice(0, 400) : description?.slice(0, 250)) : description
                  }
                  <span className="inline">
                    {" "}
                    <IoIosArrowRoundForward
                      className={`text-3xl inline cursor-pointer `}
                      onClick={() => setReadFlage((prev) => !prev)}
                    />{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
