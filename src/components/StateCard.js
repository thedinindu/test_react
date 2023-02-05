import '../styles/Styles.css'
import Cat from '../images/cat.jpg'
import StarEmpty from '../images/star-empty.png'
import StarGold from '../images/star-gold.png'
import React from 'react'

function StateCard () {
    const [contact, setContact] = React.useState({
        name: 'John Doe',
        age: 28,
        phone: '0711998345',
        isFav: false
    })

    function toggleSwitch () {
        setContact(prevState => {
            return {
                ...prevState,
                isFav: !prevState.isFav
            }
        })
    }

    return (
        <>
            <div className='stateCard--header'>
                <div className='stateCard--body'>
                    <img src={Cat} alt="Avatar" className='cat--image'></img>
                    <div className='stateCard--details'>
                        <img src={contact.isFav ? StarGold : StarEmpty} alt='rate' className='rate--card' onClick={toggleSwitch}></img>
                        <h4>Name : {contact.name}</h4>
                        <p>Age : {contact.age}</p>
                        <p>Contact : {contact.phone}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StateCard