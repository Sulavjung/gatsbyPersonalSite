import React, { useEffect } from "react"
import DataTypes from "../../components/cheatSheet/java/cheatsheetdivs"
import Intro from "../../components/cheatSheet/java/intro"
import OperatorTypes from "../../components/cheatSheet/java/operatorTypes"
import InputAndOutput from "../../components/cheatSheet/java/inputAndOutput"
import "../../templates/prism.css"
import Prism from "prismjs"
import Filehandling from "../../components/cheatSheet/java/filehandling"
import InterfacesAndAbstractClasses from "../../components/cheatSheet/java/interfacesAndAbstractClasses"
import ControlStructures from "../../components/cheatSheet/java/controlStructures"
import ExceptionHandling from "../../components/cheatSheet/java/exceptionHandling"
import ClassesAndObjects from "../../components/cheatSheet/java/classesAndObjects"
import Generics from "../../components/cheatSheet/java/generics"
import Collections from "../../components/cheatSheet/java/collections"
import CollectionMethods from "../../components/cheatSheet/java/collectionMethods"
import Streams from "../../components/cheatSheet/java/Streams"
import Copyright from "../../components/cheatSheet/java/copyright"
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
