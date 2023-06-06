import React, { useEffect } from "react"
import DataTypes from "./java/cheatsheetdivs"
import Intro from "./java/intro"
import OperatorTypes from "./java/operatorTypes"
import InputAndOutput from "./java/inputAndOutput"
import "../../templates/prism.css"
import Prism from "prismjs"
import Filehandling from "./java/filehandling"
import InterfacesAndAbstractClasses from "./java/interfacesAndAbstractClasses"
import ControlStructures from "./java/controlStructures"
import ExceptionHandling from "./java/exceptionHandling"
import ClassesAndObjects from "./java/classesAndObjects"
import Generics from "./java/generics"
import Collections from "./java/collections"
import CollectionMethods from "./java/collectionMethods"
import Streams from "./java/Streams"
import Copyright from "./java/copyright"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"

const Cheatsheet = () => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
	<>
	<Navbar/>
    <div className="container-fluid pattern">
      <div className="cols-12">
        <Intro />
      </div>
      <div className="outer-block">
        <div className="items">
          <DataTypes />
        </div>
        <div className="items">
          <OperatorTypes />
        </div>
        <div className="items">
          <InputAndOutput />
        </div>
        <div className="items">
          <Filehandling />
        </div>
        <div className="items">
          <InterfacesAndAbstractClasses />
        </div>
        <div className="items">
          <ControlStructures />
        </div>
        <div className="items">
          <ExceptionHandling />
        </div>
        <div className="items">
          <ClassesAndObjects />
        </div>
        <div className="items">
          <Generics />
        </div>
        <div className="items">
          <Collections />
        </div>
        <div className="items">
          <CollectionMethods />
        </div>
        <div className="items">
          <Streams />
        </div>
        <div className="items">
		  <Copyright />
        </div>
      </div>
      <script src="../../templates/prism.js"></script>
    </div>
	<Footer />
	</>
  )
}

export default Cheatsheet
