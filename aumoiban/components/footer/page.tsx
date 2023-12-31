import { Be_Vietnam_Pro } from "next/font/google";
const bevietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});
const Footer = () => {
  return (
    <footer className={`${bevietnam.className} bg-[#00105A] pt-[43px] pb-[90px] px-5`} >
      {/* tạo footer tại đây */}
      <div className="container m-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[auto_auto_auto] xl:gap-[50px]">
          <div className="grid grid-cols-1 mb-5 ">
            <img src="/assets/images/logo-f-1.svg" alt="logo-footer" className="mb-7"/>
            <h5 className="">TỔNG CÔNG TY TRUYỀN THÔNG ĐA PHƯƠNG TIỆN (VTC)</h5>
            <h5 className=""> CÔNG TY VTC CÔNG NGHỆ VÀ NỘI DUNG SỐ (VTC INTECOM)</h5>
          </div>
          <div className="grid grid-cols-1 mb-5 xl:mt-7">
            <div className="grid grid-cols-1 mb-7">
              <span className="font-bold">CHỊU TRÁCH NHIỆM QUẢN LÍ NỘI DUNG:</span>
              <h5 className="">Ông Lâm Ngọc Tú</h5>
            </div>
            <div className="grid grid-cols-1">
              <span className="font-bold"> THÔNG TIN LIÊN HỆ</span>
              <div className="grid">
                <div  className="flex items-center col-span-2">
                  <img
                    src="/assets/images/icon-f-1.svg"
                    alt="gmail-f"
                    className="mr-2"
                  />
                  <span className="">partners@vtc.vn</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/images/icon-f-2.svg"
                    alt="facebook-f"
                    className="mr-2"
                  />
                  <span className="">fb.com/congvtcgame</span>
                </div>
                <div className="flex items-center">
                  <img
                    src="/assets/images/icon-f-3.svg"
                    alt="web-f"
                    className="mr-2"
                  />
                  <span className="">hotro.vtc.vn</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:mt-7">
            <span className="font-bold"> TRỤ SỞ HÀ NỘI</span>
            <h5 className="mb-7">
              Tầng 14, Tòa nhà VTC 23 Lạc Trung, Quận Hai Bà Trưng, Hà Nội
            </h5>

            <span className="font-bold">VĂN PHÒNG ĐẠI DIỆN TP. HỒ CHÍ MINH</span>
            <h5>59 Đồng Đen, Phường 10, Quận Tân Bình, TP. Hồ Chí Minh</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
