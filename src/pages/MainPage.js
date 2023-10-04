import { MyHeader } from "../components/MyHeader";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export const MainPage = () => {
  return (
    <>
      <BrowserView>
        <div className="MainpageContainer">
          <video className="MainBackground" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + `/MainBackground.mp4`} />
          </video>
          <div className="MainHeader">
            <MyHeader />
          </div>
          <div className="MainTextContainer">
            <p className="MainText_1">HYDROGEN</p>
            <p className="MainText_2">ESSENCE</p>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="MainpageContainer">
          <video className="MainBackground" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + `/M_MainBackground.mp4`} />
          </video>
          <div className="MainHeader">
            <MyHeader />
          </div>
          <div className="MainTextContainer">
            <p className="MobileMainText_1">HYDROGEN</p>
            <p className="MobileMainText_2">ESSENCE</p>
          </div>
        </div>
      </MobileView>
    </>
  );
};
