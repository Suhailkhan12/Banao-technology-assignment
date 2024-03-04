import SignupForm from "../features/authentication/SignupForm";
import "./login.scss";
import Modal from "../ui/Modal";

function NewUsers({ name }) {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <div className="modalopenbutton">{name}</div>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <SignupForm />
      </Modal.Window>
    </Modal>
  );
}

export default NewUsers;
