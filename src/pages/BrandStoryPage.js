import { PageHeader } from "../components/PageHeader";
import { useState, useEffect, useRef } from "react";
import Dots from "../components/Dots";
import { MyHeader } from "../components/MyHeader";
import { MyFooter } from "../components/MyFooter";

const DIVIDER_HEIGHT = 5;

export const BrandStoryPage = () => {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  /* JSX Return 부*/
  return (
    <div ref={outerDivRef} className="outer">
      <PageHeader name="BRAND STORY" />
      <Dots scrollIndex={scrollIndex} />
      <div
        className="inner bg-yellow"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg1.svg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="PageSlide"
          src={process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct1.svg`}
        />
      </div>
      <div className="divider"></div>
      <div
        className="inner bg-blue"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg2.svg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="PageSlide"
          src={process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct2.svg`}
        />
      </div>
      <div className="divider"></div>
      <div
        className="inner bg-pink"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/BrandStory/BS_bg3.svg"
          })`,
          backgroundSize: "cover",
        }}
      >
        <img
          className="PageSlide"
          src={process.env.PUBLIC_URL + `/assets/images/BrandStory/BS_ct3.svg`}
        />
      </div>
      <MyFooter />
    </div>
  );
};
