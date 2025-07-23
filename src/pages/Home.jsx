import React, { useEffect, useState } from "react";
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
import Button from "../components/Button";
import Row from "../components/CardGrid/Row";
import Col from "../components/CardGrid/Col";
import Card from "../components/Card";
import ToolButton from "../components/ToolButton";
import { Link } from "react-router-dom";
import { useMe } from "../context/MeContext";
import { motion, AnimatePresence } from "framer-motion";
import { GET_ALL_TESTIMONIALS, GET_ALL_WORKS } from "../services/queries";
import client from "../services/datoCMS";

function Home() {
  const { me } = useMe();
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredWorks, setFeaturedWorks] = useState([]);

  useEffect(() => {
    document.title = me?.username + " | Home";
  }, [me]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await client.query({ query: GET_ALL_TESTIMONIALS });
        setTestimonials(data.allTestimonials);
      } catch (error) {
        console.log("🚀 ~ fetchServices ~ error:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const fetchFeaturedWorks = async () => {
      try {
        const { data } = await client.query({
          query: GET_ALL_WORKS,
          variables: {
            filter: {
              featured: { eq: true }, // ✅ Pass filter here
            },
          },
        });
        setFeaturedWorks(data.allWorks);
      } catch (error) {
        console.log("🚀 ~ fetchServices ~ error:", error);
      }
    };
    fetchFeaturedWorks();
  }, []);

  useEffect(() => {
    if (!testimonials.length) return; // avoid starting interval early

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <>
      <Layout>
        <Section>
          <div className="flex justify-end">
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

          {/* Stats Section - Option 1: Basic Stats */}
          <div className="flex gap-8 flex-wrap">
            {me?.stats.map(({ title, value }, index) => (
              <div className="flex flex-col items-center" key={index}>
                <p className="text-3xl font-bold">{value}</p>
                <p className="text-customTextColor text-sm font-light">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {me?.socialLinks?.map((socialLink, index) => (
              <SocialButton url={socialLink?.url} key={index}>
                <i className={socialLink?.icon}></i>
              </SocialButton>
            ))}
          </div>
        </Section>
        <Section>
          <h1 className="text-[28px] font-normal">Featured Works</h1>
          <Row>
            {featuredWorks?.length > 0 ? (
              featuredWorks?.map((work) => (
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
          <Link to={"/works"}>
            <Button>View All Works</Button>
          </Link>
        </Section>
        <Section>
          <h1 className="text-[28px] font-normal text-center">
            What Clients Say
          </h1>
          <div className="flex justify-center">
            {testimonials.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-md border rounded-md border-customBorderColor p-6 min-h-52"
                >
                  <p className="italic mb-6 text-center">
                    “{testimonials[currentIndex]?.quote ?? "No quote available"}
                    ”
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={
                        testimonials[currentIndex]?.image?.url ??
                        "/default-avatar.png"
                      }
                      alt={testimonials[currentIndex]?.author ?? "Anonymous"}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="text-sm font-semibold">
                        {testimonials[currentIndex]?.author ?? "Unknown"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonials[currentIndex]?.role ?? "Client"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <p className="text-customTextColor text-lg font-light">
                No testimonials available.
              </p>
            )}
          </div>
        </Section>

        <Section>
          <h1 className="text-[28px] font-normal">Tool Stacks</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {me?.toolStacks?.length > 0 ? (
              me.toolStacks.map((toolStack, index) => (
                <ToolButton
                  key={index}
                  imageSrc={toolStack?.image}
                  tag={toolStack?.tag}
                  title={toolStack?.title}
                />
              ))
            ) : (
              <p className="text-customTextColor text-lg font-light">
                No tools added yet!
              </p>
            )}

            {/* <ToolButton
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
