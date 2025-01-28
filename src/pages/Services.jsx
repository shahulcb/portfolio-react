import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Section from "../components/Section";
import Row from "../components/CardGrid/Row";
import Col from "../components/CardGrid/Col";
import ServiceCard from "../components/ServiceCard";
import { GET_ALL_SERVICES } from "../services/queries";
import client from "../services/datoCMS";
import { useMe } from "../context/MeContext";

const Services = () => {
  const [services, setServices] = useState([]);
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + "| Services";
  }, [me]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await client.query({ query: GET_ALL_SERVICES });
        setServices(data.allServices);
      } catch (error) {
        console.log("🚀 ~ fetchServices ~ error:", error);
      }
    };

    fetchServices();
  }, []);
  return (
    <Layout>
      <Section className={"border-none"}>
        <h1 className="text-[32px] font-normal lg:text-[40px]">Services</h1>
        <Row>
          {services?.length > 0 ? (
            services?.map((service, index) => (
              <Col colFor="type2" key={service?.id}>
                <ServiceCard
                  title={service?.title}
                  tag={service?.tag}
                  description={service?.description}
                  points={service?.points}
                />
              </Col>
            ))
          ) : (
            <p className="text-customTextColor text-lg font-light">
              No service yet !
            </p>
          )}
        </Row>
      </Section>
    </Layout>
  );
};

export default Services;
