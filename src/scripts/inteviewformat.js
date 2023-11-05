function extractAndRemoveH3WithContent() {
  const h3Elements = document.getElementsByTagName("h3")
  const contentObject = {}

  for (let i = 0; i < h3Elements.length; i++) {
    const h3 = h3Elements[i]
    const nextElements = []
    const h3Content = h3.textContent // Get the h3 content

    let currentNode = h3.nextElementSibling

    while (currentNode && currentNode.tagName !== "H3") {
      if (currentNode.nodeType === Node.ELEMENT_NODE) {
        nextElements.push(currentNode)
        currentNode.remove() // Remove the element
      }
      currentNode = h3.nextElementSibling
    }

    contentObject[h3Content] = nextElements.map(element => element.outerHTML)
  }

  // Log the object containing h3 as keys and content as values
  console.log(contentObject)

  return contentObject
}


function onClickOFTheEachQuestion(content) {
  const liElements = document.getElementById("interview").querySelectorAll("li")

  liElements.forEach(li => {
    li.addEventListener("click", function (event) {
      const clickedLi = event.currentTarget // Use 'currentTarget' to refer to the clicked 'li'
      const h3Element = clickedLi.querySelector("h3")

      console.log("Clicked h3:", h3Element.textContent)
      console.log(content)

      // Find the content associated with the clicked h3
      const contentElement = content[h3Element.textContent]

      if (contentElement) {
		// Remove the commas in the contentElement array
		const contentText = contentElement.join("");
	  
		// Create a modal overlay
		const modalOverlay = document.createElement("div");
		modalOverlay.classList.add("modal-overlay");
		modalOverlay.id = "modal-overlay";
	  
		// Create a new div for additional content
		const additionalContentDiv = document.createElement("div");
		additionalContentDiv.classList.add("additional-content");
	  
		// Create a modal content div
		const modalContent = document.createElement("div");
		modalContent.classList.add("modal-content");
	  
		// Create a close button
		const closeButton = document.createElement("span");
		closeButton.id = "close-button";
		closeButton.textContent = "X";
	  
		// Append the close button to the modal content
		modalContent.appendChild(closeButton);
	  
		// Create a copy of the h3 element
		const h3Copy = h3Element.cloneNode(true);
	  
		// Append the h3 element and content to the modal content
		modalContent.appendChild(h3Copy);
		modalContent.innerHTML += contentText;
	  
		// Append the modal content to the additional content div
		additionalContentDiv.appendChild(modalContent);
	  
		// Append the additional content div to the modal overlay
		modalOverlay.appendChild(additionalContentDiv);
	  
		// Append the modal overlay to the body
		document.body.appendChild(modalOverlay);
	  
		const closeButtonElement = document.getElementById("close-button");

		const modalOverlayExist = document.getElementById("modal-overlay");
	  
		if (closeButtonElement) {
		  closeButtonElement.addEventListener("click", function (event) {
			console.log(event);
			const modalOverlay = document.getElementById("modal-overlay");
			if (modalOverlay) {
			  modalOverlay.remove(); // Remove the modal overlay
			}
		  });
		}

		if(modalOverlayExist){
			modalOverlayExist.addEventListener("click", function (event) {
				console.log(event);
				const modalOverlay = document.getElementById("modal-overlay");
				if (modalOverlay) {
				  modalOverlay.remove(); // Remove the modal overlay
				}
			  });
		}
	  }
    })
  })
}

module.exports = {
  extractAndRemoveH3WithContent,
  onClickOFTheEachQuestion,

}
