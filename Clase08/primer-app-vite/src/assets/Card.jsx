import "./Card.css"

const Card = ({apellido, nacimiento, clubes, mundial, late}) => {
    return(
        <>
        {/* <h2 style={{backgroundColor:  mundial ? "gold":"silver"}}>{apellido}</h2> */}
        
        <h2 className={mundial ? "gold":"silver"}>{apellido}</h2>
        <span>Nacimiento: {nacimiento} </span>
        <p>Equipos:</p>
        <ul>
             {clubes.map((club, index) => (
                <li key={index}>{club}</li>
            ))}     
        </ul>
        <p>Copa del Mundo: {mundial ? "Campeon":"Participante"}</p>
        <p>{late ? "Activo":"Pendiente"}</p>
        </>
    )
}

export default Card