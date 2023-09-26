"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const ThongBao = () => {

  return (
    <div className="fixed z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-[1177px]">
      <div className="flex p-5">
        <div className="w-1/3"></div>
        <div className="w-1/3"> <span>KHO ĐỒ</span></div>
        <div className="w-1/3 flex justify-end">
          <Link href="" className="">
          <Image src="/assets/images/kd-icon-1.svg" alt="close" width={24} height={24} />

          </Link>
        </div>
      </div>
      <span>chúc mừng bạn đã nhận quà thành công!</span>
      </div>
    </div>
);
};
export default ThongBao;
