"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const ThongBao = () => {

  return (
    // doi thanh relative thanh fixed

    <div className="relative z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="w-[95%] max-w-[484px] rounded-[10px] bg-white">
      <div className="flex p-5">
        <div className="w-2/12"></div>
        <div className="w-8/12"> <span className={`${inter.className} font-bold text-2xl text-[#242424] text-center block w-full uppercase`}>thông báo</span></div>
        <div className="w-2/12 flex justify-end">
          <Link href="" className="">
          <Image src="/assets/images/kd-icon-1.svg" alt="close" width={24} height={24} />

          </Link>
        </div>
      </div>
      <span className={`${inter.className} font-bold text-xl text-[#242424] text-center block w-full uppercase pb-10 pt-5 px-14`}>chúc mừng bạn đã nhận quà thành công!</span>
      </div>
    </div>
);
};
export default ThongBao;
