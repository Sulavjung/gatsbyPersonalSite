import React, { useEffect } from "react"
import Prism from "prismjs"
import "../../../../templates/prism.css"
import "prismjs/components/prism-java"

const JavaCodeBlock = (props) => {
	useEffect(() => {
		Prism.highlightAll()
	  }, [])

	const language = `lang-java`;
	return (
		<pre>
        <code className={language}>
          {props.code}
        </code>
      </pre>

	);
}

export default JavaCodeBlock;
