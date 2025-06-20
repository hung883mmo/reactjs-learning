// Tạo component Stopwatch.js:
// Có 2 nút: Bắt đầu và Dừng
// Khi nhấn Bắt đầu: số giây sẽ tăng mỗi 1 giây
// Khi nhấn Dừng: dừng tăng
// Dùng useRef để lưu ID của setInterval
// Dùng useState để hiển thị số giây
import { useState, useEffect, useRef } from "react";

function Stopwatch() {
    const [dem, setDem] = useState(0);
    const [auto, setAuto] = useState('stop');
    const timerRef = useRef(null);

    useEffect(() => {
        if (auto === 'start') {
          timerRef.current = setInterval(() => {
            setDem(prev => prev + 1);
          }, 1000);
        }
      
        return () => clearInterval(timerRef.current); // cleanup bất cứ khi nào effect chạy lại hoặc unmount
    }, [auto]);

    function startDem() {
        setAuto('start');
    }
    
    function stopDem() {
        setAuto('stop');
    }

    function resetDem() {
        setAuto('stop');
        setDem(0);
    }

    return (
        <div>
            <div className="stopwatch-container">
                <h3>Component Stopwatch</h3>
                <p>Counter: {dem}</p>
            </div>
            <div className="stopwatch-buttons">
                <button onClick={startDem}>Bắt đầu</button>
                <button onClick={stopDem}>Dừng</button>
                <button onClick={resetDem}>Khởi tạo lại</button>
            </div>
        </div>
    );
}

export default Stopwatch;