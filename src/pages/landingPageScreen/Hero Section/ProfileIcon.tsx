import profileIcon from "../../../assets/profile.svg";

const ProfileIcon: React.FC = () => {
  return (
    <div>
      <img
        src={profileIcon}
        alt="Profile Icon"
        className="profile"
        style={{ width: "30px" }} // גודל מוגדל
      />
    </div>
  );
};

export default ProfileIcon;
