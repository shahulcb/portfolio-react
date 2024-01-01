import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import BackButton from '../../components/BackButton'
import BlogHeaderSection from '../../components/Blog/BlogHeaderSection'
import BlogImage from '../../components/Blog/BlogImage'
import BlogContentSection from '../../components/Blog/BlogContentSection'

function Blog() {
    return (
        <Layout>
            <Section className={"border-none max-w-[700px] mx-auto lg:px-0"}>
                <BackButton />
                <BlogHeaderSection tag={"DESIGN"} title={"What's the Difference Between UX and UI?"} />
                <BlogImage imageSrc={"https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?scale-down-to=1024"} />
                <p className='text-base font-light text-customTextColor'>In the world of design, two terms often come up in conversations: User Experience (UX) and User Interface (UI). While they might sound similar and are closely related, they represent distinct aspects of the design process, each playing a crucial role in creating effective and user-friendly products. In this article, we'll delve into the key differences between UX and UI, shedding light on their individual contributions to crafting exceptional user-centric designs.</p>
                <BlogContentSection title={"User Experience (UX)"} description={"User Experience, commonly referred to as UX, focuses on the overall interaction that users have with a product. It's about understanding the users' needs, behaviors, emotions, and goals, and then designing an experience that meets and exceeds those expectations. UX design is concerned with the holistic journey a user takes when interacting with a product or service, from the moment they first encounter it to their long-term engagement."} />
                <BlogContentSection title={"User Interface (UI)"} description={"User Interface, or UI, is the visual and interactive elements that users engage with when using a product. It involves designing the graphical layout of an application, including buttons, forms, typography, color schemes, and other visual elements. UI design focuses on making the user's interaction visually appealing, consistent, and intuitive."} />
            </Section>
        </Layout>
    )
}

export default Blog
