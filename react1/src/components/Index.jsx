import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>Navigation</h1>
      <Link to="/cart"><h4>1. Cart Table</h4></Link>
      <Link to="/contact"><h4>2. Contact Card</h4></Link>
      <Link to="/employeeData"><h4>3. Employee Data</h4></Link>
      <Link to="/studentData"><h4>4. Student Data</h4></Link>
      <Link to="/productcard"><h4>5. Product Card</h4></Link>
      <Link to="/weather"><h4>6. Weather</h4></Link>
      <Link to="/zomato"><h4>7. Zomato Data</h4></Link>
      <Link to="/intro"><h4>8. My Intro</h4></Link>
      <Link to="/div"><h4>9. Div</h4></Link>
      <Link to="/employee"><h4>10. Employee</h4></Link>
      <Link to="/student"><h4>11. Student</h4></Link>


    </>
  );
}
