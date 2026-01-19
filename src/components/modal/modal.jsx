import "./modal.css";

export default function Modal({ place, close }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <img src={place.image} alt={place.name} className="modal-image" />

        <h2>{place.name}</h2>
        <p><strong>Activities:</strong> {place.activities}</p>
        <p><strong>Best Time:</strong> {place.bestTime}</p>

        <button onClick={close}>Close</button>
      </div>
    </div>
  );
}
