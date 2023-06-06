import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const ExceptionHandling = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">Exception Handling</h2>

      <h3 className="tx-yellow">1. Try-Catch Blocks:</h3>
      <JavaCodeBlock
        code={`try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // code to handle the exception
} finally {
    // optional code to execute after try/catch block
}`}
      />

      <h3 className="tx-yellow">2. Throwing and Catching Exceptions:</h3>
      <JavaCodeBlock
        code={`// throwing an exception
throw new ExceptionType("Exception message");

// catching an exception
try {
    // code that might throw an exception
} catch (ExceptionType e) {
    // code to handle the exception
}`}
      />

      <h3 className="tx-yellow">3. Checked and Unchecked Exception:</h3>
      <JavaCodeBlock
        code={`// checked exception
public void methodName() throws ExceptionType {
    // code that might throw an exception
}

// unchecked exception
public void methodName() {
    // code that might throw an exception
    throw new ExceptionType("Exception message");
}`}
      />

		<br />
      <p>
        Note: Exception handling is a mechanism in Java for dealing with
        runtime errors and exceptional situations. The "try-catch" block is
        used to catch and handle exceptions. Exceptions can also be thrown
        manually using the "throw" keyword. Checked exceptions must be declared
        or caught, while unchecked exceptions do not require handling.
      </p>
    </div>
  )
}

export default ExceptionHandling
