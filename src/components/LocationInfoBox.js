

const LocationInfoBox = ({ info }) => {
    return (
        <div className='location-info'>
            <h2>Fire Location Info</h2>
            <ul>
                <li>ID: <strong>{info.id}</strong></li>
                <li>TITLE: <strong>{info.title}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
