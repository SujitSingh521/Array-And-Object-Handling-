import React from "react";

function ArrayWithObject() {
  const students = [
    { name: "Sujit", email: "sujit@gmail.com", contact: 55555 },
    { name: "Golu", email: "Golu@gmail.com", contact: 99999 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List and Object Handling</h1>

      <table border="1">
        {students.map((data) => (
          <tr>
            <td>Name is : {data.name}</td>
            <td>Name is : {data.email} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ArrayWithObject;
