import { Link, NavLink } from "react-router-dom";

export const PageHeader = (props) => {
  return (
    <header className="MyHeader">
      <div className="HeaderContainer">
        <NavLink to={"/main"}>
          <img
            className="HeaderLogo"
            src={process.env.PUBLIC_URL + `/assets/images/Black_Logo.svg`}
          />
        </NavLink>
        <div className="HeaderName">{props.name}</div>
      </div>
    </header>
  );
};
