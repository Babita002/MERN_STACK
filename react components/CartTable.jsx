export default function CartTable({ item1, item2 }) {  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item1.name}</td>
            <td>{item1.quantity}</td>
            <td>{item1.price}</td>
          </tr>
          <tr>
            <td>{item2.name}</td>
            <td>{item2.quantity}</td>
            <td>{item2.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

