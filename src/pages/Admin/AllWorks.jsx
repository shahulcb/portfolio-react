import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import Row from '../../components/CardGrid/Row'
import Col from '../../components/CardGrid/Col'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

function AllWorks() {
    return (
        <Layout>
            <Section className={"border-none"}>
                <Row>
                    <Col colFor='type1'>
                        <Link to={"edit-work/1"}>
                            <Card cardType={"type1"} tag={"BLOGGING"} title={"Mindful Blog Mobile App"} imageSrc={"https://framerusercontent.com/images/isuy4zvThkzCNgjg9FrXesN4DJA.webp"} />
                        </Link>
                    </Col>
                    <Col colFor='type1'>
                        <Link to={"edit-work/1"}>
                            <Card cardType={"type1"} tag={"E-COMMERCE"} title={"Pedal Website"} imageSrc={"https://framerusercontent.com/images/VL1paRJcTdgdBftv6w0aff87XQQ.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type1'>
                        <Link to={"edit-work/1"}>
                            <Card cardType={"type1"} tag={"E-COMMERCE"} title={"Nike Web App"} imageSrc={"https://framerusercontent.com/images/KQp15xIkdDYP9w6se5eUh9Rq7Y.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type1'>
                        <Link to={"edit-work/1"}>
                            <Card cardType={"type1"} tag={"ARCHITECTURE"} title={"Luxe Architects Website"} imageSrc={"https://framerusercontent.com/images/QFLyex7r5R0HiwFdB5l3FZXl4.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type1'>
                        <Link to={"add-work"}>
                            <div className='border border-customBorderColor h-40 lg:h-80 w-full rounded-md hover:bg-customHoverColor cursor-pointer transition ease-in-out duration-500 flex items-center justify-center'>
                                <p>Add Work</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Section>
        </Layout>
    )
}

export default AllWorks
