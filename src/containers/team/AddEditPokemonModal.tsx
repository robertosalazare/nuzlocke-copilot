import { Search } from "components/search";

export const AddEditPokemonModal = ({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => any;
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal add-edit-pokemon active">
      <div className="modal-backdrop"></div>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add pokemon to the team</h3>
        </div>
        <div className="modal-body">
          <Search placeholder="Search pokemon"
            search={() => [
              {
                text: "example text 1",
                id: "id 1",
              },
              {
                text: "example text 2",
                id: "id 2",
              },
              {
                text: "example text 3",
                id: "id 3",
              },
            ]}
            onSelectResult={(r) => console.log(r)}
          />
        </div>
        <div className="modal-footer">
          <button className="button success">Add</button>
          <button className="button" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
