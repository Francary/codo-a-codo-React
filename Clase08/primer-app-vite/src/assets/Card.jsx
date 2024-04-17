import "./Card.css"

const Card = ({apellido, nacimiento, clubes, mundial, late}) => {
    return(
        <>
        {/* <h2 style={{backgroundColor:  mundial ? "gold":"silver"}}>{apellido}</h2> */}
        
        <h2 className={mundial ? "gold":"silver"}>{apellido}</h2>
        <span>{nacimiento} </span>
        <ul>
             {clubes.map((club, index) => (
                <li key={index}>{club}</li>
            ))}     
        </ul>
        <p>{clubes}</p>
        <p>{mundial ? "Campeon":"Participante"}</p>
        <p>{late ? "Activo":"Pendiente"}</p>
        </>
    )
}

export default Card