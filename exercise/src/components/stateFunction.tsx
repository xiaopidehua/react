import React, { useState, useEffect } from 'react'

function StateFunction() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count + ''
    })

    return <div onClick={() => {setCount(count + 1)}}>{count}</div>
}

export default StateFunction