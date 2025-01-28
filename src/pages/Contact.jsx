import React, { useEffect } from "react";
import Layout from "./Layout";
import Section from "../components/Section";
import FormButton from "../components/Form/FormButton";
import { useMe } from "../context/MeContext";

function Contact() {
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + "| Contact";
  }, [me]);

  return (
    <Layout>
      <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">Let's Chat</h1>
        <p className="text-base text-customTextColor font-light">
          If you'd like to talk about a potential project or just say hi, send
          me a message or email me at{" "}
          <a
            href={"mailto:" + me?.email}
            className="text-white hover:text-yellow-500 transition ease-in-out duration-500"
          >
            {me?.email}
          </a>
        </p>

        <form name="contact" method="POST" data-netlify="true">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 flex-col md:flex-row">
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Eamil"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="comment">Leave a comment here</label>
              <textarea
                placeholder="Leave a comment here"
                name="comment"
                id="comment"
                required
              ></textarea>
            </div>
            <FormButton>Send</FormButton>
          </div>
        </form>
      </Section>
    </Layout>
  );
}

export default Contact;
