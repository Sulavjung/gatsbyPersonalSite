import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const InputAndOutput = () => {

	const output = `System.out.println("Te");
System.out.println(var);`


	const input = `import java.util.Scanner; 
Scanner inputName = new Scanner(System.in);
Type variableName = inputName.next<Type>();
`

  return (
    <div className="cheatsheetdiv rose">
      <h2 className="tx-sky fw-bold text-center">Input and Output</h2>

      <h3 className="tx-yellow">1. Output:</h3>
      <JavaCodeBlock code = {output} />

      <h3 className="tx-yellow">2. Input:</h3>
      <JavaCodeBlock code = {input} />
    </div>
  )
}

export default InputAndOutput
