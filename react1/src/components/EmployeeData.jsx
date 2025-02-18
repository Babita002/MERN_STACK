

export default function EmployeeData() {
  let employee = [
    {
      Name:"Babita",
      Department:"Engg & Tech",
      Salary:"10LPA"
    },
    {
      Name:"Albatross",
      Department:"Environmental Science",
      Salary:"12LPA"
    },
    {
      Name:"Mufy",
      Department:"Dept of Info & Tech",
      Salary:"12LPA"
    }
  ];
  return (
    <div className="main">
    {employee.map((emp,index)=>{
      return(
        <div key={index} style={{width:"250px", height:"200px", background:"green", padding:"20px", marginBottom:"20px",}}>
          <h4>Name: {emp.Name}</h4>
          <h4>Department: {emp.Department}</h4>
          <h4>Salary: {emp.Salary}</h4>
        </div>
      )
    })}
    </div>
  );
}
