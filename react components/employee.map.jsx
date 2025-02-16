import "./App.css";

function App() {
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
        <div key={index} id="employee">
          <h4>Name: {emp.Name}</h4>
          <h4>Department: {emp.Department}</h4>
          <h4>Salary: {emp.Salary}</h4>
        </div>
      )
    })}
    </div>
  );
}

export default App;
