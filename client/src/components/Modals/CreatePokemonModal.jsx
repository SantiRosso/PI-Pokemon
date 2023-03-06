import { useModal } from "../../Hooks/useModal"
//components
import Modal from "./Modal"
import Button from "../Button/Button"

const CreatePokemonModal = () => {
    const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    return(
        <div>
            <Button name="Create Pokemon" click={OpenModal1}/>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <div className="modal-content">
                    <h1>hola</h1>
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;