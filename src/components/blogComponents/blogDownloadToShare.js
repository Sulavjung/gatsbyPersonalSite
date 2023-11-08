import React from "react";
import { toJpeg } from "html-to-image";
import "./DownloadBlogToShare.css"; // Import the CSS file

const DownloadBlogToShare = ({ coverImage, Title, author, Description, setShowDownloadPopup }) => {
  const downloadAsPNG = (divId, fileName) => {
    const divToCapture = document.getElementById(divId);

    toJpeg(divToCapture)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName + ".png";
        link.click();
      })
      .catch((error) => {
        console.error("Error generating screenshot:", error);
      });
  };

  return (
    <div className="popupDownload">
      <div className="popupContent">
      <button onClick={() => setShowDownloadPopup(false)} class="close">&times;</button>
      <div className="storySizeStyle" id="blogStory">
        <img src={coverImage} alt={Title} className="imgStyle" />
        <div className="textContainerStyle">
          <p className="aboveDescription mb-1">
            {author} -{" "}
            <span className="border rounded px-1 fw-bold">sulavhamal.com</span>
          </p>
          <h2 className="downloadTitleStory fw-bold">{Title}</h2>
          <p className="downloadDescriptionStory fw-bold mb-1">{Description}</p>
          <p className="bottomDescription text-primary">
            Read the full article in my blogpost.{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>{" "}
          </p>
        </div>
      </div>
      <button className="downloadButton" onClick={() => downloadAsPNG("blogStory", "story")}>
        Download Story
      </button>

      <div className="postSizeStyle" id="blogPost">
        <img src={coverImage} alt={Title} className="imgStyle" />
        <div className="textContainerStyle1">
          <p className="aboveDescription mb-1">
            {author} -{" "}
            <span className="border rounded fw-bold px-1">sulavhamal.com</span>
          </p>
          <h2 className="downloadTitle fw-bold">{Title}</h2>
          <p className="downloadDescription fw-bold mb-1">{Description}</p>
          <p className="bottomDescription text-primary">
            Read the full article in my blogpost.{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-arrow-right-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>{" "}
          </p>
        </div>
      </div>
      <button className="downloadButton" onClick={() => downloadAsPNG("blogPost", "post")}>
        Download Post
      </button>
      </div>
    </div>
  );
};

export default DownloadBlogToShare;
