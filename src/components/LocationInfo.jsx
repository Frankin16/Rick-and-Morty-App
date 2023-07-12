import './styles/LocationInfo.css'
const LocationInfo = ( { location } ) => {

    return (
        <article className='location'>
            <h2 className='location__name'>{location?.name} </h2>
            <ul className='location__list'>
                <li className='location__list-item'><span>Type:</span><span>{location?.type}</span></li>
                <li className='location__list-item'><span>Dimension:</span><span>{location?.dimension}</span></li>
                <li className='location__list-item'><span>Population:</span><span>{location?.residents.length}</span></li>
            </ul>
        </article>
    )
}

export default LocationInfo