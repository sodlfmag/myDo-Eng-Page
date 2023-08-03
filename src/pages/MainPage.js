import { MyHeader } from "../components/MyHeader";

export const MainPage = () => {
  return (
    <div className="MainpageContainer">
      <video className="MainBackground" autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + `/assets/videos/MainBackground.mp4`}
        />
      </video>
      <div className="MainHeader">
        <MyHeader />
      </div>
      <div className="MainTextContainer">
        <p className="MainText_1">HYDROGEN</p>
        <p className="MainText_2">ESSENCE</p>
      </div>
    </div>
  );
};
