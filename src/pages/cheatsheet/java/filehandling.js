import React from "react"
import JavaCodeBlock from "./helperfunction/javaCodeBlock"

const FileHandling = () => {
  return (
    <div className="cheatsheetdiv teal">
      <h2 className="tx-sky fw-bold text-center">File Handling</h2>

      <h3 className="tx-yellow">1. Creating a File Object:</h3>
      <JavaCodeBlock code={`File fileObject = new File("file/path");`} />

      <h3 className="tx-yellow">2. Checking if File exists:</h3>
      <JavaCodeBlock
        code={`if (fileObject.exists()) {
    // file exists
} else {
    // file does not exist
}`}
      />

      <h3 className="tx-yellow">3. Creating a new File:</h3>
      <JavaCodeBlock code={`fileObject.createNewFile();`} />

      <h3 className="tx-yellow">4. Writing to a file:</h3>
      <JavaCodeBlock
        code={`FileWriter writer = new FileWriter(fileObject);
writer.write("Text to be written to file");
writer.close();`}
      />

      <h3 className="tx-yellow">5. Reading from a file:</h3>
      <JavaCodeBlock
        code={`Scanner reader = new Scanner(fileObject);

while (reader.hasNextLine()) {
    // Do something with data
}

reader.close();`}
      />
    </div>
  )
}

export default FileHandling
