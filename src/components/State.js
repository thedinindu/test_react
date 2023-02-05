import '../styles/Styles.css'
import React from 'react'

function State () {
    let [Count, setCount] = React.useState(0)

    function addButton () {
        setCount( prevCount => prevCount + 1 )
    }

    function subButton () {
        if(Count !== 0) {
            setCount( prevCount => prevCount - 1 )
        }
    }

    function numButton () {
        setCount(prevCount => prevCount = 0 )
    }

    return (
        <>
            <div className="state--header">
                <div className="state--body">
                    <div className="wrapper">
                        <span className="minus" onClick={subButton}>-</span>
                        <span className="num" onClick={numButton}>{Count}</span>
                        <span className="plus" onClick={addButton}>+</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default State