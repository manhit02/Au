"use client";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import appSlice from "./appSlice";
import Template from "@/components/common/Template/Template";
import LayoutFacebook from "@/components/common/Facebook/LayoutFacebook";
import LoadingBar from "react-top-loading-bar";



export default function Home() {
  const modal = useAppSelector((state: RootState) => state.app.modal);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const { finishLoad } = appSlice.actions;
  return (
    <main>
      {modal ? modal : <></>}
  
    </main>
  );
}
