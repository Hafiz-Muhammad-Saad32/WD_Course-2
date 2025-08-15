import { useState } from "react";

function Counter() {
    let [number, setNumber] = useState(0);
    function increment() {
        setNumber(number + 1);
    }
    function decrement() {
        if (number === 0) {
            return;
        } else {
            setNumber(number - 1);

        }
    }
    function increment5() {
        setNumber(number + 5);
    }
    function decrement5() {
        if (number <= 4) {
            return;
        } else {
            setNumber(number - 5);

        }
    }

    function reset() {
        setNumber(0);
    }
    return (
        <>
            <div className="main">
                <h1>Counter App </h1>
                <h1 className="counter-display">{number}</h1>                   
                <div className="upper-btn">
                    <button className="decrement" onClick={decrement}>-</button>
                    <button className="reset" onClick={reset}>Reset</button>
                    <button className="increment" onClick={increment}>+</button>
                </div>
                <div className="lower-btn">
                    <button className="decrement5" onClick={decrement5}>-5</button>
                    <button className="increment5" onClick={increment5}>+5</button>
                </div>
            </div>
        </>
    )
}
export default Counter;
