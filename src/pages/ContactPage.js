import { MyFooter } from "../components/MyFooter";
import { PageHeader } from "../components/PageHeader";

export const ContactPage = () => {
  return (
    <>
      <div>
        <PageHeader name="CONTACT" />
      </div>
      <div className="ContactPageContainer">
        <div className="ContactContentsContainer">
          <div className="ContactPageTitle">CONTACT</div>
        </div>
        <div className="ContactRow">
          <label htmlFor="name" className="ContactIndex">
            Client Email
          </label>
          <input
            className="RequestInput"
            type="email"
            id="email_address"
            name="email_address"
            placeholder="Please enter your email."
          />
        </div>
        <div className="ContactRow">
          <label htmlFor="title" className="ContactIndex">
            Title
          </label>
          <input
            className="RequestInput"
            type="text"
            id="title"
            name="title"
            placeholder="Please enter the title."
          />
        </div>
        <div>
          <label htmlFor="contents" className="ContactIndex">
            Content
          </label>
          <textarea
            className="RequestInput RequestInput_Contents"
            type="text"
            id="contents"
            name="contents"
            placeholder="Please enter the contents."
          />
        </div>
      </div>
      <MyFooter />
    </>
  );
};
