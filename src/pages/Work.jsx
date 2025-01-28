import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Section from "../components/Section";
import BackButton from "../components/BackButton";
import WorkContentSection from "../components/Work/WorkContentSection";
import WorkHeaderSection from "../components/Work/WorkHeaderSection";
import WorkImage from "../components/Work/WorkImage";
import { useParams } from "react-router-dom";
import { GET_SINGLE_WORK } from "../services/queries";
import client from "../services/datoCMS";
import { useMe } from "../context/MeContext";

function Work() {
  const { id } = useParams();
  const [work, setWork] = useState({});
  const { me } = useMe();

  useEffect(() => {
    document.title = me?.username + "| " + work?.title;
  }, [work]); // eslint-disable-next-line

  function orderTheImageAndContent() {
    let imageCount = work?.images?.length;
    let contentCount = work?.workContents?.length;
    let i = 0;
    const components = [];

    for (i; i < contentCount; i++) {
      components.push(
        <React.Fragment key={i}>
          <WorkImage imageSrc={work?.images[i]?.url} />
          <WorkContentSection
            title={work?.workContents[i]?.title}
            points={work?.workContents[i]?.points}
          />
        </React.Fragment>
      );
    }
    for (i; i < imageCount; i++) {
      components.push(<WorkImage imageSrc={work?.images[i]?.url} key={i} />);
    }
    return components;
  }
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const { data } = await client.query({
          query: GET_SINGLE_WORK,
          variables: { id },
        });
        setWork(data.work);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWork();
  }, []); // eslint-disable-next-line
  return (
    <Layout>
      <Section className={"border-none"}>
        <BackButton />
        <WorkHeaderSection
          title={work?.title}
          description={work?.description}
          points={work?.mainPoints}
          url={work?.url}
        />
        {/* {work?.images?.map((image, index) => (
          <WorkImage imageSrc={image?.url} />
        ))}
        {work?.workContents?.map((workContent, index) => (
          <WorkContentSection
            title={workContent?.title}
            points={workContent?.points}
          />
        ))} */}
        {orderTheImageAndContent()}
      </Section>
    </Layout>
  );
}

export default Work;
