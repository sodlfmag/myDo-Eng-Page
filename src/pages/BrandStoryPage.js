import { MyHeader } from "../components/MyHeader";

export const BrandStoryPage = () => {
  return (
    <div className="BrandStoryPageContainer">
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/assets/images/Brand-Story_1.svg`}
      />
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/assets/images/Brand-Story_2.svg`}
      />
      <div className="MainHeader">
        <MyHeader />
      </div>
    </div>
  );
};
