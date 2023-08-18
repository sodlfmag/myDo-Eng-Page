import { PageHeader } from "../components/PageHeader";
import { MyFooter } from "../components/MyFooter";
import PageScroll from "react-page-scroll";

export const BrandStoryPage = () => {
  return (
    <>
      <div>
        <PageHeader name="BRAND STORY" />
      </div>
      <PageScroll width="100vw" height="100vh">
        <div
          id="page1"
          className="page"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg1.svg"
            })`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <img
            className="PageSlide"
            src={
              process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct1.svg`
            }
          />
        </div>
        <div
          id="page2"
          className="page"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg2.svg"
            })`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <img
            className="PageSlide"
            src={
              process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct2.svg`
            }
          />
        </div>
        <div>
          <div
            id="page3"
            className="page"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg3.svg"
              })`,
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <img
              className="PageSlide2"
              src={
                process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct03.svg`
              }
            />
          </div>
        </div>
        <div style={{ height: "20vh" }}>
          <MyFooter />
        </div>
        {/* footer 단 상단고정되는 현상 없애기 */}
      </PageScroll>
    </>
  );
};
