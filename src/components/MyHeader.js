import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SlidingPanel from "react-sliding-side-panel";
import "react-sliding-side-panel/lib/index.css";
import PageScroll from "react-page-scroll";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export const MyHeader = () => {
  const [openPanel, setOpenPanel] = useState(false);
  console.log(window.location.pathname);
  console.log(window.location.href);
  console.log(process.env.PUBLIC_URL);
  console.log(process.env.PUBLIC_URL + `/logo(white).svg`);
  return (
    <>
      <BrowserView>
        <header className="MyHeader">
          <div className="HeaderContainer">
            <NavLink to={"/main"}>
              <img
                className="HeaderLogo"
                src={process.env.PUBLIC_URL + "/Header_Logo.svg"}
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
                src={process.env.PUBLIC_URL + "/Panel_Toggle_White.svg"}
              />

              <SlidingPanel type={"right"} isOpen={openPanel} size={100}>
                <div className="ad1">
                  <div>
                    <img
                      className="PanelBackgroundImg"
                      src={process.env.PUBLIC_URL + "/Panel_Bg.svg"}
                    />
                  </div>
                  <img
                    className="PanelToggle"
                    onClick={() => setOpenPanel(false)}
                    src={process.env.PUBLIC_URL + "/Panel_X_Black.svg"}
                  />
                  <Link
                    className="PanelLink"
                    to="/brand"
                    style={{ top: "15vh" }}
                  >
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
                  <Link
                    className="PanelLink"
                    to="/contact"
                    style={{ top: "60vh" }}
                  >
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
      </BrowserView>
      <MobileView>
        <header className="MobilePageHeader">
          <div className="HeaderContainer">
            <NavLink to={"/main"}>
              <img
                className="MobileHeaderLogo"
                src={process.env.PUBLIC_URL + `/Header_Logo.svg`}
              />
            </NavLink>
          </div>
          <img
            className="MobilePanelToggle"
            onClick={() => setOpenPanel(true)}
            src={process.env.PUBLIC_URL + "/Panel_Toggle_White.svg"}
          />
          <SlidingPanel type={"right"} isOpen={openPanel} size={100}>
            <div>
              <div style={{ height: "100vh" }}>
                <img
                  className="PanelBackgroundImg"
                  src={process.env.PUBLIC_URL + "/M_Panel_Bg.svg"}
                />
              </div>
              <img
                className="MobilePanelToggle"
                onClick={() => setOpenPanel(false)}
                src={process.env.PUBLIC_URL + "/Panel_X_Black.svg"}
              />
            </div>

            <Link
              className="MobilePanelLink"
              to="/brand"
              style={{ top: "25vh" }}
            >
              BRAND
            </Link>
            <Link
              className="MobilePanelLink"
              to="/ecobottle"
              style={{ top: "35vh" }}
            >
              ECOBOTTLE
            </Link>
            <Link
              className="MobilePanelLink"
              to="https://www.ebay.com/itm/265338363911"
              style={{ top: "45vh" }}
            >
              SHOP
            </Link>
            <Link
              className="MobilePanelLink"
              to="/contact"
              style={{ top: "55vh" }}
            >
              CONTACT
            </Link>
            <Link
              className="MobilePanelLink"
              to="https://mydo.co.kr/"
              style={{ top: "65vh" }}
            >
              KOREA
            </Link>
          </SlidingPanel>
        </header>
      </MobileView>
    </>
  );
};
