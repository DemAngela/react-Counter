import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const [oneNumber, setOneNumber] = useState('')
    const [twoNumber, setTwoNumber] = useState('')

    const handleIncrement = () => {
        const result = parseFloat(oneNumber) * parseFloat(twoNumber);
        setCount(result);
    }

    const handleDecrement = () => {
        const result = parseFloat(oneNumber) / parseFloat(twoNumber);
        setCount(result);
    }

    const handleAddition = () => {
        const result = parseFloat(oneNumber) + parseFloat(twoNumber);
        setCount(result);
    }

    const handleSubtraction = () => {
        const result = parseFloat(oneNumber) - parseFloat(twoNumber);
        setCount(result);
    }

    const handleDelete = () => {
        setCount(0)
        setOneNumber('')
        setTwoNumber('')
    }

    return (
        <div className={'counter'}>
            <div className={'countInput'}>
                <input type="number" value={oneNumber} onChange={event => setOneNumber(event.target.value)} />
                <input type="number" value={twoNumber} onChange={event => setTwoNumber(event.target.value)} />
            </div>
            <div className={'countBtn'}>
                <button onClick={handleIncrement}>*</button>
                <button onClick={handleDecrement}>/</button>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
            </div>
            <h2>{count}</h2>
            <button onClick={handleDelete} className={'btnd'}>Delete</button>
        </div>
    )
}

export default Counter