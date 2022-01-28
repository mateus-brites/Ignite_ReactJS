import { useState } from 'react'

export function COunter() {

    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 2)
    }

    return (
        <div>
            <h2>{counter}</h2>

            <button type="button" onClick={increment}>increment+2</button>
        </div>
    )
}