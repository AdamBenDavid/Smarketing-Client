import HeroSection from "./Hero Section/HeroSection";
import SecondSection from "./Second Section/SecondSection";

const Page: React.FC = ({}) => {
  return (
    <div style={styles} className="page">
      <HeroSection />
      <SecondSection />
    </div>
  );
};

const styles = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#F0F3FA",
  alignItems: "center" as const,
  //without margin or padding
  margin: "0px",
  padding: "0px",

  display: "flex",
  flexDirection: "column" as const,

  gap: "80px",
};

export default Page;
