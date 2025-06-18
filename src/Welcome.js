function Welcome() {
    const isVip = true;

    return (
        <div>
            <h1>Chào bạn đến với khóa học React 30 phút mỗi ngày!</h1>
            <p>Học React thật thú vị!</p>
            <p>{isVip ? "Khách hàng VIP" : "Khách hàng thường"}</p>
        </div>
    );
}

export default Welcome;
  