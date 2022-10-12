import React from "react";
import "./section1.scss";
import bg1 from "../../../asset/images/section1.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";
export default function Section1() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 500,
  });
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: `url(${bg1})center center`,
          height: "100vh",
        }}
      >
        <section className="contentmain">
          <div style={{ height: "30px" }}></div>
          <animated.h1 style={props} className="contentmain-headline-text">
            당신의 프로젝트를 더욱 빛나게
          </animated.h1>
          <section id="section03" class="demo">
            <a href="#section04">
              <span></span>
            </a>
          </section>
        </section>
      </ParallaxLayer>
    </Parallax>
  );
}
