import GoogleMapReact from 'google-map-react';
import './Map.scss';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 55.457,
      lng: 37.36,
    },
    zoom: 5,
  };

  return (
    <div className="main__map">
      <h2 className="main__map-title">
        Здесь вы сможете найти расположение офисов в любой точке России:
      </h2>
      <div className="main__map-body">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
