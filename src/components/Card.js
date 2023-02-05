import '../styles/Styles.css'

function Card ({data}) {
    return (
        <div className='centered'>
            <div className="card">
                <img src={data.img} alt="Avatar" style={{width:'100%'}}></img>
                <div className="container">
                    <h4><b>Name: {data.name}</b></h4>
                    <p>Post: {data.post}</p>
                    <p>Constact: {data.constact}</p>
                </div>
            </div>
        </div>
    )
}

export default Card