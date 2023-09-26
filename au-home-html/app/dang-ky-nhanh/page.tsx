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
              className="w-full lg:w-[558px] lg:h-[71px] mb-5"
            />
            <div className="flex flex-col">
              <div className="w-full border border-[#6D6D6D] border-dashed p-5 mb-5">
                <span
                  className={`${inter.className} font-medium text-base text-black`}
                >
                  Tên tài khoản (VTC ID)
                </span>
                <label htmlFor="" className="flex items-center mt-1 relative">
                  <input
                    type="text"
                    placeholder="4 - 16 ký tự"
                    className={`w-full text-black text-sm placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
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
                    className={`w-full text-black text-sm placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
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
                    className={`w-full text-black text-sm placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
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
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    Tạo tên tài khoản VTCID
                  </p>
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    (nếu bạn chưa có tài khoản)
                  </p>
                </div>
              </div>
              <div className="w-full border border-[#6D6D6D] border-dashed p-5 mb-10">
                <span
                  className={`${inter.className} font-medium text-base text-black`}
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
                  className={`${inter.className} font-medium text-base text-black mt-5 block`}
                >
                  Giới tính nhân vật
                </span>
                <select
                  name=""
                  id=""
                  className={`w-full text-black text-sm placeholder:text-[#656565] placeholder:font-light placeholder:italic ${inter.className} h-9 border-[#C2C2C2] outline-0 rounded `}
                >
                  <option value="">Nam</option>
                  <option value="">Khác</option>
                  <option value="">Nũ</option>
                </select>

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
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    Tạo nhân vật trong game
                  </p>
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    (khi tạo mới tài khoản VTCID hoặc đã có tài khoản nhưng chưa
                    có nhân vật)
                  </p>
                </div>
              </div>
              <div className="w-full border border-[#6D6D6D] border-dashed p-5 ">
                <span
                  className={`${inter.className} font-medium text-base text-black`}
                >
                  Lựa chọn 1 bộ trang phục (quà tặng)
                </span>
                <div className="flex items-center mt-1">
                  <Image
                    src="/assets/images/dkn-img-3.png"
                    alt="dkn-img-3"
                    width={70}
                    height={70}
                    className="mr-1"
                  />
                  <Image
                    src="/assets/images/dkn-img-4.png"
                    alt="dkn-img-4"
                    width={70}
                    height={70}
                    className="mr-1"
                  />
                  <Image
                    src="/assets/images/dkn-img-5.png"
                    alt="dkn-img-5"
                    width={70}
                    height={70}
                    className="mr-1"
                  />
                  <Image
                    src="/assets/images/dkn-img-6.png"
                    alt="dkn-img-6"
                    width={70}
                    height={70}
                    className="mr-1"
                  />
                </div>
                <span
                  className={`${inter.className} font-medium text-base text-black`}
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
                  <div className="w-2/12 flex items-center ju">
                    <Image
                      src="/assets/images/dkn-icon-5.svg"
                      alt="dkn-img-6"
                      width={24}
                      height={24}
                    />
                  </div>
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
                      Bước 1:
                    </span>
                  </div>
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    Tạo tên tài khoản VTCID
                  </p>
                  <p
                    className={`${inter.className} ml-1 block text-base text-[#000] font-normal text-center `}
                  >
                    (nếu bạn chưa có tài khoản)
                  </p>
                </div>
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
              className="w-full lg:w-[558px] lg:h-[71px] mb-5 px-[10px]"
            />

            <span className={`font-normal text-sm text-black ${inter.className} text-center px-[10px] mb-4` }>
              Người chơi cũ không login game từ 1/5 - 30/6/2023 nhưng đã từng
              online trước đó, từ 22/7 - 27/7/2023 online mỗi ngày 15 phút.{" "}
              <Link href="" className={`font-normal text-sm text-[#9D4EDD] ${inter.className}`}>Chi tiết</Link>
            </span>
            <div className="w-full pt-[6px] pb-3 bg-[#EDEDED]">
              <Swiper
                className="mySwiper3 w-full"
                spaceBetween={30}
                slidesPerView={2}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                
                modules={[Autoplay, Navigation]}
                loop={true}
                navigation={{ nextEl: ".control-sw3-prev", prevEl: ".control-sw3-next" }}
                
                
                breakpoints={{
                  1024: {
                    spaceBetween: 20,
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <a href="" className="control-sw3-next w-10 h-10 bg-back"></a>
              <a href="" className="control-sw3-prev w-10 h-10 bg-back"></a>
              
            </div>
            <span className={`font-normal text-sm text-black ${inter.className} text-center px-[10px] my-4` }>
              Người chơi cũ không login game từ 1/5 - 30/6/2023 nhưng đã từng
              online trước đó, từ 22/7 - 27/7/2023 online mỗi ngày 15 phút.{" "}
              <Link href="" className={`font-normal text-sm text-[#9D4EDD] ${inter.className}`}>Chi tiết</Link>
            </span>
            <div className="w-full pt-[6px] pb-3 bg-[#EDEDED]">
              <Swiper
                className="mySwiper3 w-full"
                spaceBetween={10}
                slidesPerView={2}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation
                modules={[Autoplay, Navigation]}
                loop={true}
                breakpoints={{
                  1024: {
                    spaceBetween: 20,
                    slidesPerView: 5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px]`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col justify-center items-center">
                    <span className={`text-xs font-bold ${inter.className} text-black text-center mb-1`}>Online 1 ngày</span>
                    <div className={`flex items-center justify-center bg-background-k1 bg-[length:100%_100%] w-[156px] h-[156px] bg-center`}>
                      <Image
                        src="/assets/images/dkn-img-2.png"
                        width={68}
                        height={98}
                        alt="giay dep"
                        className=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#9D4EDD] flex items-center justify-center mt-2 mr-1 rounded-md`} href="">Nhận</Link>
                      <Link className={`text-sm text-white ${inter.className} font-bold w-[65px] h-6 bg-[#FBC12B] flex items-center justify-center mt-2 rounded-md`} href="">Tặng</Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <ScrollToTopButton />
    </>
  );
};

export default DangKy;
