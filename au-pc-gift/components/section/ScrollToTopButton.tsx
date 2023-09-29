import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Xác định khi nào nút "Scroll to Top" nên hiển thị dựa trên vị trí cuộn
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Xử lý sự kiện khi nút được nhấn để cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed z-50 bottom-2 right-2
        "
          onClick={scrollToTop}
        >
          <img width={64} height={64} src="/assets/images/btn-1.png" alt="Mov Top" className=" lg:w-[84px] lg:h-[84px]"/>
        
        </button>
      )}
    </>
  );
}
