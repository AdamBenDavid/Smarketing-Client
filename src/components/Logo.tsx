const Logo: React.FC = ({}) => {
  return (
    <div>
      <img
        style={styles}
        src="src/assets/Smarketing.png"
        alt="Smarketing Logo"
        className="logo"
      />
    </div>
  );
};

const styles = {
  width: "300px",
  flexShrink: "0",
};

export default Logo;
