import type { Metadata } from "next";
// phần này để SEO, title là tiêu đề của trang, sẽ thay đổi khi chuyển page, desc là mô tả của page, nếu desc dài thì sẽ được đánh giá cao hơn
export const metadata: Metadata = {
  title: "Kho Đồ",
  description:
    "Kho Đồ",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}