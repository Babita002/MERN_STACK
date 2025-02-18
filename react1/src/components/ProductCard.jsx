export default function ProductCard({ name, price, description }) {
  return (
    <div className="bg-warning p-5 rounded">
      <h4>Name of product: {name} </h4>
      <h4>Price of product: {price} </h4>
      <h4>Description of product: {description} </h4>
    </div>
  );
}
