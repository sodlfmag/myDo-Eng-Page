export const MyHeader = () => {
  return (
    <header
      className="MyHeader"
      style={{ textAlign: "left", paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div>
        <img
          src={process.env.PUBLIC_URL + `/assets/images/Header_Logo.svg`}
          style={{ marginLeft: "2%" }}
        />
        <>This is the Header.</>
      </div>
    </header>
  );
};
