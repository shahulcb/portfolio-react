import React from "react";
import Layout from "./Layout";
import Section from "../components/Section";

const NotFound = () => {
  return (
    <Layout>
      <Section className={"border-none"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">404</h1>
        <p className="text-customTextColor text-lg font-light">
          Page not found
        </p>
      </Section>
    </Layout>
  );
};

export default NotFound;
