import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const InterfacesAndAbstractClasses = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">Interfaces and Abstract Classes</h2>

      <h3 className="tx-yellow">1. Defining Interfaces:</h3>
      <JavaCodeBlock
        code={`public interface InterfaceName {
    // method signatures
}`}
      />

      <h3 className="tx-yellow">2. Implementing Interfaces:</h3>
      <JavaCodeBlock
        code={`public class ClassName implements InterfaceName {
    // method implementations
}`}
      />

      <h3 className="tx-yellow">3. Abstract Classes:</h3>
      <JavaCodeBlock
        code={`public abstract class ClassName {
    // instance variables
    // constructors
    
    // abstract method(s)
    public abstract returnType methodName(parameter_list);
    
    // concrete method(s)
    public void methodName(parameter_list) {
        // code
    }
}`}
      />

      <h3 className="tx-yellow">4. Abstract Methods:</h3>
      <JavaCodeBlock
        code={`// abstract method
public abstract returnType methodName(parameter_list);`}
      />
    </div>
  )
}

export default InterfacesAndAbstractClasses
