import React from "react"
import QuoteBlock from "./helperfunction/quoteBlock"

const Copyright = () => {
  return (
    <div className="cheatsheetdiv teal">
      <p className="warning quote-div quoteBlock">
        This cheat sheet is the intellectual property of{" "}
        <code>Sulav Jung Hamal</code>. All rights reserved. The reproduction,
        distribution, and sale of this cheat sheet, in whole or in part, is
        strictly prohibited without the prior written consent of{" "}
        <code>Sulav Jung Hamal</code>. This cheat sheet is provided as-is and
        makes no representations or warranties of any kind concerning the
        contents hereof.
      </p>
      <p className="note quote-div quoteBlock">
        This cheat sheet is intended for educational and quick reference
        purposes only. In order to fully understand the concepts of the Java
        language, it is recommended to consult books or other comprehensive
        resources.
      </p>
      <p className="tips quote-div quoteBlock">
        Keep this cheat sheet handy and use it to quickly reference concepts. As
        you go through the content, create a mind map to connect the actual
        concepts to where they are in the cheat sheet. This will allow for quick
        recall.
      </p>
      <p className="fewmore quote-div quoteBlock">
        <li>
          It is important to note that programming is a constantly evolving
          field, and Java is no exception. This cheatsheet may not be up-to-date
          with the latest Java versions, and it is recommended to refer to the
          official Java documentation for the most accurate and up-to-date
          information.
        </li>
        <li> If you find anything wrong in this file, please contact me. </li>
      </p>
      <p className="whoAmI quote-div quoteBlock">
        Hey there! My name is <code>Sulav Jung Hamal</code> 💻, and I'm a
        computer science student at SFSU 🎓. You can find more information about
        me in my website 🌐: <a className="bordered rounded px-2 bg-info text-light py-1" href="http://sulavhamal.com">sulavhamal.com</a>
      </p>
    </div>
  )
}

export default Copyright
