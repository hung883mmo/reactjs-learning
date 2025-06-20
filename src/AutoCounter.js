import { useState, useEffect, useRef } from "react";

function AutoCounter() {
  const [dem, setDem] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDem(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  function stopAuto() {
    clearInterval(timerRef.current);
  }

  return (
    <div>
      <label>
        Số đếm: <input type="number" value={dem} readOnly />
      </label>
      <button onClick={stopAuto}>Dừng</button>
    </div>
  );
}

export default AutoCounter;
