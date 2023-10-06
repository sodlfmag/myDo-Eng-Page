import { PageHeader } from "../components/PageHeader";
import { MyFooter } from "../components/MyFooter";
import PageScroll from "react-page-scroll";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export const EcobottlePage = () => {
  return (
    <>
      <BrowserView>
        <div>
          <PageHeader name="ECOBOTTLE" />
        </div>
        <PageScroll width="100vw" height="100vh">
          <div
            id="page1"
            className="page"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/EB_bg3.svg"})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <video
              muted
              autoPlay
              loop
              src={process.env.PUBLIC_URL + "/PumpingMotion.webm"}
              height={"100%"}
            />
          </div>
          <div
            id="page3"
            className="page"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/EB_bg1.svg"})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <img
              className="EcoBottleSlide"
              src={process.env.PUBLIC_URL + `/EB_ct1.svg`}
            />
          </div>
          <div>
            <div
              id="page2"
              className="page"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/EB_bg2.svg"
                })`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <img
                className="EcoBottleSlide2"
                src={process.env.PUBLIC_URL + `/EB_ct2.svg`}
              />
            </div>
          </div>
          <div style={{ height: "20vh" }}>
            <MyFooter />
          </div>
          {/* footer 단 상단고정되는 현상 없애기 */}
        </PageScroll>
      </BrowserView>
      <MobileView>
        <div>
          <PageHeader name="ECOBOTTLE" />
        </div>
        <PageScroll width="100vw" height="100vh">
          {/* <div
            id="page1"
            className="page"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/EB_bg3.svg"})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <video
              muted
              autoPlay
              loop
              src={process.env.PUBLIC_URL + "/PumpingMotion.webm"}
              width={"100%"}
            />
          </div> */}
          <div
            id="page1"
            className="page"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/M_EB_bg1.svg"
              })`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <img
              className="EcoBottleSlide"
              src={process.env.PUBLIC_URL + `/M_EB_ct1.svg`}
            />
          </div>
          <div>
            <div
              id="page2"
              className="page"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/EM_B_bg2.svg"
                })`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <img
                className="EcoBottleSlide2"
                src={process.env.PUBLIC_URL + `/M_EB_ct2.svg`}
              />
            </div>
          </div>
          {/* footer 단 상단고정되는 현상 없애기 */}
        </PageScroll>
      </MobileView>
    </>
  );
};
