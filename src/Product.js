function Product(props) {
    return (
      <div className="text-left">
        <h3>Tên sản phẩm: {props.name}</h3>
        <p>Giá sản phẩm: {props.price.toLocaleString()} VND</p>
      </div>
    );
}

export default Product;