import { useState } from "react";

function LoginBox() {
    const [ten, setTen] = useState('');

    return (
        <div>
            <input type="text" placeholder="Nhập tên" className="nameUser" onChange={(e) => setTen(e.target.value)} />
            <p>{ten ? `Xin chào, ${ten}` : "Vui lòng nhập tên của bạn"}.</p>
        </div>
    );
}

export default LoginBox;