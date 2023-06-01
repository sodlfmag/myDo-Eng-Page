import { useEffect } from "react";

export const VisualizerPage = () => {
  // 비주얼라이즈 페이지는 배경을 흰색으로, 벗어나면 기본값으로 돌아감
  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <div className="VisualizerContainer">
      <>
        <video
          className="NeonMotion"
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + `/assets/videos/NeonMotionx3.mp4`}
        />
      </>
      <>
        <video
          className="TypoMotion"
          autoPlay
          muted
          src={process.env.PUBLIC_URL + `/assets/videos/TypoMotionx2.mp4`}
        />
      </>
    </div>
  );
};
