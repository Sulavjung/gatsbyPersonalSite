import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./style.css"


const Project = () => {


  const mainImage = "../../assets/registerManagement.png"
  const logo = "../../assets/RegisterManagementLogo.png"
  const title = "Register System"
  const type = "Utility"
  const year = "2023"
  const description =
    "🧑‍💻 This project came out of the necessity to build something that would be useful for the small business who cannot afford to pay the expensive fees of the Register Systems."
  const link = "https://registermanagement.onrender.com"
  const buttonName = "Live Demo"

/* For the Tools Project Card */
  const mainImage1 = "../../assets/realEstateAnalysis.png"
  const logo1 = "../../assets/realEstateAnalysislogo.png"
  const title1 = "Business Tools"
  const type1 = "Utility"
  const year1 = "2023"
  const description1 =
    "💼 Affordable and user-friendly tools for small businesses, fueling productivity, efficiency, and growth. 💡"
  const link1 = "https://sulavtools.netlify.app"
  const buttonName1 = "Live Demo"


  return (
	<>
    <div className="container-xxl py-2 px-xxl-0 p-4 mt-5 mb-5 ">
      <div className="row projectCont">
        <div className="col-lg-6 order-lg-2 order-2 pt-lg-5 mt-lg-5 projectImage">
          <StaticImage
            className="javacheat img-fluid"
            src={mainImage}
            alt="Register Management System"
          />
        </div>
        <div className="col-lg-6 order-lg-1 order-1  d-flex align-items-center projectText">
          <div className="p-1 p-sm-5 pt-3 pt-lg-0 pb-lg-0">
            <div className="labelcheat text-start p-3 p-sm-4">
              <div className="registerLogo">
                <StaticImage
                  className="javacheat img-fluid"
                  src={logo}
                  alt="Register Management System"
                />
              </div>
              <h1 className="mt-2">
                <strong>{title}</strong>
              </h1>
              <p className="projectSubText">
                <strong>{type} &#9864; {year}</strong>{" "}
              </p>
              <div className="py-1">
                <p>
                  {description}
                </p>
              </div>
              <p>
                <button
                  onClick={() =>
                    window.open(
                      link,
                      "_blank"
                    )
                  }
                >
                  <p className="px-4 m-0" id="download">
                    {buttonName}
                  </p>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
	<div className="container-xxl py-2 px-xxl-0 p-4 mt-5 mb-5 ">
	<div className="row projectCont">
	  <div className="col-lg-6 order-lg-2 order-2 pt-lg-5 mt-lg-5 projectImage">
		<StaticImage
		  className="javacheat img-fluid"
		  src={mainImage1}
		  alt="Register Management System"
		/>
	  </div>
	  <div className="col-lg-6 order-lg-1 order-1  d-flex align-items-center projectText">
		<div className="p-1 p-sm-5 pt-3 pt-lg-0 pb-lg-0">
		  <div className="labelcheat text-start p-3 p-sm-4">
			<div className="registerLogo">
			  <StaticImage
				className="javacheat img-fluid"
				src={logo1}
				alt="Register Management System"
			  />
			</div>
			<h1 className="mt-2">
			  <strong>{title1}</strong>
			</h1>
			<p className="projectSubText">
			  <strong>{type1} &#9864; {year1}</strong>{" "}
			</p>
			<div className="py-1">
			  <p>
				{description1}
			  </p>
			</div>
			<p>
			  <button
				onClick={() =>
				  window.open(
					link1,
					"_blank"
				  )
				}
			  >
				<p className="px-4 m-0" id="download">
				  {buttonName1}
				</p>
			  </button>
			</p>
		  </div>
		</div>
	  </div>
	</div>
  </div>
  </>
  )
}

export default Project;