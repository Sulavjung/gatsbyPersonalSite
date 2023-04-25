import React from 'react'
import Navbar from '../components/navbar';

import Eyecatcher from '../components/eyecatcher';
import ExploreAndBlog from '../components/exploreAndBlog';
import BoxesContents from '../components/boxesContents';
import Footer from '../components/footer';

import '../components/index.css'
import FreeJavaCheatSheet from '../components/freeJavaCheatSheet';



const indexPage= () => {
  
  return (
	<>
		<Navbar />
		<Eyecatcher />
    <BoxesContents />
    <FreeJavaCheatSheet />
    <ExploreAndBlog />
    <Footer />
	</>
  )
}

export default indexPage;

