import { useState } from "react"

export default () => {

    const [counter, setCount] = useState(0)

    const onClick = () => {
        setCount(counter + 1)
    }

    return (
        <button onClick={onClick}>
            {counter}
        </button>
    )
}