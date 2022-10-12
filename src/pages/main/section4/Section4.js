import "./section4.scss";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { headerSlice } from "../../../slices/headerTheme";
export default function Section4() {
  const dispatch = useDispatch();

  const headerColorPoint = useRef(null);

  const handleScroll = useCallback(() => {
    const BoundingClientRect = Math.floor(
      headerColorPoint.current.getBoundingClientRect().y
    );
    if (BoundingClientRect <= 50) {
      dispatch(headerSlice.actions.toggleColor({ theme: "WHITE" }));
    } else {
      dispatch(headerSlice.actions.toggleColor({ theme: "DARK" }));
    }
  }, []);

  // 스크롤 감지
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return <div ref={headerColorPoint}></div>;
}
