import { PageHeader } from "../components/PageHeader";

export const EcobottlePage = () => {
  return (
    <div className="EcobottlePageContainer">
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/assets/images/EcoBottle_1.svg`}
      />
      <img
        className="PageSlide"
        src={process.env.PUBLIC_URL + `/assets/images/EcoBottle_2.svg`}
      />
      <div className="MainHeader">
        <PageHeader name="ECOBOTTLE" />
      </div>
    </div>
  );
};
