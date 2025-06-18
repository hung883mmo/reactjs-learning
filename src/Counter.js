import { useState } from "react";

function Counter() {
    const [dem, setDem] = useState(0);

    function tangDem() {
        return setDem(dem + 1);
    }
    
    function giamDem() {
        return setDem(dem - 1);
    }

    return (
        <div>
            <h3>Tăng/Giảm số đếm</h3>
            <p>Bạn đã nhấn: {dem ?? 0} lần</p>
            <button onClick={giamDem}>Nhấn -1</button>
            <button onClick={tangDem}>Nhấn +1</button>
        </div>
    );
}

export default Counter;