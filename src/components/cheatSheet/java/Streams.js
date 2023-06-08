import React from "react";
import JavaCodeBlock from "./helperfunction/javaCodeBlock";

const Streams = () => {
  return (
    <div className="cheatsheetdiv sun">
      <h2 className="tx-sky fw-bold text-center">Streams</h2>

      <h3 className="tx-yellow">Using Streams to process collections:</h3>
      <JavaCodeBlock
        code={`collection.stream().forEach(element -> /* action */);`}
      />

      <h3 className="tx-yellow">Intermediate operations:</h3>
      <JavaCodeBlock
        code={`stream.filter(predicate)   // filters elements based on predicate
      .map(function)       // applies function to each element
      .sorted()            // sorts elements in natural order
      .distinct()          // removes duplicates
      .limit(n)            // limits number of elements to n
      .skip(n)             // skips first n elements`}
      />

      <h3 className="tx-yellow">Terminal Operations:</h3>
      <JavaCodeBlock
        code={`// iterate over each element in stream
stream.forEach(consumer);

// perform a reduction operation on stream elements
stream.reduce(identity, accumulator);

// collect stream elements into a collection
stream.collect(collector);

// find the minimum element in the stream
stream.min(comparator);

// find the maximum element in the stream
stream.max(comparator);

// count the number of elements in the stream
stream.count();

// check if any element matches a given predicate
stream.anyMatch(predicate);

// check if all elements match a given predicate
stream.allMatch(predicate);

// check if no elements match a given predicate
stream.noneMatch(predicate);`}
      />

      <h3 className="tx-yellow">Stream pipelines:</h3>
      <JavaCodeBlock
        code={`collection.stream()
    .filter(element -> /* condition */)
    .map(element -> /* transformation */)
    .forEach(element -> /* action */);`}
      />

      <h3 className="tx-yellow">Parallel streams:</h3>
      <JavaCodeBlock
        code={`collection.parallelStream().forEach(element -> /* action */);`}
      />
	  <br />
      <p>
        Streams provide a powerful and concise way to process collections in
        Java. They allow you to perform operations on elements of a collection
        such as filtering, mapping, sorting, and more. Intermediate operations
        transform the stream, while terminal operations produce a result or
        side-effect. Stream pipelines consist of a sequence of operations
        applied to a collection. Parallel streams enable concurrent processing
        of elements, potentially improving performance. Utilize streams to
        write clean and efficient code when working with collections in Java.
      </p>
    </div>
  );
};

export default Streams;
