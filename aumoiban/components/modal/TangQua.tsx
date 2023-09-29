"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const TangQua = () => {

  return (
    // doi thanh relative thanh fixed
    <div className="relative z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="w-[95%] max-w-[614px] rounded-[10px] bg-white">
      <div className="flex p-5">
        <div className="w-2/12"></div>
        <div className="w-8/12"> <span className={`${inter.className} font-bold text-2xl text-[#242424] text-center block w-full`}>TẶNG QUÀ</span></div>
        <div className="w-2/12 flex justify-end">
          <Link href="" className="">
          <Image src="/assets/images/kd-icon-1.svg" alt="close" width={24} height={24} />

          </Link>
        </div>
      </div>
      <div className="flex flex-wrap px-3">
        <label htmlFor="tangqua" className={`${inter.className} text-base text-[#242424]`}>Tên tài khoản:</label>
        <input type="text" id="tangqua" className={`${inter.className} text-base text-[#242424] order-3 w-full border-[#B0B0B0] bg-[#EBEBEB] outline-0 mt-1 rounded`}/>
        <Link href="" className={`${inter.className} text-base text-[#00C2FF] underline ml-auto`}>Kiểm tra</Link>
      </div>
      <span className={`${inter.className} text-base text-[#F00] text-center block px-12 mt-5`}>Lưu ý: Tên tài khoản phải viết đúng chữ hoa và chữ thường</span>
      <span className={`${inter.className} text-base text-[#13CEF6] text-center block px-12 mt-1`}>Tặng thành công!</span>
      <div className="flex item-center justify-center">
        <Link href="" className={`${inter.className} text-[20px] text-[#fff] flex items-center justify-center font-bold block w-[120px] mt-2 mb-6 h-10 bg-[#FBC12B] rounded mx-2`}> Tặng ngay</Link>
        <Link href="" className={`${inter.className} text-[20px] text-[#fff] flex items-center justify-center font-bold block w-[120px] mt-2 mb-6 h-10 bg-[#505050] rounded mx-2`}>Hủy</Link>
      </div>
      </div>
    </div>
);
};
export default TangQua;
