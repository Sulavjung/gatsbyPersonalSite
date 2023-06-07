import React from "react"
import "../index.css"

const DataTypes = () => {
  return (
    <div className="cheatsheetdiv teal small">
      <h3 class="tx-sky text-center fw-bold">Data Types</h3>
      <br />
      <div class="table-container">
        <table class="table table-responsive table-borderless table-">
          <thead class="thead-light">
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Range</th>
              <th>Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>boolean</td>
              <td>1</td>
              <td>true or false</td>
              <td>
                <code>boolean variableName = true/false;</code>
              </td>
            </tr>
            <tr>
              <td>byte</td>
              <td>8</td>
              <td>-128 to 127</td>
              <td>
                <code>byte variableName;</code>
              </td>
            </tr>
            <tr>
              <td>short</td>
              <td>16</td>
              <td>-32,768 to 32,767</td>
              <td>
                <code>short variableName;</code>
              </td>
            </tr>
            <tr>
              <td>int</td>
              <td>32</td>
              <td>-2,147,483,648 to 2,147,483,647</td>
              <td>
                <code>int variableName;</code>
              </td>
            </tr>
            <tr>
              <td>long</td>
              <td>64</td>
              <td>-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
              <td>
                <code>long variableName;</code>
              </td>
            </tr>
            <tr>
              <td>float</td>
              <td>32</td>
              <td>
                Approximately ±3.40282347E+38F (6-7 significant decimal digits)
              </td>
              <td>
                <code>float variableName;</code>
              </td>
            </tr>
            <tr>
              <td>double</td>
              <td>64</td>
              <td>
                Approximately ±1.79769313486231570E+308 (15 significant decimal
                digits)
              </td>
              <td>
                <code>double variableName;</code>
              </td>
            </tr>
            <tr>
              <td>char</td>
              <td>16</td>
              <td>0 to 65,535 (Unicode characters)</td>
              <td>
                <code>char variableName;</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTypes
