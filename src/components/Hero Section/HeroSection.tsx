import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import ProfileIcon from "./ProfileIcon";

const HeroSection: React.FC = ({}) => {
  return (
    <div style={styles.container} className="hero-section">
      <ProfileIcon />
      <HeaderMenu />
      <Logo />
    </div>
  );
};

const styles = {
  container: {
    margin: "0px",
    width: "100vw",
    display: "flex",
    flexDirection: "row-reverse" as const,
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxSizing: "border-box" as const,
  },
};

export default HeroSection;
