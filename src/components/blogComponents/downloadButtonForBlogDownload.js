import React from "react";
import { toPng } from "html-to-image"; // Import the toPng function

const Download = () => {
  const downloadAsPNG = (divId, fileName) => {
    const divToCapture = document.getElementById(divId);
	divToCapture.style.display = "block";

    toPng(divToCapture) // Use the toPng function
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = fileName + ".png";
        link.click();
		divToCapture.style.display = "none";
      })
      .catch((error) => {
        console.error("Error generating screenshot:", error);
      });
  };

  return (
    <div>
      <button onClick={() => downloadAsPNG("blogStory", "story")}>
        Download Story
      </button>

      <button onClick={() => downloadAsPNG("blogPost", "post")}>
        Download Post
      </button>
    </div>
  );
};

export default Download;
