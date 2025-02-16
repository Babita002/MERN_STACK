import "./App.css";

function App() {
  let students = ["Babita", "Gautam", "Simran", "Harman", "Gaggi"];
  return (
    <>
      <h1>Student List</h1>
      <table border={2}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
