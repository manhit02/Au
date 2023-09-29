"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const KhoDo = () => {

  return (
    // doi thanh relative thanh fixed
    <div className="relative z-10 top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="w-full max-w-[1177px] border-[2px] border-[#A7A7A7] rounded-[10px] bg-white px-2">
      <div className="flex p-5">
        <div className="w-1/3"></div>
        <div className="w-1/3 flex justify-center"> <span className={`${inter.className} font-bold text-2xl text-[#242424]`}>KHO ĐỒ</span></div>
        <div className="w-1/3 flex justify-end">
          <Link href="" className="">
          <Image src="/assets/images/kd-icon-1.svg" alt="close" width={24} height={24} />

          </Link>
        </div>
      </div>
      <div className="overflow-hidden overflow-x-scroll flex mb-2 pb-4">
        <table className="flex-shrink-0 min-w-full">
          <thead>
            <tr className="bg-[#B8B8B8] h-[45px]">
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>STT</th>
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>Thời gian</th>
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>Nội dung</th>
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>Giải thưởng</th>
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>Tài khoản</th>
              <th className={`${inter.className} text-black text-base px-2 align-middle text-center`}>Tình trạng</th>
              </tr>
          </thead>
          <tbody>
            <tr className="h-[45px] align-middle text-center">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black`}>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr className="h-[60px] align-middle text-center bg-[#D9D9D9]">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2 `}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black hidden`}>Đã nhận</span>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#9D4EDD] rounded flex-shrink-0 mr-2` }>Nhận</Link>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#FBC12B] rounded flex-shrink-0`}>Tặng</Link>
                </div>
              </td>
            </tr>
            <tr className="h-[45px] align-middle text-center">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black`}>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr className="h-[60px] align-middle text-center bg-[#D9D9D9]">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2 `}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black hidden`}>Đã nhận</span>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#9D4EDD] rounded flex-shrink-0 mr-2` }>Nhận</Link>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#FBC12B] rounded flex-shrink-0`}>Tặng</Link>
                </div>
              </td>
            </tr>
            <tr className="h-[45px] align-middle text-center">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black`}>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr className="h-[60px] align-middle text-center bg-[#D9D9D9]">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2 `}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black hidden`}>Đã nhận</span>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#9D4EDD] rounded flex-shrink-0 mr-2` }>Nhận</Link>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#FBC12B] rounded flex-shrink-0`}>Tặng</Link>
                </div>
              </td>
            </tr>
            <tr className="h-[45px] align-middle text-center">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black`}>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr className="h-[60px] align-middle text-center bg-[#D9D9D9]">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2 `}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black hidden`}>Đã nhận</span>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#9D4EDD] rounded flex-shrink-0 mr-2` }>Nhận</Link>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#FBC12B] rounded flex-shrink-0`}>Tặng</Link>
                </div>
              </td>
            </tr>
            <tr className="h-[45px] align-middle text-center">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black`}>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr className="h-[60px] align-middle text-center bg-[#D9D9D9]">
              <td className={`${inter.className} text-base font-normal text-black px-2`}>1</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>13/09/2023</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Đăng nhập game 3 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Bộ Hoàng gia 30 ngày</td>
              <td className={`${inter.className} text-base font-normal text-black px-2`}>Audition</td>
              <td className={`${inter.className} text-base font-normal text-black px-2 `}>
                <div className="flex item-center justify-center">
                  <span className={`${inter.className} text-base font-normal text-black hidden`}>Đã nhận</span>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#9D4EDD] rounded flex-shrink-0 mr-2` }>Nhận</Link>
                  <Link href="" className={`${inter.className} flex items-center justify-center text-base font-bold text-white h-10 px-[30px] block bg-[#FBC12B] rounded flex-shrink-0`}>Tặng</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex item-center justify-center mb-5">
        <Link href="">
          <Image width={20} height={20} src="/assets/images/kd-icon-2.svg" alt="prev"/>
        </Link>
        <Link href="" className={`${inter.className} text-xs text-black mx-4 flex items-center relative kd-active`}>
         1
        </Link>
        <Link href="" className={`${inter.className} text-xs text-black mx-4 flex items-center relative `}>
        2
        </Link>
        <Link href="" className={`${inter.className} text-xs text-black mx-4 flex items-center relative `}>
          3
        </Link>
        
        <Link href="">
          <Image width={20} height={20} src="/assets/images/kd-icon-2.svg" alt="next" className="rotate-180"/>
        </Link>
      </div>
      </div>
    </div>
);
};
export default KhoDo;
