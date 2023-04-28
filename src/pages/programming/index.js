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
import profile from "../../images/blogSideProfileImage.jpeg"
import "./style.css"
import { Helmet } from "react-helmet"

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
      <div className="container py-4 d-flex justify-content-between">
        <h1 className="fw-bold mt-2">Programming</h1>
        <img
          className="rounded-circle my-2"
          src={profile}
          alt="Profile"
          height="37px"
          width="auto"
        />
      </div>

      {/* Short Description of the Blog. */}
      <div className="container mb-5">
        <p className="fs-5 py-1 mb-1">
          Discover the power of learning, creation and inspiration with topics
          related to programming.
        </p>
        <p className="fs-5 py-1 mb-1">
          Help yourself with the topics that you want to dive into. Topics are
          seperated with classes.
        </p>
        <a className="text-primary text-decoration-none" href={link}>
          Explore recent topic &nbsp;
          {/* This is the svg file of the arrow.  */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right-circle"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />
          </svg>
        </a>
      </div>

      {/* Here goes the Class Title */}
      <div className="container d-flex justify-content-between">
        <h2 className="fw-bold mt-2 pb-2 px-2">Classes</h2>
      </div>

      <div className="container">
        <Link
          to={`/programming/dataStructure`}
          className="text-decoration-none"
        >
          <img
            className="img-fluid rounded shadow cursor-pointer animate__animated animate__bounce"
            src={img}
            id="classes"
            alt="Hello"
          />
        </Link>
        {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        <a href={link}></a>
      </div>
      <br />
      <div className="container mb-5">
        <Link
          to={`/programming/Probability_and_Statistics_with_Computing`}
          className="text-decoration-none"
        >
          <img
            className="img-fluid rounded shadow cursor-pointer animate__animated animate__bounce "
            src={img2}
            id="classes"
            alt="Hello"
          />
        </Link>
        {/* Image for the Data Structure Class Main Image. But I think this isn't what I wanted it to look.  */}
        <a href={link}></a>
      </div>
      <Footer />
    </>
  )
}
