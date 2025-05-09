import HeroSection from "./Hero Section/HeroSection";
import SecondSection from "./Second Section/SecondSection";
import Explanations from "./Explanations/Explanations";
import FooterComp from "./components/Footer/FooterClient";
import explainPicture from '../../assets/explainPicture.png';

const LandingPage: React.FC = ({}) => {
  return (
    <div style={styles} className="page">
      <HeroSection />
      <SecondSection />
      <div id="explanations">
        <Explanations
          direction="row"
          Header="About Us"
          imageSource={explainPicture}
          text="אנחנו מחברים חוכמה לשיווק בעולם הדיגיטלי.עם פלטפורמה חדשנית וידידותית, אנחנו מאפשרים לעסקים ליצור דפי נחיתה מותאמים אישית, לנהל קמפיינים בלחיצת כפתור ולצפות בתוצאות בזמן אמת.קל, חכם, ומדויק– כך ההצלחה שלך הופכת למציאות.גלול למטה וגלו איך להפוך כל רעיון להזדמנות מנצחת!"
        />
        <Explanations
          direction="row-reverse"
          Header="Why Us?"
          imageSource={explainPicture}
          text="⚡ מהירות ויעילות- בנו דפי נחיתה והפעילו קמפיינים שיווקיים תוך דקות.✨ פשטות בשימוש- ממשק אינטואיטיבי שמקל עליכם לנהל שיווק דיגיטלי בקלות.📊 תוצאות בזמן אמת- עקבו אחרי נתוני הקמפיינים שלכם וקבלו תובנות לשיפור.🎯 מותאם לצרכים שלכם- פתרון שמתאים לכל תחום עסקי, קטן כגדול."
        />
        <Explanations
          direction="row"
          Header="How It Works"
          imageSource={explainPicture}
          text="תהליך פשוט בשלושה שלבים בלבד! הירשם לפלטפורמה ומלא פרטים, קבל ועצב דף נחיתה מותאם אישית, נהל קמפיינים וצפה בתוצאות"
        />
      </div>
      <FooterComp />
    </div>
  );
};

const styles = {
  width: "100%",
  height: "100%",
  backgroundColor: "#F0F3FA",
  alignItems: "center" as const,
  margin: "0px",
  padding: "0px",

  display: "flex",
  flexDirection: "column" as const,

  gap: "30px",
};

export default LandingPage;
