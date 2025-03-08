import MainButton from "../../../components/UI/MainButton";
import SeconderyButton from "../../../components/UI/SeconderyButton";
import MainAnimation from "./MainAnimation";
import MainSentence from "./MainSentence";

const SecondSection: React.FC = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("explanations");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    console.log("scrolling to explanations " + targetSection);
  };

  return (
    <div className="second-section" style={styles.section}>
      <div style={styles.rightSection}>
        <div style={styles.buttonsContainer}>
          <MainButton text="התחל עכשיו" />
          <SeconderyButton text="גלה עוד" onClick={scrollToSection} />
        </div>
        <MainSentence />
      </div>

      <div style={styles.leftSection}>
        <MainAnimation />
      </div>
    </div>
  );
};

const styles = {
  section: {
    direction: "rtl" as const,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "50px",
    paddingTop: "0px",
    gap: "20px",
    boxSizing: "border-box" as const,
    margin: "0px",
  },

  rightSection: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex",
    maxWidth: "60%", // נותן יותר מקום לצד ימין
  },

  buttonsContainer: {
    display: "flex",
    gap: "16px",
    width: "100%",
    justifyContent: "flex",
  },

  leftSection: {
    display: "flex", // מתאים את גודל ה-div לגודל האנימציה
    justifyContent: "flex-start", // ממקם את התוכן בצד שמאל
    alignItems: "center", // יישור אנכי
    width: "40%", // מצמצם את המקום של החלק השמאלי
    transform: "translateX(-20px)", // מזיז את החלק השמאלי שמאלה
    boxSizing: "border-box" as const,
  },
};

export default SecondSection;
