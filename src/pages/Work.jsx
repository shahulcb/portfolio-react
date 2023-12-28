import React from 'react'
import Layout from './Layout'
import Section from '../components/Section'
import BackButton from "../components/BackButton"
import WorkContentSection from '../components/Work/WorkContentSection'
import WorkHeaderSection from '../components/Work/WorkHeaderSection'
import WorkImage from '../components/Work/WorkImage'

function Work() {
    return (
        <Layout>
            <Section className={"border-none"}>
                <BackButton />
                <WorkHeaderSection title={"Nike Web App"} description={"The Nike Web App redesign marked a significant step towards revolutionizing the way athletes and fitness enthusiasts engage with their training routines."} industry={"E-Commerce"} timeline={"6 months"} roles={"Product Design, UX Audit, Prototyping"} />
                <WorkImage imageSrc={"https://framerusercontent.com/images/YqUXyuKZSiF1WVYqsRcbAFsZDw.webp"} />
                <WorkContentSection title={"My Role"} content={[{ title: "Responsibilities", text: "As the lead Product Designer, my responsibilities encompassed the entire design lifecycle from user research to visual design and user experience." }, { title: "Collaboration", text: "Collaboration was vital in creating a cohesive and successful product. I worked closely with developers, product managers, and content creators." }]} />
                <WorkImage imageSrc={"https://framerusercontent.com/images/QYdp7x46m3LB8NAvPjLQpxcAQ.webp"} />
                <WorkContentSection title={"The Project"} content={[{ title: "Challenge", text: "One of the significant challenges was to strike a balance between presenting a vast variety of content and maintaining a clean, uncluttered interface. The challenge was to enhance content discoverability while ensuring that users were not overwhelmed by choices." }, { title: "Outcome", text: "The collaborative efforts and strategic design decisions resulted in a successful outcome — average session duration and articles read per session saw an impressive increase of 50% within the first two months post-launch." }]} />
            </Section>
        </Layout>
    )
}

export default Work
