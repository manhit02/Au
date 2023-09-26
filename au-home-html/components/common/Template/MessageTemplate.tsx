import { useMyReducer } from "@/store/Provider";
import { renderUrlImage } from "@/utils/log-helper";
import Link from "next/link";
import { Mulish } from "next/font/google";
import appSlice from "@/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
interface P {
  message: string;
}
const mulish = Mulish({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// 1 popup demo
const MessageTemplate = (props: P) => {
  const { message } = props;
  // khai báo các thành phần để điều khiển popup
  const dispatch = useAppDispatch();
  const { updateModalState } = appSlice.actions;
  return (
    // w-63-ctp h-97-ctp
    <div className="bg-black bg-opacity-50 fixed inset-0 z-20 w-full h-full flex items-center justify-center">
      <div
        className={`relative lg:p-10 p-4 bg-background-demo bg-contain w-[640px] bg-no-repeat bg-center lg:h-[410px]`}
        // bấm vào popup ko tự tắt
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <a href="" className="absolute right-0 lg:-top-20 -top-14">
          <img
            src={
              process.env.NEXT_PUBLIC_BASE_MEDIA +
              "/assets/images/btn_clos_demo.png"
            }
            style={{ cursor: "pointer" }}
            alt=""
            //action khi tắt popup
            onClick={() => {
              dispatch(updateModalState(null));
            }}
          />
        </a>
        <h4 className="uppercase text-[#610000] pt-4 pb-4 text-center block lg:text-3xl text-xl">
          thông báo
        </h4>
        <p className="p-5 text-center lg:text-lg text-base w-[80%] m-auto md:w-1/2 xl:w-full">
          {message}
        </p>
      </div>
    </div>
  );
};

export default MessageTemplate;
