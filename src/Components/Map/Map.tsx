import { useContext, useEffect, useRef } from "react"
import IPContext from "../../Context/IPContext";

declare var L: any;
function Map() {
    const map = useRef<any>();
    const { searchResult } = useContext(IPContext);
    useEffect(() => {

    }, [])
    useEffect(() => {
        console.log('UPDATE MAP', searchResult);
        // init map
        // setTimeout(() => {
        if (map.current == null) {
            map.current = L.map('map');
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map.current);
        }
        // clear previously set markers
        map.current.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                layer.remove();
            }
        });

        // update view
        map.current.setView([searchResult?.location?.lat || 51.505, searchResult?.location?.lng || -0.09], 13);
        
        // create marker only if there is a result. otherwise do not do it
        if (searchResult?.location?.lat)
            L.marker([searchResult?.location?.lat, searchResult?.location?.lng], 13).addTo(map.current);
    }, [searchResult])

    return (
        <div id="map"></div>
    )
}

export default Map
