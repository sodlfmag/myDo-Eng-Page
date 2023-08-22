import { Link } from "react-router-dom";

export const MyFooter = () => {
  return (
    <div className="MyFooter">
      <hr className="FooterBorder" />
      <div className="FooterImageLine">
        <img
          className="FooterImage"
          src={process.env.PUBLIC_URL + `/assets/images/Black_Logo.svg`}
          style={{ marginLeft: "2%" }}
        />
        <Link to="https://www.instagram.com/mydo_midas/">
          <img
            className="FooterImage"
            src={process.env.PUBLIC_URL + `/assets/images/Instagram_Icon.svg`}
            style={{ marginLeft: "75%" }}
          />
        </Link>
        <Link to="https://www.facebook.com/MYDO.lab">
          <img
            className="FooterImage"
            src={process.env.PUBLIC_URL + `/assets/images/Facebook_Icon.svg`}
            style={{ marginLeft: "1%" }}
          />
        </Link>
      </div>
      <div>
        <div className="FooterLine">
          <p className="FooterTitle">Company&nbsp;</p>
          <p>Midas Communications</p>
        </div>
        <div className="FooterLine">
          <p className="FooterTitle">CEO&nbsp; </p> <p>Song Jeong</p>
        </div>
        <div className="FooterLine">
          <p className="FooterTitle">Business registration number&nbsp; </p>
          <p>107-13-52361</p>
          {/* <p>Check business information</p> */}
        </div>
        <div className="FooterLine">
          <p className="FooterTitle">Mail order business&nbsp; </p>
          <p>2014-Seoul Yeongdeungpo-0949 Address 06041</p>
        </div>
        <div className="FooterLine">
          <p className="FooterTitle">Address&nbsp; </p>
          <p>55, Dosan-daero 28-gil, Gangnam-gu, Seoul (Nonhyeon-dong)</p>
        </div>
        <div className="FooterLine">
          <p className="FooterTitle">Email&nbsp; </p> <p>mydohw36@naver.com</p>
        </div>
      </div>
    </div>
  );
};
