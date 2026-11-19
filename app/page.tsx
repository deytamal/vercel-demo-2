/*
vercel-demo/
└── app/
    ├── page.tsx
    └── layout.tsx
*/

"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 101, name: "Rahul", course: "BCA" },
    { id: 102, name: "Priya", course: "MCA" },
    { id: 103, name: "Kiran", course: "BCA" },
  ];

  return (
    <div style={{ padding: "30px" }}>

      <h1>Student Management System</h1>

      {/* Navigation */}
      <button onClick={() => setPage("home")}>Home</button>{" "}
<button onClick={() => setPage("students")}>Students</button>{" "}
      <button onClick={() => setPage("about")}>About</button>

      <hr />

      {/* Home Page */}
      {page === "home" && (
        <div>
          <h2>Welcome to PES University</h2>
          <p>Welcome to Student Management System.</p>
        </div>
      )}

      {/* Student Page */}
      {page === "students" && (
        <div>
          <h2>Student Records</h2>

          <table border={1} cellPadding={10}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* About Page */}
      {page === "about" && (
        <div>
          <h2>About Us</h2>
          <p>This is a simple TypeScript routing application.</p>
        </div>
      )}

    </div>
  );
}