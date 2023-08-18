import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";

export const MyHeader = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <header className="MyHeader">
      <div className="HeaderContainer">
        <NavLink to={"/main"}>
          <img
            className="HeaderLogo"
            src={process.env.PUBLIC_URL + `/assets/images/Header_Logo.svg`}
          />
        </NavLink>
        <div className="LinkContainer">
          <Link className="HeaderLink" to="/brand">
            BRAND
          </Link>
          <Link className="HeaderLink" to="/ecobottle">
            ECOBOTTLE
          </Link>
          <Link
            className="HeaderLink"
            to="https://www.ebay.com/itm/265338363911"
          >
            SHOP
          </Link>
          <Link className="HeaderLink" to="/contact">
            CONTACT
          </Link>
          <Link className="HeaderLink" to="https://mydo.co.kr/">
            KOREA
          </Link>

          {/* 측면 슬라이딩 패널 */}
          <img
            className="PannelToggle"
            onClick={() => setOpenPanel(true)}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/Pannel/Pannel_Toggle_White.svg"
            }
          />

          <SlidingPanel type={"right"} isOpen={openPanel} size={100}>
            <div style={{ backgroundColor: "white" }}>
              <div style={{ height: "100vh" }}>
                <img
                  className="PanelBackgroundImg"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/Pannel/Pannel_Bg.svg"
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
          </SlidingPanel>
        </div>
      </div>
    </header>
  );
};
