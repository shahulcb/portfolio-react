import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Section from "../components/Section";
import FormButton from "../components/Form/FormButton";
import { useMe } from "../context/MeContext";
import toast from "react-hot-toast";

function Contact() {
  const { me } = useMe();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   comment: "",
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  useEffect(() => {
    document.title = me?.username + "| Contact";
  }, [me]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const formDataEncoded = new FormData(form);
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formDataEncoded).toString()
  //   })
  //     .then(
  //       () => toast.success("Form submitted successfully!"),
  //       setFormData({ name: "", email: "", comment: "" })
  //     )
  //     .catch((error) => toast.error("Form submission failed"));
  // };
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

        <form
          name="contact"
          method="post"
          data-netlify="true"
{/*           onSubmit={handleSubmit} */}
        >
          <input type="hidden" name="form-name" value="contact" />
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
{/*                   value={formData.name}
                  onChange={handleChange} */}
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
{/*                   value={formData.email}
                  onChange={handleChange} */}
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
{/*                 value={formData.comment}
                onChange={handleChange} */}
              ></textarea>
            </div>
           <button type="submit" className='w-full h-[50px] bg-yellow-500 text-base font-semibold text-black hover:bg-yellow-600 border-none rounded-md transition ease-in-out duration-500'>
           Send
        </button>
          </div>
        </form>
      </Section>
    </Layout>
  );
}

export default Contact;
