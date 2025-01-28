import React, { useEffect } from "react";
import Layout from "./Layout";
import OpenToWorkButton from "../components/OpenToWorkButton";
import SocialButton from "../components/SocialButton";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faGithub,
//   faDiscord,
//   faSlack,
// } from "@fortawesome/free-brands-svg-icons";
import Section from "../components/Section";
// import Button from "../components/Button";
// import Row from "../components/CardGrid/Row";
// import Col from "../components/CardGrid/Col";
// import Card from "../components/Card";
import ToolButton from "../components/ToolButton";
import { Link } from "react-router-dom";
import { useMe } from "../context/MeContext";

function Home() {
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + "| Home";
  }, [me]);
  return (
    <>
      <Layout>
        <Section>
          <div className="flex justify-between">
            <img
              src={me?.images[0]?.url + `?fm=webp&q=75&w=200&h=200`}
              alt=""
              className="w-[100px] h-[100px] rounded-md object-cover"
            />
            <Link to={"/contact"}>
              <OpenToWorkButton />
            </Link>
          </div>
          <div className="flex flex-col gap-4 max-w-[800px]">
            <p className="text-[32px] font-normal leading-[120%] lg:text-[40px]">
              {me?.title}
            </p>
            <p className="text-customTextColor text-lg font-light">
              {me?.about[0]}
            </p>
          </div>
          <div className="flex gap-4">
            {me?.socialLinks?.map((socialLink, index) => (
              <SocialButton url={socialLink?.url} key={index}>
                <i className={socialLink?.icon}></i>
              </SocialButton>
            ))}
          </div>
        </Section>
        {/* <Section>
          <h1 className="text-[28px] font-normal">Featured Works</h1>
          <Row>
            <Col colFor="type1">
              <Link to={"/works/1"}>
                <Card
                  cardType={"type1"}
                  tag={"BLOGGING"}
                  title={"Mindful Blog Mobile App"}
                  imageSrc={
                    "https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp"
                  }
                />
              </Link>
            </Col>
            <Col colFor="type1">
              <Link to={"/works/1"}>
                <Card
                  cardType={"type1"}
                  tag={"E-COMMERCE"}
                  title={"Pedal Website"}
                  imageSrc={
                    "https://framerusercontent.com/images/VL1paRJcTdgdBftv6w0aff87XQQ.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
            <Col colFor="type1">
              <Link to={"/works/1"}>
                <Card
                  cardType={"type1"}
                  tag={"E-COMMERCE"}
                  title={"Nike Web App"}
                  imageSrc={
                    "https://framerusercontent.com/images/KQp15xIkdDYP9w6se5eUh9Rq7Y.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
          </Row>
          <Link to={"/works"}>
            <Button>View All Works</Button>
          </Link>
        </Section> */}
        {/* <Section>
          <h1 className="text-[28px] font-normal">Featured Blogs</h1>
          <Row>
            <Col colFor="type2">
              <Link to={"/blogs/1"}>
                <Card
                  cardType={"type2"}
                  tag={"DESIGN"}
                  title={"What's the Difference Between UX and UI?"}
                  imageSrc={
                    "https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
            <Col colFor="type2">
              <Link to={"/blogs/1"}>
                <Card
                  cardType={"type2"}
                  tag={"PRODUCTIVITY"}
                  title={"Take It One Step At A Time"}
                  imageSrc={
                    "https://framerusercontent.com/images/ErzMHG3Pd5Gk6RDm2eAFB93ihY.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
            <Col colFor="type2">
              <Link to={"/blogs/1"}>
                <Card
                  cardType={"type2"}
                  tag={"DESIGN"}
                  title={"How Do I Design A Website?"}
                  imageSrc={
                    "https://framerusercontent.com/images/Oj7IkTyPVB0eMk0EbluNfbb6ZcI.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
          </Row>
          <Link to={"/blogs"}>
            <Button>View All Blogs</Button>
          </Link>
        </Section> */}
        <Section>
          <h1 className="text-[28px] font-normal">Tools Stack</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {me?.toolStacks?.map((toolStack, index) => (
              <ToolButton
                key={index}
                imageSrc={toolStack?.image}
                tag={toolStack?.tag}
                title={toolStack?.title}
              />
            ))}
            {/* <ToolButton
              imageSrc={"https://logo.clearbit.com/figmaelements.com?size=500"}
              tag={"Design"}
              title={"Figma"}
            />
            <ToolButton
              imageSrc={"https://logo.clearbit.com/Google.com?size=500"}
              tag={"Communication"}
              title={"Google Workspace"}
            />
            <ToolButton
              imageSrc={"https://logo.clearbit.com/Loom.com?size=500"}
              tag={"Screen Recording"}
              title={"Loom"}
            />
            <ToolButton
              imageSrc={"https://logo.clearbit.com/Stripe.com?size=500"}
              tag={"Invoices"}
              title={"Stripe"}
            /> */}
          </div>
        </Section>
      </Layout>
    </>
  );
}

export default Home;
