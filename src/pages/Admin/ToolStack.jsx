import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import ToolButton from '../../components/ToolButton'

function ToolStack() {
    return (
        <Layout>
            <Section className={"border-none"}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <ToolButton imageSrc={"https://logo.clearbit.com/Framer.com?size=500"} tag={"Websites"} title={"Framer"} />
                    <ToolButton imageSrc={"https://logo.clearbit.com/figmaelements.com?size=500"} tag={"Design"} title={"Figma"} />
                    <ToolButton imageSrc={"https://logo.clearbit.com/Google.com?size=500"} tag={"Communication"} title={"Google Workspace"} />
                    <ToolButton imageSrc={"https://logo.clearbit.com/Loom.com?size=500"} tag={"Screen Recording"} title={"Loom"} />
                    <ToolButton imageSrc={"https://logo.clearbit.com/Stripe.com?size=500"} tag={"Invoices"} title={"Stripe"} />
                    <div className='border border-customBorderColor rounded-md p-3 h-full flex items-center justify-center gap-4 cursor-pointer hover:bg-customHoverColor transition ease-in-out duration-500'>
                        <p>Add tool</p>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default ToolStack
