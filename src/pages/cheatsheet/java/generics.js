import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const Generics = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">Generics</h2>

      <h3 className="tx-yellow">1. Generic Classes:</h3>
      <JavaCodeBlock
        code={`public class ClassName<T> {
    // T can be used as a type parameter in the class
}`}
      />

      <h3 className="tx-yellow">2. Generic Methods:</h3>
      <JavaCodeBlock
        code={`public <T> void methodName(T parameter) {
    // T can be used as a type parameter in the method
}`}
      />

      <h3 className="tx-yellow">3. Bounded Type Parameters:</h3>
      <JavaCodeBlock
        code={`public <T extends ClassName> void methodName(T parameter) {
    // T must extend ClassName
}`}
      />

      <h3 className="tx-yellow">4. Wildcards:</h3>
      <JavaCodeBlock
        code={`// Upper bounded wildcard
public void methodName(List<? extends ClassName> list) {
    // list can be a List of any subclass of ClassName
}

// Lower bounded wildcard
public void methodName(List<? super ClassName> list) {
    // list can be a List of ClassName or any superclass of ClassName
}`}
      />
	  <br />
      <p>
        Generics are a way to make your code more flexible and reusable by
        allowing classes and methods to work with different types. Type
        parameters are denoted by angle brackets and can be used to
        specify the type of a class, method, or variable at compile time.
        Bounded type parameters specify that the type must be a subclass or
        superclass of a given class. Wildcards are used to denote a range of
        types that a generic method or class can accept as input.
      </p>
    </div>
  )
}

export default Generics
