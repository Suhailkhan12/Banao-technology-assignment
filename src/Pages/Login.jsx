import "./login.scss";
import LoginForm from "../features/authentication/LoginForm";
import Modal from "../ui/Modal";

function Login({ name }) {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <div className="modalopenbutton">{name}</div>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <LoginForm />
      </Modal.Window>
    </Modal>
  );
}

export default Login;
