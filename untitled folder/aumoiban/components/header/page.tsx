"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import {
  accountGetBalance,
  getAccountInfo,
  getAccountLogin,
  getFullAccountInfo,
} from "@/services/client-side/account-info/account-info.api";

import JSCookie from "js-cookie";
import { useMyReducer } from "@/store/Provider";
import { logError, logInfo } from "@/utils/log-helper";
import moment from "moment";
import { AccountFullInfoType } from "@/types/componentTypes";
import { StoreContext } from "@/store";
import SpinLoading from "../common/Loading/spin-loading";
import appSlice from "@/app/appSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/configure-store";
import { Collapse, Space } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { usePathname } from 'next/navigation'
import HeaderDki from "./headerdki";
import HeaderMall from "./headermall";


type TokenProps = {
  tokenName: string;
  tokenValue: string;
};
type HeaderProps = {
  token: TokenProps;
};
const Header = ({ token }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  let menuRef = useRef<any>();
  const pathname = usePathname();
  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  // // vị trí addClass header để ẩn
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        const id = document.getElementById("body-tag");
        if (id) {
          id.classList.add("closeHeader");
        }
      } else {
        const id = document.getElementById("body-tag");
        if (id) {
          id.classList.remove("closeHeader");
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // //end vị trí addClass header để ẩn

  const { updateModalState, loadingLoginAPI, setLogin, setLogout } =
    appSlice.actions;
  const { refresh, loadingLogin } = useAppSelector(
    (state: RootState) => state.app
  );
  const [hrefJS, setHrefJS] = useState(0);
  const [accountname, setAccountName] = useState<any>("");
  const [currentToken, setCurrentToken] = useState<any>("");
  const [crrBalance, setBalance] = useState<number>(0);
  logInfo("Header", {
    tokenName: token.tokenName,
    tokenValue: token.tokenValue,
  });
  const loginAction = () => {
    localStorage.clear();
    setHrefJS(1);
    // @ts-ignore
    return calPopLogin();
  };
  const logoutAction = () => {
    setAccountName("");
    setLogout();
    localStorage.clear();
    // @ts-ignore
    return Logout();
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      localStorage.setItem(token.tokenName, token.tokenValue);
      setCurrentToken(token.tokenValue);

      JSCookie.set("vtc-jwt", token.tokenValue, {
        expires: moment().add(23, "hour").toDate(),
      });
    }
  }, []);
  useEffect(() => {
    getAccountInfo()
      .then((res) => {
        if (res.data.code > 0) {
          setAccountName(res.data.data);
          logInfo("getAccountInfo", "", `AccountName: ${res.data.data}`);
          setLogin();
          loadingLoginAPI(false);
        }
      })
      .finally(() => {
        loadingLoginAPI(false);
      });
  }, [currentToken]);
  useEffect(() => {
    accountGetBalance().then((res) => {
      if (res && res.data.code > 0) {
        setBalance(res.data.data);
      }
    });
  }, [refresh]);

  useEffect(() => {
    setTimeout(() => {
      const targets = document.querySelectorAll(`[href="javascript:;"]`);
      for (let i = 0; i < targets.length; i++) {
        targets[i].removeAttribute("href");
      }
      setHrefJS(0);
    }, 300);
  }, [hrefJS]);

  return (
    <header className="relative z-10 w-full headerTop">
      {/* Tạo header tại đây */}
      {/* {pathname.includes("mall-gift") ?
      <HeaderMall token={{
        tokenName: "",
        tokenValue: ""
      }} />
      : <HeaderDki token={{
        tokenName: "",
        tokenValue: ""
      }}/> } */}
      <HeaderMall token={{
        tokenName: "",
        tokenValue: ""
      }}/>
      {/* header */}
      {/* {loadingLogin && <SpinLoading color="#59e6ff" width={25} height={25} />} */}
      {!loadingLogin && (accountname ? <>Đã đăng nhập</> : <></>)}
      <div
        id="header"
        style={{ zIndex: 999, height: "31px", display: "none" }}
      ></div>
      <div id="LogAndReg"></div>
    </header>
  );
};
export default Header;
