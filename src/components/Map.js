import GoogleMapReact from 'google-map-react';

require('dotenv').config();


const Map = ({ center, zoom }) => {
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 38.438332, 
        lng: -121.381943
    },
    zoom: 6
}

export default Map
