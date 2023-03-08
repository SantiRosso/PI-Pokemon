// import { useModal } from "../../Hooks/useModal"
//components
import Modal from "./Modal"
// import Button from "../Button/Button"
//images
import soon from "../Home/images/soon.jpeg" 

const CreatePokemonModal = ({isOpen, closeModal}) => {
    // const [isOpenModal1, OpenModal1, closeModal1] = useModal(false)

    return(
        <div>
            {/* <Button name="Create Pokemon" click={OpenModal1}/> */}
            <Modal isOpen={isOpen} closeModal={closeModal}>
                <div className="modal-content">
                    <h1>Create Pokemon</h1>
                    <img src={soon} alt="Pokedex" />
                </div>
            </Modal>
        </div>
    )
}

export default CreatePokemonModal;