import "./useavatar.scss";
import { useUser } from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  console.log("useAvatar", user);

  const { fullName, full_name, avatar } = user.user_metadata;

  return (
    <div className="containeravatar">
      <img
        className="avatar"
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName || full_name}`}
      />
      <span>{fullName || full_name}</span>
    </div>
  );
}

export default UserAvatar;
