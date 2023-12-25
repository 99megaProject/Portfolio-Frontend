import React, { useState } from "react";
import { btn_style, toastErrorProp } from "../utils.variable";
import { useSelector } from "react-redux";
import { contactMeFn } from "../../controllers/service.controller";
import { toast } from "react-toastify";

export default function Contact() {

    const mode_style = useSelector((state) => state.mode_style)
    const mode = useSelector((state) => state.mode)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitHandle = async () => {
        try {

            // console.log(name, email, message);

            if ([name, email, message].some((field) => field.trim() == '')) return toast.error('All credentail required.', toastErrorProp)

            let wordLimit = wordLimitFn(message)
            if (wordLimit) return toast.error(wordLimit, toastErrorProp)

            const data = await contactMeFn(name, email, message)
            setName('')
            setEmail('')
            setMessage('')

            if (data && data?.success) return toast.success(data?.message || 'Message post successfully.', toastErrorProp)
            else if (data && data?.success == false) return toast.error(data?.message || 'Something went wrong.', toastErrorProp)
            else return toast.error('Something went wrong.', toastErrorProp)




        } catch (error) {
            return toast.error('Something went wrong.', toastErrorProp)
        }
    }

    return (
        <div className="my-[20px]  w-[100%] flex justify-center  ">
            <div className={`!text-black w-[100%] sm:w-[80%] flex flex-col gap-[10px] rounded px-[20px] sm:px-[30px] py-[10px] `}>

                <div>
                    <p className="font-semibold">Name</p>
                    <input value={name} onChange={(e) => setName(e.target.value)} className={`${mode_style} mt-[5px]  !text-black px-[10px] py-[5px] rounded  w-[100%] `} type="text" placeholder="Enter your name." />
                </div>
                <div>
                    <p className="font-semibold">Email</p>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className={`${mode_style}  mt-[5px] !text-black px-[10px] py-[5px] rounded  w-[100%] `} type="text" placeholder="Enter your Email." />
                </div>
                <div>
                    <p className="font-semibold">Message</p>
                    <textarea value={message} maxLength={200} spellCheck={true} required={true} onChange={(e) => setMessage(e.target.value)} className={`${mode_style} mt-[5px]  !text-black px-[10px] py-[5px] rounded  w-[100%] `} type="text" placeholder="Type your message." rows="3"></textarea>
                </div>
                <button className={`px-[10px] py-[5px] bg-violet-300 rounded active:bg-red-500  bg-white flex justify-center items-center  self-end`} onClick={submitHandle} >Submit</button>
            </div>


        </div>

    )
}

// word limit at contact message

function wordLimitFn(word) {

    word = word.trim();
    if (word == '') return 'Message is required.'
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            if (word[i - 1] != ' ') count++
        }
    }
    count++;

    if (count > 25) return 'Message should be less than 25 words.'
    return ''
}