import '../styles/Styles.css'
import React from 'react'

function State3 () {

    const [items, setItems] = React.useState([])
    const [input, setInput] = React.useState('')

    function addItems () {
        if(items.length < 5) {
            setItems(prevArray => [...prevArray, input])
        }
    }

    return (
        <>
            <div className='state3--header'>
                <div className='state3--body'>
                    <div className="buttonIn">
                        <input type="text" id="enter" onInput={e => setInput(e.target.value)}></input>
                        <button className="add" onClick={addItems} disabled={!input}>Add</button>
                    </div>
                    <div className='state3--items'>
                        <ul>
                            {items.map(item => <li key={Math.random()}>{item}</li>)} 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default State3