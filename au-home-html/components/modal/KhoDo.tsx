"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
const KhoDo = () => {

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
      <div className="overflow-hidden overflow-x-scroll">
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Thời gian</th>
              <th>Nội dung</th>
              <th>Giải thưởng</th>
              <th>Tài khoản</th>
              <th>Tình trạng</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>13/09/2023</td>
              <td>Đăng nhập game 3 ngày</td>
              <td>Bộ Hoàng gia 30 ngày</td>
              <td>Audition</td>
              <td>
                <div className="flex">
                  <span>Đã nhận</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>13/09/2023</td>
              <td>Đăng nhập game 3 ngày</td>
              <td>Bộ Hoàng gia 30 ngày</td>
              <td>Audition</td>
              <td>
                <div className="flex">
                  <span className="hidden">Đã nhận</span>
                  <Link href="">Nhận</Link>
                  <Link href="">Tặng</Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex">
        <Link href="">
          <Image width={20} height={20} src="../../public/assets/images/kd-icon-2.svg" alt="prev"/>
        </Link>
        <Link href="">
         1
        </Link>
        <Link href="">
        2
        </Link>
        <Link href="">
          3
        </Link>
        
        <Link href="">
          <Image width={20} height={20} src="../../public/assets/images/kd-icon-2.svg" alt="next"/>
        </Link>
      </div>
      </div>
    </div>
);
};
export default KhoDo;
