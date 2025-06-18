function BookCard(props) {
    return (
        <div className="text-left">
            <h3>Tên sách: {props.title}</h3>
            <p>Tác giả: {props.author}</p>
            <p>Năm xuất bản: {props.year}</p>
        </div>
    );
}

export default BookCard;