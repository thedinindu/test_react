import Card from './Card'
import '../styles/Styles.css'

const obj = [
    {
        img:'https://picsum.photos/id/237/200/200',
        name:'Dilmin',
        post:'SE',
        constact:'9340942850'
    },
    {
        img:'https://picsum.photos/id/238/200/200',
        name:'Saja',
        post:'SE',
        constact:'9340942850'
    },
    {
        img:'https://picsum.photos/id/239/200/200',
        name:'Chamod',
        post:'SE',
        constact:'9340942850'
    }
]

function Body() {
    return (
        <>
            <div className='parent'>
                {obj.map(item => (
                    <Card key={item.name} data={item}/>   
                ))}
            </div>
        </>
    )
}

export default Body