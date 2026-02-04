import nodeGeoCoder from "node-geocoder";

const options = {
    provider: 'openstreetmap',
    formatter: null //nul return json
}

const geoCoder = nodeGeoCoder(options);

export default geoCoder;