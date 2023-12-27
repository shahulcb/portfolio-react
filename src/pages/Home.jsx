import React from 'react'
import Layout from './Layout'
import OpenToWorkButton from "../components/OpenToWorkButton"
import SocialButton from '../components/SocialButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faDiscord, faSlack } from "@fortawesome/free-brands-svg-icons"
import Section from '../components/Section'
import Button from "../components/Button"
import Row from "../components/CardGrid/Row"
import Col from "../components/CardGrid/Col"
import Card from "../components/Card"
import ToolButton from "../components/ToolButton"

function Home() {
    return (
        <>
            <Layout>
                <Section>
                    <div className='flex justify-between'>
                        <img src="https://framerusercontent.com/images/oIyuUF3XQRzJcoPj4QE687vFhCo.jpg?scale-down-to=512" alt="" className='w-[100px] h-[100px] rounded-md object-cover' />
                        <OpenToWorkButton />
                    </div>
                    <div className='flex flex-col gap-4 max-w-[800px]'>
                        <p className='text-[32px] font-normal leading-[120%] lg:text-[40px]'>Hey, I'm Shahul — I'm a Product Designer & No-Code Expert</p>
                        <p className='text-customTextColor text-lg font-light'>I am a seasoned product designer with 5 years of experience specializing in SaaS solutions, crafting user-centric experiences that drive innovation and efficiency.</p>
                    </div>
                    <div className='flex gap-4'>
                        <SocialButton>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </SocialButton>
                        <SocialButton>
                            <FontAwesomeIcon icon={faGithub} />
                        </SocialButton>
                        <SocialButton>
                            <FontAwesomeIcon icon={faDiscord} />
                        </SocialButton>
                        <SocialButton>
                            <FontAwesomeIcon icon={faSlack} />
                        </SocialButton>
                    </div>
                </Section>
                <Section>
                    <h1 className="text-[28px] font-normal">Featured Works</h1>
                    <Row>
                        <Col colFor='type1'>
                            <Card cardType={"type1"} tag={"BLOGGING"} title={"Mindful Blog Mobile App"} imageSrc={"https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp"} />
                        </Col>
                        <Col colFor='type1'>
                            <Card cardType={"type1"} tag={"E-COMMERCE"} title={"Pedal Website"} imageSrc={"https://framerusercontent.com/images/VL1paRJcTdgdBftv6w0aff87XQQ.jpg?scale-down-to=512"} />
                        </Col>
                        <Col colFor='type1'>
                            <Card cardType={"type1"} tag={"E-COMMERCE"} title={"Nike Web App"} imageSrc={"https://framerusercontent.com/images/KQp15xIkdDYP9w6se5eUh9Rq7Y.jpg?scale-down-to=512"} />
                        </Col>
                    </Row>
                    <Button>View All Works</Button>
                </Section>
                <Section>
                    <h1 className="text-[28px] font-normal">Featured Blogs</h1>
                    <Row>
                        <Col colFor='type2'>
                            <Card cardType={"type2"} tag={"DESIGN"} title={"What's the Difference Between UX and UI?"} imageSrc={"https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?scale-down-to=512"} />
                        </Col>
                        <Col colFor='type2'>
                            <Card cardType={"type2"} tag={"PRODUCTIVITY"} title={"Take It One Step At A Time"} imageSrc={"https://framerusercontent.com/images/ErzMHG3Pd5Gk6RDm2eAFB93ihY.jpg?scale-down-to=512"} />
                        </Col>
                        <Col colFor='type2'>
                            <Card cardType={"type2"} tag={"DESIGN"} title={"How Do I Design A Website?"} imageSrc={"https://framerusercontent.com/images/Oj7IkTyPVB0eMk0EbluNfbb6ZcI.jpg?scale-down-to=512"} />
                        </Col>
                    </Row>
                    <Button>View All Blogs</Button>
                </Section>
                <Section>
                    <h1 className="text-[28px] font-normal">Tools Stack</h1>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        <ToolButton imageSrc={"https://logo.clearbit.com/Framer.com?size=500"} tag={"Websites"} title={"Framer"} />
                        <ToolButton imageSrc={"https://logo.clearbit.com/figmaelements.com?size=500"} tag={"Design"} title={"Figma"} />
                        <ToolButton imageSrc={"https://logo.clearbit.com/Google.com?size=500"} tag={"Communication"} title={"Google Workspace"} />
                        <ToolButton imageSrc={"https://logo.clearbit.com/Loom.com?size=500"} tag={"Screen Recording"} title={"Loom"} />
                        <ToolButton imageSrc={"https://logo.clearbit.com/Stripe.com?size=500"} tag={"Invoices"} title={"Stripe"} />
                    </div>
                </Section>
            </Layout>
        </>
    )
}

export default Home
