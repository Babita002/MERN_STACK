function Student(parameter) {
  return (
    <div>
      <h2>Student Details</h2>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{parameter.name}</td>
            <td>{parameter.age}</td>
            <td>{parameter.rollNumber}</td>
          </tr>
          <tr>
            <td>{parameter.name2}</td>
            <td>{parameter.age2}</td>
            <td>{parameter.rollNumber2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Student;
