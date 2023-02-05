import '../styles/Styles.css'
import React from 'react'

function State2 () {

    const [isTrueFalse, setTrueFalse] = React.useState(true)

    function setStatus () {
        setTrueFalse( prevState => !prevState)

        // expanded version of the above anonymous function
        // if (isTrueFalse) {
        //     setTrueFalse(false)
        // } else {
        //     setTrueFalse(true)
        // }
    }

    return (
        <>
            <div className='state2--header'>
                <div className='state2--body'>
                    <div className="state2-wrapper">
                        <span className="state2--YesNo" onClick={setStatus}>{isTrueFalse ? 'Yes!' : 'No!'}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default State2