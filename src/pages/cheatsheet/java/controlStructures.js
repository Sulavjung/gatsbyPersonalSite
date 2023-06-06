import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const ControlStructures = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">Control Structures</h2>

      <h3 className="tx-yellow">1. if-else statement:</h3>
      <JavaCodeBlock
        code={`if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}`}
      />

      <h3 className="tx-yellow">2. switch statement:</h3>
      <JavaCodeBlock
        code={`switch (expression) {
    case value1:
        // expression
        break;
    case value2:
        // expression
        break;
    default:
        // expression
        break;
}`}
      />

      <h3 className="tx-yellow">3. for loop:</h3>
      <JavaCodeBlock
        code={`for (initialization; condition; increment/decrement) {
    // code
}`}
      />

      <h3 className="tx-yellow">4. while loop:</h3>
      <JavaCodeBlock
        code={`while (condition) {
    // code
}`}
      />

      <h3 className="tx-yellow">5. do-while loop:</h3>
      <JavaCodeBlock
        code={`do {
    // code
} while (condition);`}
      />

      <h3 className="tx-yellow">6. for-each loop:</h3>
      <JavaCodeBlock
        code={`for (data_type variable_name : array/collection) {
    // code
}`}
      />

      <br />

      <p>
        Note: Control structures are constructs used in computer programming to
        control the flow of execution of a program based on certain conditions
        or criteria. They are used to dictate the order in which statements or
        instructions are executed, as well as to determine the number of times
        a particular set of statements or instructions should be executed.
      </p>
    </div>
  )
}

export default ControlStructures
