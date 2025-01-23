import React from "react";
import Section from "../components/Section";
import Layout from "./Layout";
import Row from "../components/CardGrid/Row";
import Col from "../components/CardGrid/Col";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Works() {
  return (
    <Layout>
      <Section className={"border-none"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">Works</h1>
        <Row>
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
            <Col colFor="type1">
              <Link to={"/works/1"}>
                <Card
                  cardType={"type1"}
                  tag={"ARCHITECTURE"}
                  title={"Luxe Architects Website"}
                  imageSrc={
                    "https://framerusercontent.com/images/QFLyex7r5R0HiwFdB5l3FZXl4.jpg?scale-down-to=512"
                  }
                />
              </Link>
            </Col>
          </Row>
        </Row>
      </Section>
    </Layout>
  );
}

export default Works;
