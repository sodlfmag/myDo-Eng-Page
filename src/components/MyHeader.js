import { Link, NavLink } from "react-router-dom";

export const MyHeader = () => {
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
          <Link className="HeaderLink" to="/shop">
            SHOP
          </Link>
          <Link className="HeaderLink" to="/contact">
            CONTACT
          </Link>
          <Link className="HeaderLink" to="https://mydo.co.kr/">
            KOREA
          </Link>
        </div>
      </div>
    </header>
  );
};
