import GoogleMapReact from 'google-map-react'

import LocationMarker from './LocationMarker'

require('dotenv').config();


const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 38.438332, 
        lng: -121.381943
    },
    zoom: 8
}

export default Map
