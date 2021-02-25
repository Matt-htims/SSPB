import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const lngLat = [-0.256223, 51.5048];

const Map = () => {
	mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'mapContainer',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: lngLat,
			zoom: 13,
		});
		const nav = new mapboxgl.NavigationControl();
		map.addControl(nav, 'top-right');

		const marker = new mapboxgl.Marker({ color: '#EA4335' })
			.setLngLat(lngLat)
			.addTo(map);

		const geolocate = new mapboxgl.GeolocateControl({
			positionOptions: {
				enableHighAccuracy: true,
			},
			trackUserLocation: true,
		});

		map.addControl(geolocate, 'top-right');
	}, []);
	return <div id="mapContainer" className="map"></div>;
};

export default Map;
