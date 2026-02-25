/* import React, { useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'react-flow-renderer/dist/style.css';

function Flow() {

	const edges = [{ id: '1-2', source: '1', target: '2' }];

	const nodes = [
		{
		  id: '1',
		  position: { x: 200, y: 0 },
		  data: { label: 'Hello' },
		  type: 'input',
		},
		{
		  id: '2',
		  position: { x: 100, y: 100 },
		  data: { label: 'World' },
		},
	  ];

  return (
    <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
      <ReactFlow nodes = {nodes} >
		<Controls />
        <Background variant="dots" gap={10} size={1} edges={edges} />

      </ReactFlow>
    </div>
  );
}

export default Flow;
 */

/* I tried to create the react flow nodes for this page but then felt like too much work so changed it to normal mode. */

import React from "react"
import { Link } from "gatsby"
import Navbar from "../../components/navbar.js"
import Footer from "../../components/footer.js"
import "../../components/index.css"
import img from "./AssetsProgramming/dataStructure.png"
import img2 from "./AssetsProgramming/statistics.png"
import img3 from "./AssetsProgramming/websoftwaredevelopment.png"
import profile from "../../images/blogSideProfileImage.jpeg"
import "./style.css"
import { Helmet } from "react-helmet"
import InterviewCards from "../../components/programmingComponents/interviewCard.js"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function programming() {
  const link = "/programming/dataStructure/overview"
  return (
    <>
      <Helmet>
        <title>Sulav | Programming Classes</title>
        <meta
          name="description"
          content="Learn about interesting topics and recent finding in the field of Science and Technology."
        />
      </Helmet>
      <Navbar />
      {/* Here goes the Image and the Programming Title */}
      <div className="programmingPage md:mt-40 mt-20">
        <div className="container-xxl py-4 d-flex justify-content-between p-xxl-0">
          <h1 className="text-3xl font-bold">Programming</h1>
          <img
            className="rounded-full w-10 h-10 object-cover"
            src={profile}
            alt="Profile"
            height="37px"
            width="auto"
          />
        </div>

        {/* Short Description of the Blog. */}
        <div className="container-xxl mb-5 p-xxl-0">
          <p className="fs-5 py-1 mb-1">
            Discover the power of learning, creation and inspiration with topics
            related to programming.
          </p>
          <p className="text-muted py-1 mb-1">
            Help yourself with the topics that you want to dive into. Topics are
            seperated with classes.
          </p>
          <a className="flex flex-row items-center" href={link}>
            Explore recent topic &nbsp;
            {/* This is the svg file of the arrow.  */}
            <ArrowLeft className="rotate-180" size={18} />
          </a>
        </div>

        {/* Here goes the Class Title */}
        <div className="container-xxl d-flex justify-content-between p-xxl-0">
          <h2 className="text-xl font-bold mt-2 pb-2 px-2">Classes</h2>
        </div>

        <div className="container-xxl p-xxl-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
          >
            <Link
              to={`/programming/dataStructure`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid rounded shadow cursor-pointer"
                src={img}
                id="classes"
                alt="Data Structure Class"
              />
            </Link>
          </motion.div>
          {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        </div>
        <br />
        <div className="container-xxl mb-4 p-xxl-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to={`/programming/Probability_and_Statistics_with_Computing`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid rounded shadow cursor-pointer"
                src={img2}
                id="classes"
                alt="Probability and Statistics Class"
              />
            </Link>
          </motion.div>
          {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        </div>
        <div className="container-xxl mb-5 p-xxl-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link
              to={`/programming/websoftwaredevelopment`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid rounded shadow cursor-pointer"
                src={img3}
                id="classes"
                alt="Web Software Development Class"
              />
            </Link>
          </motion.div>
          {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        </div>
        <div className="container-xxl mb-5 p-xxl-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to={`/programming/analysisOfAlgorithm/`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid rounded shadow cursor-pointer"
                src={img3}
                id="classes"
                alt="Analysis of Algorithm Class"
              />
            </Link>
          </motion.div>
          {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        </div>

        <div className="container-xxl d-flex justify-content-between p-xxl-0">
          <h2 className="fw-bold mt-2 pb-2 px-2">Interview</h2>
        </div>
      </div>

      {/* The Interview Component */}
      <InterviewCards />

      {/*       <div className="container-xxl mb-5 p-md-0">
        <Link
          to={`/programming/Interview/reactjs`}
          className="text-decoration-none"
        >
          <img
            className="img-fluid rounded shadow cursor-pointer animate__animated animate__bounce "
            src={img3}
            id="classes"
            alt="Hello"
          />
        </Link>
      
     
      </div> */}

      <Footer />
    </>
  )
}
