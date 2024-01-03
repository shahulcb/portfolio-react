import React from 'react'
import Layout from '../Layout'
import Section from '../../components/Section'
import Row from '../../components/CardGrid/Row'
import Col from '../../components/CardGrid/Col'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

function AllBlogs() {
    return (
        <Layout>
            <Section className={"border-none"}>
                <Row>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <Card cardType={"type2"} tag={"DESIGN"} title={"What's the Difference Between UX and UI?"} imageSrc={"https://framerusercontent.com/images/b5BAXAQCSX9uo7JqPHBYYsrzQ.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <Card cardType={"type2"} tag={"PRODUCTIVITY"} title={"Take It One Step At A Time"} imageSrc={"https://framerusercontent.com/images/ErzMHG3Pd5Gk6RDm2eAFB93ihY.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <Card cardType={"type2"} tag={"DESIGN"} title={"How Do I Design A Website?"} imageSrc={"https://framerusercontent.com/images/Oj7IkTyPVB0eMk0EbluNfbb6ZcI.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <Card cardType={"type2"} tag={"PRODUCTIVITY"} title={"3 Simple Steps To Boost Your Productivity"} imageSrc={"https://framerusercontent.com/images/ukUaYu6JmoCFF4mRt1nFlb0I.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <Card cardType={"type2"} tag={"MAKING MONEY"} title={"5 Digital Product Ideas For Designers"} imageSrc={"https://framerusercontent.com/images/0v7xoTuiARlYIBsk2AHJAZFmXTI.jpg?scale-down-to=512"} />
                        </Link>
                    </Col>
                    <Col colFor='type2'>
                        <Link to={"/blogs/1"}>
                            <div className='border border-customBorderColor h-40 w-full rounded-md hover:bg-customHoverColor cursor-pointer transition ease-in-out duration-500 flex items-center justify-center'>
                                <p>Add Blog</p>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Section>
        </Layout>
    )
}

export default AllBlogs
