import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const ClassesAndObjects = () => {
  return (
    <div className="cheatsheetdiv amber">
      <h2 className="tx-sky fw-bold text-center">Classes and Objects</h2>

      <h3 className="tx-yellow">1. Defining Classes:</h3>
      <JavaCodeBlock
        code={`public class ClassName {
    // instance variables
    // constructors
    // methods
}`}
      />

      <h3 className="tx-yellow">2. Creating Objects:</h3>
      <JavaCodeBlock
        code={`ClassName objectName = new ClassName();`}
      />

      <h3 className="tx-yellow">3. Instance Variables and Methods:</h3>
      <JavaCodeBlock
        code={`public class ClassName {
    // instance variables
    data_type variable_name;
 
    // methods
    return_type method_name(parameter_list) {
        // code
    }
}`}
      />

      <h3 className="tx-yellow">4. Constructors:</h3>
      <JavaCodeBlock
        code={`public class ClassName {
    // instance variables
    data_type variable_name;
    
    // constructors
    ClassName(data_type parameter_list) {
        variable_name = parameter_list;
    }
    
    // methods
    return_type method_name(parameter_list) {
        // code
    }
}`}
      />

      <h3 className="tx-yellow">5. Encapsulation:</h3>
      <JavaCodeBlock
        code={`public class ClassName {
    // private instance variables
    private data_type variable_name;
    
    // public getter and setter methods
    public data_type getVariableName() {
        return variable_name;
    }
    public void setVariableName(data_type parameter_list) {
        this.variable_name = parameter_list;
    }
    // methods
    return_type method_name(parameter_list) {
        // code
    }
}`}
      />

      <h3 className="tx-yellow">6. Inheritance:</h3>
      <JavaCodeBlock
        code={`public class ParentClass {
    // instance variables
    // constructors
    // methods
}

public class ChildClass extends ParentClass {
    // additional instance variables
    // additional constructors
    // additional methods
}`}
      />

      <h3 className="tx-yellow">7. Polymorphism:</h3>
      <JavaCodeBlock
        code={`public class ParentClass {
    // methods
    public void methodName() {
        // code
    }
}

public class ChildClass extends ParentClass {
    // override parent method
    @Override
    public void methodName() {
        // code
    }
    
    // overload parent method
    public void methodName(parameter_list) {
        // code
    }
}`}
      />

	  <br/>
      <p>
        Note that these are just the basic syntax for each topic, and there are
        many more features and concepts to explore within each one. So, feel
        free to dive deep into each topic for a better understanding.
      </p>
    </div>
  )
}

export default ClassesAndObjects
