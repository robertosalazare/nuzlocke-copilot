import { useState } from "react";
import { AddEditPokemonModal } from "./AddEditPokemonModal";

export const TeamComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="card team-content">
        <div className="card-header">
          <h3>Team</h3>
          <button className="button success" onClick={() => setIsOpen(true)}>Add pokemon</button>
        </div>
        <div className="card-body"></div>
      </div>
      <AddEditPokemonModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};
