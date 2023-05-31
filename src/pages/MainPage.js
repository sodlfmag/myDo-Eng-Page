import { MyHeader } from "../components/MyHeader";

export const MainPage = () => {
  return (
    <>
      <div className="MainpageContainer">
        <MyHeader />
        <>This is the Main Page.</>
      </div>
      <body style={{ backgroundColor: "yellow" }}></body>
    </>
  );
};
