import { MyFooter } from "../components/MyFooter";
import { MyHeader } from "../components/MyHeader";
import { PageHeader } from "../components/PageHeader";

export const BrandStoryPage = () => {
  return (
    <div className="BrandStoryPageContainer">
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/Brand-Story_1.svg`}
      />
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/Brand-Story_2.svg`}
      />
      <div className="MainHeader">
        <PageHeader name="BRAND STORY" />
      </div>
      <MyFooter />
    </div>
  );
};
