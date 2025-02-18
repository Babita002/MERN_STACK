export default function StudentData() {
  let students = ["Babita", "Gautam", "Simran", "Harman", "Gaggi"];
  return (
    <>
      <h1>Student List</h1>
      <table className="table table-striped" style={{width:"500px"}}>
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

