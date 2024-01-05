import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const InterviewCards = () => {
  const mainImage = "../../assets/reactInterview.png"
  const logo = "../../assets/RegisterManagementLogo.png"
  const title = "React JS"
  const type = "Questions"
  const year = "2023"
  const description =
    "🧑‍💻 Navigate the React.js interview landscape with confidence by mastering key concepts, from virtual DOM and JSX to component lifecycle and state management."
  const buttonName = "Learn React"

  /* For the JavaScript Interview Questions on Concepts. */
  const mainImage1 = "../../assets/javaScriptInterview.png"
  const logo1 = "../../assets/javaScriptlogo.png"
  const title1 = "JavaScript"
  const type1 = "Interview Questions"
  const year1 = "2023"
  const description1 =
    "🍉 Explore essential concepts, coding challenges, and best practices that will elevate your interview performance. Get ready to impress with your in-depth understanding of JavaScript."
  const buttonName1 = "Learn JavaScript"

  return (
    <>

    {/* This is the part where exist the REact JS Interview */}
      <div className="container-xxl py-2 px-xxl-0 p-4 mt-0 mb-5 ">
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
                    className="javacheat img-fluid rouded"
                    src={logo}
                    alt="Register Management System"
                  />
                </div>
                <h2 className="mt-2 fs-1">
                  <strong>{title}</strong>
                </h2>
                <p className="projectSubText">
                  <strong>
                    {type} &#9864; {year}
                  </strong>{" "}
                </p>
                <div className="py-1">
                  <p>{description}</p>
                </div>
                <p>
                  <Link
                    to={`/programming/Interview/reactjs`}
                    className="text-decoration-none"
                  >
                    <button className="bg-reactjs">
                      <p className="px-4 m-0 fw-bold fs-4">{buttonName}</p>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* This is the part where I show JavaScript Interview Card */}
      <div className="container-xxl py-2 px-xxl-0 p-4 mt-0 mb-5 ">
        <div className="row projectCont">
          <div className="col-lg-6 order-lg-1 order-2 pt-lg-5 mt-lg-5 projectImage">
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
                <h2 className="mt-2 fs-1">
                  <strong>{title1}</strong>
                </h2>
                <p className="projectSubText">
                  <strong>
                    {type1} &#9864; {year1}
                  </strong>{" "}
                </p>
                <div className="py-1">
                  <p>{description1}</p>
                </div>
                <p>
                  <Link
                    to={`/programming/Interview/javascript`}
                    className="text-decoration-none"
                  >
                    <button className="bg-javaScript">
                      <p className="px-4 m-0 fw-bold fs-4">{buttonName1}</p>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InterviewCards
