export const VisualizerPage = () => {
  return (
    <div className="VisualizerContainer">
      <video
        autoPlay
        muted
        loop
        src={process.env.PUBLIC_URL + `/assets/videos/Sample_BV_motion.mp4`}
      />
    </div>
  );
};
