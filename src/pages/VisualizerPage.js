import { React, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export const VisualizerPage = () => {
  // 비주얼라이즈 페이지는 배경을 흰색으로, 벗어나면 기본값으로 돌아감
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
      <BrowserView>
        <div className="VisualizerContainer">
          <>
            <video
              className="NeonMotion"
              autoPlay
              loop
              muted
              src={process.env.PUBLIC_URL + `/NeonMotionx3.mp4`}
            />
          </>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <Button
              className="puff-in-center"
              variant="contained"
              color="primary"
            >
              Go To Main
            </Button>
          </Link>
          <>
            <video
              className="TypoMotion"
              autoPlay
              muted
              src={process.env.PUBLIC_URL + `/TypoMotionx2.mp4`}
            />
          </>
        </div>
      </BrowserView>
      <MobileView>
        <div className="MobileVisualizerContainer">
          <div className="MobileMotion">
            <video
              className="MobileNeonMotion"
              autoPlay
              loop
              muted
              src={process.env.PUBLIC_URL + `/NeonMotionx3.mp4`}
            />
          </div>
          <div className="MobileMainBtnContainer">
            <Link to="/main" style={{ textDecoration: "none" }}>
              <Button
                className="puff-in-center"
                variant="contained"
                color="primary"
              >
                Go To Main
              </Button>
            </Link>
          </div>
          <>
            <video
              className="MobileTypoMotion"
              autoPlay
              muted
              src={process.env.PUBLIC_URL + `/TypoMotionx2.mp4`}
            />
          </>
        </div>
      </MobileView>
    </>
  );
};
