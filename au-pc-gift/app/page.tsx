"use client";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import appSlice from "./appSlice";
import Template from "@/components/common/Template/Template";
import LayoutFacebook from "@/components/common/Facebook/LayoutFacebook";
import LoadingBar from "react-top-loading-bar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import ScrollToTopButton from "@/components/section/ScrollToTopButton";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image  from 'next/image';
export default function Home() {
  const modal = useAppSelector((state: RootState) => state.app.modal);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const { finishLoad } = appSlice.actions;
  return (
    
    <main>
      {modal ? modal : <></>}
      <section className="mt-4 pb-[60px]">
      <div className="container m-auto">
        <Tabs value="btn1" className="lg:flex-row lg:flex lg:items-center">
          <TabsHeader className="items-center justify-center lg:flex-col">
            <Tab 
              key="btn1"
              value="btn1"
              activeClassName="m-btnActive1"
              className="m-2 w-[80px] h-[80px] lg:w-[120px]  lg:h-[120px] bg-[url(/assets/images/btn-5.svg)] bg-contain" children={undefined}            ></Tab>
            <Tab
              key="btn2"
              value="btn2"
              activeClassName="m-btnActive2"
              className="m-2 w-[80px] h-[80px] lg:w-[120px]  lg:h-[120px] bg-[url(/assets/images/btn-6.svg)] bg-contain" children={undefined}            ></Tab>
          </TabsHeader>
          <TabsBody  animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
            <TabPanel key="btn1" value="btn1" className="">
              <Swiper
                className="mySwiper w-full xl:h-[710px]"
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                navigation
                modules={[Autoplay, Navigation]}
                loop={true}
                centeredSlides
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-1.png"
                      alt="Au-img-1"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5 aos-init aos-animate" data-aos="zoom-in">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-2.png"
                      alt="Au-img-2"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-3.png"
                      alt="Au-img-3"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-1.png"
                      alt="Au-img-1"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-2.png"
                      alt="Au-img-2"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-3.png"
                      alt="Au-img-3"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
            <TabPanel key="btn2" value="btn2" className="">
              <Swiper
                className="mySwiper1 w-full xl:h-[710px]"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                navigation
                modules={[Autoplay, Navigation]}
                loop={true}
                centeredSlides
                breakpoints={{
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-1.png"
                      alt="Au-img-1"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-2.png"
                      alt="Au-img-2"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-3.png"
                      alt="Au-img-3"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-1.png"
                      alt="Au-img-1"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-2.png"
                      alt="Au-img-2"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative flex flex-col">
                    <Image
                      className="m-auto lg:w-[300px] lg:h-[600px] object-contain"
                      width={176}
                      height={459}
                      src="/assets/images/img-3.png"
                      alt="Au-img-3"
                    />
                    <div className="mySwiper-active hidden flex flex-col items-center bg-white border border-[#FF9E00] rounded-2xl w-[246px]  h-[128px] p-5 mx-auto -mt-5">
                      <span
                        className={`${inter.className} text-[#202020] text-xl font-bold`}
                      >
                        MỜI BẠN
                      </span>
                      <p
                        className={`${inter.className} text-[#202020] text-base font-normal text-center`}
                      >
                        Trang web để tạo nhanh tài khoản VTC và nhân vật trong
                        game Audition
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
     <ScrollToTopButton/>
    </section>
    </main>
  );
}
