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
            className="PanelToggle"
            onClick={() => setOpenPanel(true)}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/Panel/Panel_Toggle_White.svg"
            }
          />

          <SlidingPanel type={"right"} isOpen={openPanel} size={100}>
            <div className="ad1">
              <div>
                <img
                  className="PanelBackgroundImg"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/Panel/Panel_Bg.svg"
                  }
                />
              </div>
              <img
                className="PanelToggle"
                onClick={() => setOpenPanel(false)}
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/Panel/Panel_X_Black.svg"
                }
              />
              <Link className="PanelLink" to="/brand" style={{ top: "15vh" }}>
                BRAND
              </Link>
              <Link
                className="PanelLink"
                to="/ecobottle"
                style={{ top: "30vh" }}
              >
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
            </div>
          </SlidingPanel>
        </div>
      </div>
    </header>
  );
};
