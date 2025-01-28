import React, { useEffect } from "react";
import Layout from "./Layout";
import Section from "../components/Section";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { useMe } from "../context/MeContext";

function About() {
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + "| About";
  }, [me]);
  return (
    <Layout>
      <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">About</h1>
        <div className="flex flex-col gap-4">
          <p className="text-base font-light">{me?.about[1]}</p>
          <img
            src={me?.images[1]?.url + `?fm=webp&q=80&h=400`}
            alt=""
            className="max-h-[400px] w-full object-cover rounded-md"
          />
        </div>
        {me?.about?.slice(2).map((text) => (
          <p className="text-base font-light text-customTextColor">{text}</p>
        ))}

        <Link to={"/contact"}>
          <Button>Let's Talk</Button>
        </Link>
      </Section>
    </Layout>
  );
}

export default About;
