import { useState } from "react";
import { MyFooter } from "../components/MyFooter";
import { PageHeader } from "../components/PageHeader";
import emailjs from "emailjs-com";
import { Button } from "@mui/material";

export const ContactPage = () => {
  const [formValues, setFormValues] = useState({
    email_address: "",
    title: "",
    contents: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = window.confirm("Would you like to send?");
    if (flag) {
      console.log("User confirmed to send.");
      console.log(formValues);
      emailjs
        .send(
          "service_twzv3yz",
          "template_2mx4c5h",
          formValues,
          "z7M1jOQGhm4gnogE4"
        )
        .then(
          (result) => {
            alert("Mail Send Complete.\nThank you to contact us!");
            console.log(result.text);
            // display success message to user
          },
          (error) => {
            alert("Mail Send Failed.\nPlease try again.");
            console.log(error.text);
            // display error message to user
          }
        );
    } else {
      alert("Mail Send Canceled.");
      console.log("Sending Canceled");
    }
  };

  return (
    <>
      <div>
        <PageHeader name="CONTACT" />
      </div>
      <form className="ContactForm" onSubmit={handleSubmit}>
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
              value={formValues.email_address}
              onChange={handleInputChange}
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
              value={formValues.title}
              onChange={handleInputChange}
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
              value={formValues.contents}
              onChange={handleInputChange}
              placeholder="Please enter the contents."
            />
          </div>
          <div className="SubmitBtn">
            <Button
              sx={{
                maxHeight: "4vh",
                height: "4vh",
                width: "4vw",
                fontSize: "2vh",
              }}
              variant="outlined"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
      <MyFooter />
    </>
  );
};
