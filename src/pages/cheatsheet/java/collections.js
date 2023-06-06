import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const Collections = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">Collections</h2>

      <h3 className="tx-yellow">1. ArrayList:</h3>
      <JavaCodeBlock
        code={`ArrayList<Type> listName = new ArrayList<Type>();`}
      />

      <h3 className="tx-yellow">2. LinkedList:</h3>
      <JavaCodeBlock
        code={`LinkedList<Type> listName = new LinkedList<Type>();`}
      />

      <h3 className="tx-yellow">3. HashMap:</h3>
      <JavaCodeBlock
        code={`HashMap<KeyType, ValueType> mapName = new HashMap<KeyType, ValueType>();`}
      />

      <h3 className="tx-yellow">4. HashSet:</h3>
      <JavaCodeBlock
        code={`HashSet<Type> setName = new HashSet<Type>();`}
      />

      <h3 className="tx-yellow">5. TreeSet:</h3>
      <JavaCodeBlock
        code={`TreeSet<Type> setName = new TreeSet<Type>();`}
      />

      <h3 className="tx-yellow">6. Sorting Collections:</h3>
      <JavaCodeBlock
        code={`// Sorting an ArrayList
Collections.sort(listName);

// Sorting a LinkedList
Collections.sort(listName);

// For TreeSet - The elements must implement the Comparable interface`}
      />

      <h3 className="tx-yellow">7. Iterating Over Collections:</h3>
      <JavaCodeBlock
        code={`// Using a for-each loop
for (Type element : collectionName) {
    // code to execute for each element
}

// Using an iterator
Iterator<Type> iteratorName = collectionName.iterator();
while (iteratorName.hasNext()) {
    Type element = iteratorName.next();
    // code to execute for each element
}`}
      />
	  <br />
      <p>
        Collections in Java provide a way to store and manipulate groups of
        objects. Here are some commonly used collection classes and techniques
        for working with them. An ArrayList is a dynamic array-based
        implementation, while a LinkedList is a doubly-linked list. HashMap is
        a key-value mapping, HashSet stores unique elements in no particular
        order, and TreeSet stores elements in sorted order. Collections can be
        sorted using the sort() method from the Collections class. Iteration
        over collections can be done using for-each loops or iterators.
      </p>
    </div>
  )
}

export default Collections
