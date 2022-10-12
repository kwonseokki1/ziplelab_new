import bg2 from "../../../asset/images/section2.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./section2.scss";
export default function Section2() {
  return (
    <Parallax pages={1} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          background: `url(${bg2})center center`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <section className="content02">
          <div className="content02-text-align">
            <div className="content02-text">
              <h1 className="content-text-l">스타트업 서비스 외주개발 전문,</h1>
              <h1 className="content-text-l">매칭솔루션 개발</h1>
              <p>
                {" "}
                <span>React Native </span>| <span>Ionic</span> |{" "}
                <span>JAVA</span> |<span>Python</span> | <span>Bigdata</span> |{" "}
                <span>NLU</span> | <span>Perfornamce Marketing</span> |{" "}
                <span>Cloud Computer</span>
              </p>
            </div>
          </div>
        </section>
      </ParallaxLayer>
    </Parallax>
  );
}
