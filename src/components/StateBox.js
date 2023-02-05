import '../styles/Styles.css'
import React from 'react'
import Box from './Box.js'

function StateBox () {
    const [square, setSquare] = React.useState(Box)

    const elements = square.map(e => {
        return <div className='box'></div>
    })

    return  (
        <>
            {elements}
        </>
    )
}

export default StateBox