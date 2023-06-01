export const VisualizerPage = () => {
  return (
    <div
      className="VisualizerContainer"
      style={{ placeItems: "center", display: "grid" }}
    >
      <>
        <video
          autoPlay
          loop
          muted
          src={process.env.PUBLIC_URL + `/assets/videos/NeonMotionx3.mp4`}
          style={{ width: "50%" }}
        />
      </>
      <>
        <video
          autoPlay
          muted
          src={process.env.PUBLIC_URL + `/assets/videos/TypoMotionx2.mp4`}
          style={{ width: "50%" }}
        />
      </>
    </div>
  );
};
