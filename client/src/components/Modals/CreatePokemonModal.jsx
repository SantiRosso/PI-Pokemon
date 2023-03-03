import { useModal } from "../../Hooks/useModal"
import Modal from "./Modal"

const CreatePokemonModal = () => {
    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    return(
        <div>
            <button onClick={OpenModal1}>Create pokemon</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <div className="modal-content">
                    <h1>hola</h1>
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;