import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <h2>lat: {lat}</h2>
      <h2>lng: {lng}</h2>
      <button onClick={() => setSearchParams({ lat: 20, lng: 45 })}>
        Change lat and lng
      </button>
    </div>
  );
}

export default Map;
