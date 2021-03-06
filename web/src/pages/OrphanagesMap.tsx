import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight, FiPlus} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap(){
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Petropólis</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>
      <Map center={[-22.5126683,-43.1844011]}
                 zoom={15}
                 style={{ width: '100%', height: '100%'}}>
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
                <Marker
                  position={[-22.5126683,-43.1844011]}
                  icon={mapIcon}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup ">
                    Lar das Meninas
                    <Link to="/orphanages/1">
                      <FiArrowRight size={20} color="#fff" />
                    </Link>
                  </Popup>
                </Marker>
      </Map>
      <Link to="/orphanages/create" className="create-orphanages">
        <FiPlus size={32} color="#fff"/>
      </Link>
    </div>
    
    );
}

export default OrphanagesMap;