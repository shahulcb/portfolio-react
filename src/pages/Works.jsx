import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Layout from "./Layout";
import Row from "../components/CardGrid/Row";
import Col from "../components/CardGrid/Col";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { GET_ALL_WORKS } from "../services/queries";
import client from "../services/datoCMS";
import { useMe } from "../context/MeContext";

function Works() {
  const [works, setWorks] = useState([]);
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + " | Works";
  }, [me]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const { data } = await client.query({ query: GET_ALL_WORKS });
        setWorks(data.allWorks);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, []);

  return (
    <Layout>
      <Section className={"border-none"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">Works</h1>
        <Row>
          {works?.length > 0 ? (
            works?.map((work) => (
              <Col colFor="type1" key={work?.id}>
                <Link to={`/works/${work?.id}`}>
                  <Card
                    cardType={"type1"}
                    tag={work?.workType}
                    title={work?.title}
                    imageSrc={work?.images[0].url}
                  />
                </Link>
              </Col>
            ))
          ) : (
            <p className="text-customTextColor text-lg font-light">
              No work yet !
            </p>
          )}
        </Row>
      </Section>
    </Layout>
  );
}

export default Works;
