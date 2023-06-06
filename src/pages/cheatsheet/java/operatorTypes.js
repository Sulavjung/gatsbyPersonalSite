import React from "react"

const OperatorTypes = () => {
  return (
    <div className="cheatsheetdiv sun">
      <h3 className="text-center tx-yellow">Operator Types</h3>
      <br />

      <table>
        <tr>
          <th>Type</th>
          <th>Examples</th>
        </tr>
        <tr>
          <td>Arithmetic</td>
          <td>
            <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>,{" "}
            <code>%</code>
          </td>
        </tr>
        <tr>
          <td>Relational</td>
          <td>
            <code>==</code>, <code>!=</code>, <code>&lt;</code>,{" "}
            <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>
          </td>
        </tr>
        <tr>
          <td>Logical</td>
          <td>
            <code>&amp;&amp;</code>, <code>||</code>, <code>!</code>
          </td>
        </tr>
        <tr>
          <td>Bitwise</td>
          <td>
            <code>&amp;</code>, <code>|</code>, <code>^</code>, <code>~</code>,{" "}
            <code>&lt;&lt;</code>, <code>&gt;&gt;</code>,{" "}
            <code>&gt;&gt;&gt;</code>
          </td>
        </tr>
        <tr>
          <td>Assignment</td>
          <td>
            <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>,{" "}
            <code>/=</code>, <code>%=</code>, <code>&amp;=</code>,{" "}
            <code>|=</code>, <code>^=</code>, <code>&lt;&lt;=</code>,{" "}
            <code>&gt;&gt;=</code>
          </td>
        </tr>
        <tr>
          <td>Conditional</td>
          <td>
            <code>?</code>, <code>:</code>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default OperatorTypes
