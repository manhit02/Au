"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ScrollToTopButton from "@/components/section/ScrollToTopButton";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";

const DangKy = () => {
  return (
    <>
      <section className="bg-[#EAEAEA] py-4 lg:py-[70px] px-[10px] ">
        <div className="container m-auto">
          <div className="flex flex-col">
            <Image
              src="/assets/images/dkn-k-1.png"
              width={356}
              height={45}
              alt="Tạo tài khoản nhanh"
              className="w-full md:w-[458px] md:h-[71px] mb-5 mx-auto "
            />
            <div className="flex flex-col md:flex-row flex-wrap  md:justify-center">
           <Image src="/assets/images/dkn-img-1.png" alt="dkn-img-1" width={275} height={493} className="hidden "/>
              <div className="w-full md:w-[316px] md:mx-2 border border-[#6D6D6D] border-dashed p-5 md:p-2 mb-5 md:m-0">
                <div className="md:min-h-[270px]">

                <span
                  className={`${inter.className} font-medium text-base md:text-sm text-black`}
                >
                  Tên tài khoản (VTC ID)
                </span>
                <label htmlFor="" className="flex items-center mt-1 relative">
                  <input
                    type="text"
                    placeholder="4 - 16 ký tự"
                    className={`w-full text-black text-sm md:text-xs placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                  />
                </label>
                {/* check nhap*/}
                <span
                  className={`${inter.className} block text-xs text-[#F00] font-light italic my-2`}
                >
                  Tên tài khoản không hợp lệ
                </span>
                <span
                  className={`${inter.className} font-medium text-base text-black mt-4 block`}
                >
                  Mật khẩu
                </span>
                <label htmlFor=" " className="relative">
                  <input
                    type="text"
                    placeholder="4 - 18 ký tự và không chứa khoảng trắng"
                    className={`w-full text-black text-sm md:text-xs placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                  />

                  <Image
                    height={18}
                    width={18}
                    src="/assets/images/showpw.svg"
                    alt="Show PassWord"
                    className="absolute top-1/2 -translate-y-1/2 right-2"
                  />
                  <Image
                    height={18}
                    width={18}
                    src="/assets/images/hiddenpw.svg"
                    alt="Hidden PassWord"
                    className="absolute top-1/2 -translate-y-1/2 right-2"
                  />
                </label>
                {/* check nhap*/}
                <span
                  className={`${inter.className} block text-xs text-[#F00] font-light italic my-2`}
                ></span>
                <span
                  className={`${inter.className} font-medium text-base text-black mt-4 block`}
                >
                  Nhập lại mật khẩu
                </span>
                <label htmlFor=" " className="relative">
                  <input
                    type="text"
                    placeholder="4 - 18 ký tự và không chứa khoảng trắng"
                    className={`w-full text-black text-sm md:text-xs placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                  />
                  <Image
                    height={18}
                    width={18}
                    src="/assets/images/showpw.svg"
                    alt="Show PassWord"
                    className="absolute top-1/2 -translate-y-1/2 right-2"
                  />
                  <Image
                    height={18}
                    width={18}
                    src="/assets/images/hiddenpw.svg"
                    alt="Hidden PassWord"
                    className="absolute top-1/2 -translate-y-1/2 right-2"
                  />
                </label>
                {/* check nhap*/}
                <span
                  className={`${inter.className} block text-xs text-[#F00] font-light italic my-2`}
                >
                  Nhập lại mật khẩu không đúng
                </span>

                </div>
                <div className="flex flex-col  mt-8">
                  <div className="flex align-center justify-center">
                    <Image
                      src="/assets/images/dkn-icon-3.svg"
                      alt="dkn-icon-3"
                      width={17}
                      height={17}
                      className=""
                    />
                    <span
                      className={`${inter.className} ml-1 block text-sm text-[#000] font-bold `}
                    >
                      Bước 1:
                    </span>
                </div>
                  </div>
                  <p
                    className={`${inter.className} ml-1 block text-base md:text-sm text-[#000] font-normal text-center `}
                  >
                    Tạo tên tài khoản VTCID
                  </p>
                  <p
                    className={`${inter.className} ml-1 block text-base md:text-sm text-[#000] font-normal text-center `}
                  >
                    (nếu bạn chưa có tài khoản)
                  </p>
              </div>
              <div className="w-full md:w-[316px] md:mx-2 border border-[#6D6D6D] border-dashed p-5 md:p-2 mb-10 md:m-0">
                <div className="md:min-h-[270px]">

                <span
                  className={`${inter.className} font-medium text-base md:text-sm text-black`}
                >
                  Tên nhân vật trong game
                </span>
                <label htmlFor="">
                  <input
                    type="text"
                    placeholder="4 - 12 ký tự, không dấu và không ký tự đặc biệt"
                    className={`w-full text-black text-xs placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                  />
                </label>
                {/* check */}
                <span
                  className={`${inter.className} block text-xs text-[#F00] font-light italic my-2`}
                >
                  Tên tài khoản không hợp lệ
                </span>
                <span
                  className={`${inter.className} font-medium text-base text-black mt-4 block`}
                >
                  Giới tính nhân vật
                </span>
                <select
                  name=""
                  id=""
                  className={`w-full text-black text-sm md:text-xs placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                >
                  <option value="">Nam</option>
                  <option value="">Khác</option>
                  <option value="">Nũ</option>
                </select>

                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex align-center justify-center">
                    <Image
                      src="/assets/images/dkn-icon-3.svg"
                      alt="dkn-icon-3"
                      width={17}
                      height={17}
                    />
                    <span
                      className={`${inter.className} ml-1 block text-sm text-[#000] font-bold `}
                    >
                      Bước 2:
                    </span>
                </div>
                  </div>
                  <p
                    className={`${inter.className} ml-1 block text-base md:text-sm text-[#000] font-normal text-center `}
                  >
                    Tạo nhân vật trong game
                  </p>
                  <p
                    className={`${inter.className} ml-1 block text-base md:text-sm text-[#000] font-normal text-center `}
                  >
                    (khi tạo mới tài khoản VTCID hoặc đã có tài khoản nhưng chưa
                    có nhân vật)
                  </p>
              </div>
              <div className="w-full md:w-[316px] border border-[#6D6D6D] border-dashed p-5 md:p-2 md:mt-2 lg:mt-0">
                <div className="md:min-h-[270px]">

                <span
                  className={`${inter.className} font-medium text-base md:text-sm text-black`}
                >
                  Lựa chọn 1 bộ trang phục (quà tặng)
                </span>
                <div className="flex items-center mt-1">
                  <div className="relative group/item">
                  <Image
                    src="/assets/images/dkn-img-3.png"
                    alt="dkn-img-3"
                    width={70}
                    height={70}
                    className="mr-1 group-hover/item:border-[2px] group-hover/item:border-[#7B2CBF] rounded  "
                  />
                   <Image
                    src="/assets/images/dkn-imgto-3.png"
                    alt="dkn-imgto-3"
                    width={170}
                    height={336}
                    className="hidden group-hover/item:block max-w-none  absolute top-full left-0 md:left-1/2 md:-translate-x-1/2 border-[2px] border-[#fff]"
                  />
                  </div>
                  <div className="relative group/item">
                  <Image
                    src="/assets/images/dkn-img-3.png"
                    alt="dkn-img-3"
                    width={70}
                    height={70}
                    className="mr-1 group-hover/item:border-[2px] group-hover/item:border-[#7B2CBF] rounded  "
                  />
                   <Image
                    src="/assets/images/dkn-imgto-3.png"
                    alt="dkn-imgto-3"
                    width={170}
                    height={336}
                    className="hidden group-hover/item:block max-w-none  absolute top-full left-1/2 -translate-x-1/2 border-[2px] border-[#fff]"
                  />
                  </div>
                  <div className="relative group/item">
                  <Image
                    src="/assets/images/dkn-img-3.png"
                    alt="dkn-img-3"
                    width={70}
                    height={70}
                    className="mr-1 group-hover/item:border-[2px] group-hover/item:border-[#7B2CBF] rounded  "
                  />
                   <Image
                    src="/assets/images/dkn-imgto-3.png"
                    alt="dkn-imgto-3"
                    width={170}
                    height={336}
                    className="hidden group-hover/item:block max-w-none  absolute top-full left-1/2 -translate-x-1/2 border-[2px] border-[#fff]"
                  />
                  </div>
                  <div className="relative group/item">
                  <Image
                    src="/assets/images/dkn-img-3.png"
                    alt="dkn-img-3"
                    width={70}
                    height={70}
                    className="mr-1 group-hover/item:border-[2px] group-hover/item:border-[#7B2CBF] rounded  "
                  />
                   <Image
                    src="/assets/images/dkn-imgto-3.png"
                    alt="dkn-imgto-3"
                    width={170}
                    height={336}
                    className="hidden group-hover/item:block max-w-none  absolute top-full right-0 md:left-1/2 md:-translate-x-1/2 border-[2px] border-[#fff]"
                  />
                  </div>
                </div>
                <span
                  className={`${inter.className} font-medium text-base text-black block mt-3 mb-2`}
                >
                  Mã kiểm tra
                </span>
                <div className="flex item-center">
                  <div className="w-5/12">
                    <input
                      type="text"
                      className="w-full h-[30px] border-[#C2C2C2] outline-0 rounded-md m-auto"
                    />
                  </div>
                  <div className="w-5/12">
                    <Image
                      src="/assets/images/dkn-img-7.png"
                      alt="dkn-img-7"
                      width={120}
                      height={30}
                      className="m-auto"
                    />
                  </div>
                  <div className="w-2/12 flex items-center justify-center">
                    <Image
                      src="/assets/images/dkn-icon-5.svg"
                      alt="dkn-icon-5"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex ">
                  <label
                    htmlFor=""
                    className={`${inter.className} font-light text-sm md:text-xs text-black mt-3`}
                  >
                    <input type="radio" name="" id="" className="mr-1 w-3 h-3" />
                    Tôi đã đọc và đồng ý với{" "}
                    <Link href="" className="text-[#F00]">
                      Điều Khoản Sử Dụng
                    </Link>
                  </label>
                  {/* check */}
                </div>
                <span
                  className={`${inter.className} block w-full text-center text-xs text-[#F00] font-light italic my-2`}
                >
                  Mã xác nhận không đúng!
                </span>
                <button className="w-[140px] h-[40px] bg-[#9D4EDD] rounded-[10px] m-auto block">
                  Xác nhận
                </button>
                </div>
                <div className="flex flex-col mt-8">
                  <div className="flex align-center justify-center">
                    <Image
                      src="/assets/images/dkn-icon-3.svg"
                      alt="dkn-icon-3"
                      width={17}
                      height={17}
                    />
                    <span
                      className={`${inter.className} ml-1 block text-sm text-[#000] font-bold `}
                    >
                      Bước 3:
                    </span>
                </div>
                  </div>
                  <p
                    className={`${inter.className} ml-1 block text-base md:text-sm text-[#000] font-normal text-center `}
                  >
                    Chọn bộ trang phục quà tặng và xác nhận thông tin
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 lg:mt-[60px] pb-6 lg:pb-[43px] ">
        <div className="container m-auto">
          <div className="flex flex-col ">
            <Image
              src="/assets/images/dkn-k-2.png"
              width={356}
              height={45}
              alt="Điểm giờ online"
              className="w-full md:w-[458px] md:h-[71px] mb-5 px-[10px] mx-auto"
            />

            <span
              className={`font-normal text-sm text-black ${inter.className} text-center px-[10px] mb-4`}
            >
              Người chơi cũ không login game từ 1/5 - 30/6/2023 nhưng đã từng
              online trước đó, từ 22/7 - 27/7/2023 online mỗi ngày 15 phút.{" "}
              <Link
                href=""
                className={`font-normal text-sm text-[#9D4EDD] ${inter.className}`}
              >
                Chi tiết
              </Link>
            </span>
            <div className="w-full pt-[6px] pb-3 bg-[#EDEDED] relative px-7 rounded-[40px]">
              <Swiper
                className="mySwiper3 w-full"
                spaceBetween={0}
                slidesPerView={2}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                navigation={{
                  nextEl: ".control-sw3-next1",
                  prevEl: ".control-sw3-prev1",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 2 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 3 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 4 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <a href="" className="control-sw3-prev1 block">
                prev
              </a>
              <a href="" className="control-sw3-next1 block">
                next
              </a>
            </div>
            <span
              className={`font-normal text-sm text-black ${inter.className} text-center px-[10px] my-4`}
            >
              Người chơi cũ không login game từ 1/5 - 30/6/2023 nhưng đã từng
              online trước đó, từ 22/7 - 27/7/2023 online mỗi ngày 15 phút.{" "}
              <Link
                href=""
                className={`font-normal text-sm text-[#9D4EDD] ${inter.className}`}
              >
                Chi tiết
              </Link>
            </span>
            <div className="w-full pt-[6px] pb-3 bg-[#EDEDED] relative px-7 rounded-[40px]">
              <Swiper
                className="mySwiper4 w-full"
                spaceBetween={0}
                slidesPerView={2}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                loop={true}
                navigation={{
                  nextEl: ".control-sw3-next",
                  prevEl: ".control-sw3-prev",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    spaceBetween: 20,
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 2 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 3 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 4 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span
                      className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}
                    >
                      Online 1 ngày
                    </span>
                    <div
                      className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}
                    >
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`}
                        href=""
                      >
                        Nhận
                      </Link>
                      <Link
                        className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`}
                        href=""
                      >
                        Tặng
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <a href="" className="control-sw3-prev block">
                prev
              </a>
              <a href="" className="control-sw3-next block">
                next
              </a>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default DangKy;
