export default function ContactCard(props){
    return(
  
  <div style={{border: "2px solid black",padding:"20px",background:"pink",boxShadow:"0 10px 15px" }}>
            <h2>Employee {props.id}</h2>
            <h4>Name: {props.name} </h4>
            <h4>Phone No: {props.phone} </h4>
            <h4>Email: {props.email} </h4>
        </div>
    )
}
