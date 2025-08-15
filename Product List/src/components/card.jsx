
export function Card({ product }) {
  const { name, price, currency, description, brand, stock, rating, imageURL } = product;

  return (
    <div className="main">
      <div className="product-card">
        <div className="product-image">
          <img src={imageURL} alt={name} />
        </div>
        <div className="product-content">
          <h2 className="product-name">{name}</h2>
          <p className="product-brand">Brand: <span>{brand}</span></p>
          <p className="product-desc">{description}</p>
          <div className="product-price">
            <span>{price} {currency}</span>
          </div>
          <div className="product-rating">
            ⭐ {rating}
          </div>
          <div className="product-stock">
            Stock: <span>{stock}</span>
          </div>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
