import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SlidingPanel from "react-sliding-side-panel";
export const PageHeader = (props) => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <header className="MyHeader">
      <div className="HeaderContainer">
        <NavLink to={"/main"}>
          <img
            className="HeaderLogo"
            src={process.env.PUBLIC_URL + `/assets/images/Black_Logo.svg`}
          />
        </NavLink>
        <div className="HeaderName">{props.name}</div>
        {/* 측면 슬라이딩 패널 */}
        <img
          className="PannelToggle"
          onClick={() => setOpenPanel(true)}
          src={
            process.env.PUBLIC_URL +
            "/assets/images/Pannel/Pannel_Toggle_Black.svg"
          }
        />

        <SlidingPanel type={"right"} isOpen={openPanel} size={100}>
          <div style={{ backgroundColor: "white" }}>
            <div style={{ height: "100vh" }}>
              <img
                className="PanelBackgroundImg"
                src={
                  process.env.PUBLIC_URL + "/assets/images/Pannel/Pannel_Bg.svg"
                }
              />
            </div>
            <img
              className="PannelToggle"
              onClick={() => setOpenPanel(false)}
              src={
                process.env.PUBLIC_URL +
                "/assets/images/Pannel/Pannel_X_Black.svg"
              }
            />
          </div>

          <Link className="PanelLink" to="/brand" style={{ top: "15vh" }}>
            BRAND
          </Link>
          <Link className="PanelLink" to="/ecobottle" style={{ top: "30vh" }}>
            ECOBOTTLE
          </Link>
          <Link
            className="PanelLink"
            to="https://www.ebay.com/itm/265338363911"
            style={{ top: "45vh" }}
          >
            SHOP
          </Link>
          <Link className="PanelLink" to="/contact" style={{ top: "60vh" }}>
            CONTACT
          </Link>
          <Link
            className="PanelLink"
            to="https://mydo.co.kr/"
            style={{ top: "75vh" }}
          >
            KOREA
          </Link>
        </SlidingPanel>
      </div>
    </header>
  );
};
