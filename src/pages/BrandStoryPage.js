import { PageHeader } from "../components/PageHeader";
import { MyFooter } from "../components/MyFooter";
import PageScroll from "react-page-scroll";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

export const BrandStoryPage = () => {
  return (
    <>
      <BrowserView>
        <div>
          <PageHeader name="BRAND STORY" />
        </div>
        <PageScroll width="100vw" height="100vh">
          <div
            id="page1"
            className="page"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/BS_bg1.svg"})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <img
              className="BrandPageSlide"
              src={process.env.PUBLIC_URL + `/BS_ct1.svg`}
            />
          </div>
          <div
            id="page2"
            className="page"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + "/BS_bg2.svg"})`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <img
              className="BrandPageSlide"
              src={process.env.PUBLIC_URL + `/BS_ct2.svg`}
            />
          </div>
          <div>
            <div
              id="page3"
              className="page"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/BS_bg3.svg"
                })`,
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <img
                className="BrandPageSlide2"
                src={process.env.PUBLIC_URL + `/BS_ct03.svg`}
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
        <PageScroll width="100vw" height="100vh">
          <img src={process.env.PUBLIC_URL + `/M_BS1.svg`} />
          <img src={process.env.PUBLIC_URL + `/M_BS2.svg`} />
          <img src={process.env.PUBLIC_URL + `/M_BS3.svg`} />
          <img src={process.env.PUBLIC_URL + `/M_BS4.svg`} />
          <img src={process.env.PUBLIC_URL + `/M_BS5.svg`} />
        </PageScroll>
      </MobileView>
    </>
  );
};
