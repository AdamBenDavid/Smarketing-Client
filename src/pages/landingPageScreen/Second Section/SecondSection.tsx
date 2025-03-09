import MainButton from "../../../components/UI/MainButton";
import SeconderyButton from "../../../components/UI/SeconderyButton";
import MainAnimation from "./MainAnimation";
import MainSentence from "./MainSentence";
import { sendImageToGemini } from "../../../services/gemini_service";
import { useState } from "react";

const SecondSection: React.FC = () => {
  let imagePath = "src/assets/picture-lake1.jpeg";
  const handleSendImage = async () => {
    console.log("second section on click");
    try {
      const base64Image = await convertImageToBase64(imagePath);
      if (!base64Image) return;

      const response = await sendImageToGemini(base64Image);
    } catch (error) {
      console.error("שגיאה בשליחת התמונה:", error);
    }
  };

  // המרת תמונה ל-Base64 (משתמש ב-Fetch)
  const convertImageToBase64 = async (
    imageUrl: string
  ): Promise<string | null> => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("שגיאה בהמרת תמונה ל-Base64:", error);
      return null;
    }
  };

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
          <MainButton text="התחל עכשיו" onClick={handleSendImage} />
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
