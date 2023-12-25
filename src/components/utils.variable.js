const btn_style =
  "bg-violet-400 text-white w-[140px] h-[40px] px-[15px] py-[5px] rounded cursor-pointer transition-1s outline-none";

const outer_btn_style = "px-[5px] active:bg-red-500   lg:hover:bg-red-500 bg-violet-300 transition-all  duration-100 m-[10px] py-[5px] rounded-full "
const prev_btn_style = "text-5xl  transition-all duration-200 active:translate-x-[-10px]  transform lg:hover:translate-x-[-10px]"
const next_btn_style = "text-5xl transition-all duration-200 active:translate-x-[10px] transform lg:hover:translate-x-[10px]"

const toastErrorProp = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export { btn_style, toastErrorProp, outer_btn_style, next_btn_style, prev_btn_style };
