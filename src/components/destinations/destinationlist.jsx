import { useState, forwardRef } from "react";
import destinations from "../../data/destinations";
import DestinationCard from "./destinationcard";
import Modal from "../modal/modal";
import "./destination.css";



const DestinationList = forwardRef((props, ref) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="destinations" ref={ref}>
      <h2>Popular Destinations</h2>
      <div className="grid">
        {destinations.map((place) => (
          <DestinationCard key={place.id} place={place} onSelect={setSelected} />
        ))}
      </div>
      {selected && <Modal place={selected} close={() => setSelected(null)} />}
    </section>
  );
});

export default DestinationList;