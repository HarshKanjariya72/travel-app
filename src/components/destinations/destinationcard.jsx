import "./destination.css"
export default function DestinationCard({ place, onSelect }) {
   
    return (
        <div className="card" onClick={() => onSelect(place)}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.short}</p>
            <button>View More</button>
        </div>
    );
}