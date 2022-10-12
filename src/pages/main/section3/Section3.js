import React, { useCallback, useEffect, useRef, useState } from "react";
import bg3 from "../../../asset/images/section3.png";
import "./section3.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import SimpleAccordion from "../../../components/SimpleAccordion";

export default function Section3() {
  // 컴포넌트 <-> viewport 거리계산
  const [offsetY, setOffsetY] = useState();

  // 거리계산 대상요소 선택
  const parallaxZone = useRef(null);
  const parallaxRef = useRef(null);

  // 스크롤값 state 저장

  const handleScroll = useCallback(() => {
    const BoundingClientRect = Math.floor(
      parallaxZone.current.getBoundingClientRect().y
    );
    setOffsetY((prev) => BoundingClientRect);
    console.log(BoundingClientRect);
  }, []);

  // 스크롤 감지
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parallaxZone}
      style={{
        background: !offsetY ? `url(${bg3}) center center` : "#000000",
        height: "100vh",
      }}
    >
      {offsetY <= 100 && (
        <Parallax ref={parallaxRef} pages={5} style={{ top: "0", left: "0" }}>
          <ParallaxLayer
            sticky={{ start: 0, end: 5 }}
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              background: "#000000",
              opacity: 1,
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 1, end: 2 }}
            offset={0}
            speed={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              opacity: 1,
            }}
          >
            <div className="content03-ziple-info">
              <p>
                스타트업의 IT 솔루션 파트너 <b>자이플랩</b>
              </p>
              <h3>서비스 기획 및 전략수립</h3>
              <h3>웹 및 앱 서비스 개발</h3>
              <h3>데이터 수집 및 가공</h3>
              <h3>UI/UX 설계</h3>
              <h3>인터렉티브 웹 | 쇼핑물</h3>
              <h3>퍼포먼스 마케팅</h3>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 3, end: 4 }}
            offset={1}
            speed={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div className="section3-ziple-service">
              <p className="section3-ziple-service-txt">
                <h3>Service</h3>
                <h2>
                  이런서비스가 <br />
                  가능해요
                </h2>
              </p>

              <SimpleAccordion />
            </div>
          </ParallaxLayer>
        </Parallax>
      )}
    </div>
  );
}
