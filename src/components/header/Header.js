import React from "react";
import "./header.scss";
import { useSelector } from "react-redux";
import classnames from "classnames";
export default function Header() {
  const headerTheme = useSelector((state) => state.headerSlice.theme);

  return (
    <header
      className={classnames(
        { white: headerTheme === "WHITE" },
        { dark: headerTheme === "DARK" || undefined }
      )}
    >
      <div className="header-inner">
        <span className="header-logo" />
        <ul className="header-menu">
          <li>회사소개</li>
          <li>서비스</li>
          <li>프로덕트</li>
          <li>요청</li>
        </ul>
      </div>
    </header>
  );
}
