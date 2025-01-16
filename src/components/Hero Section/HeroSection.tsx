import Logo from "../Logo";
import HeaderMenu from "./HeaderMenu";
import ProfileIcon from "./ProfileIcon";

const HeroSection: React.FC = () => {
  return (
    <div style={styles.container} className="hero-section">
      {/* לוגו בצד ימין */}
      <Logo size="300px" />

      {/* תפריט במרכז */}
      <div style={styles.headerMenuWrapper}>
        <HeaderMenu />
      </div>

      {/* אייקון פרופיל בצד שמאל */}
      <ProfileIcon />
    </div>
  );
};

const styles = {
  container: {
    margin: "0px",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // מבטיח מרחק בין האלמנטים
    padding: "0 20px",
    boxSizing: "border-box" as const,
  },
  headerMenuWrapper: {
    position: "absolute" as const, // ממקם את HeaderMenu במיקום קבוע
    left: "50%", // ממרכז אופקית
    transform: "translateX(-50%)", // מוודא שהמרכז הוא בדיוק במרכז המסך
  },
};

export default HeroSection;
