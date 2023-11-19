import Prism from "prismjs"
import "prismjs/themes/prism.css"
import "prismjs/components/prism-java"
import "prismjs/components/prism-bash"
import "prismjs/components/prism-jsx"

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
        const contentText = contentElement.join("")

        // Create a modal overlay
        const modalOverlay = document.createElement("div")
        modalOverlay.classList.add("modal-overlay")
        modalOverlay.id = "modal-overlay"

        // Create a new div for additional content
        const additionalContentDiv = document.createElement("div")
        additionalContentDiv.classList.add("additional-content")

        // Create a modal content div
        const modalContent = document.createElement("div")
        modalContent.classList.add("modal-content")

        // Create a close button
        const closeButton = document.createElement("span")
        closeButton.id = "close-button"
        closeButton.textContent = "X"

        // Append the close button to the modal content
        modalContent.appendChild(closeButton)

        // Create a copy of the h3 element
        const h3Copy = h3Element.cloneNode(true)

        // Append the h3 element and content to the modal content
        modalContent.appendChild(h3Copy)
        modalContent.innerHTML += contentText

        // Append the modal content to the additional content div
        additionalContentDiv.appendChild(modalContent)

        // Append the additional content div to the modal overlay
        modalOverlay.appendChild(additionalContentDiv)

        // Append the modal overlay to the body
        document.body.appendChild(modalOverlay)

        // Highlight code using Prism.js after adding elements to the DOM
        Prism.highlightAll()
        // Alternatively, if you want to highlight only specific code block:
        // Prism.highlightElement(modalContent.querySelector('pre code'));

        /* Code to add the Copy button on the preTags.  */
        const preElements = document.getElementsByTagName("pre")

        var buttonHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>`

        if (preElements.length > 0) {
          for (let i = 0; i < preElements.length; i++) {
            const preElement = preElements[i]
            const preElementText = preElement.innerText

            // Create a "Copy" button
            const copyButton = document.createElement("button")
            copyButton.className = "copy-button"

            // Set the button's innerHTML
            copyButton.innerHTML = buttonHtml

            const copiedMessage = document.createElement("p")
            copiedMessage.textContent = "Copied"

            // Add a click event listener to the button
            copyButton.addEventListener("click", () => {
              navigator.clipboard.writeText(preElementText)

              console.log(preElementText)

              copyButton.appendChild(copiedMessage)

              // Hide the "Copied" message and remove it after 5 seconds
              setTimeout(() => {
                copiedMessage.style.display = "none"

                // Check if the "Copied" message is still a child of the button
                if (copiedMessage.parentNode === copyButton) {
                  copyButton.removeChild(copiedMessage)
                }
              }, 3000) // 5000 milliseconds (5 seconds)
            })

            // Append the button to the <pre> element
            preElement.appendChild(copyButton)
          }
        }

        const closeButtonElement = document.getElementById("close-button")
        const modalOverlayExist = document.getElementById("modal-overlay")
        const additionalContentElement = document.querySelector(".additional-content");


        if (closeButtonElement) {
          closeButtonElement.addEventListener("click", function (event) {
            console.log(event)
            const modalOverlay = document.getElementById("modal-overlay")
            if (modalOverlay) {
              modalOverlay.remove() // Remove the modal overlay
            }
          })
        }

        if (modalOverlayExist) {
          modalOverlayExist.addEventListener("click", function (event) {
            console.log(event);
        
            const modalOverlay = document.getElementById("modal-overlay");
        
            // Check if the click occurred on the element with the classname 'additional-content'
            if (additionalContentElement.contains(event.target)) {
              // Do nothing if the click occurred inside the element with the classname 'additional-content'
              return;
            }
        
            // If the click occurred outside modalOverlayExist and outside 'additional-content', remove the modal overlay
            if (modalOverlay) {
              modalOverlay.remove();
            }
          });
        }
        
      }
    })
  })
}

export { extractAndRemoveH3WithContent, onClickOFTheEachQuestion }
