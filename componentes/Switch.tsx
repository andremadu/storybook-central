import { useState } from "react";

interface ToggleSwitchProps {
  label?: string;
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div style={styles.container}>
      {label && <span style={styles.label}>{label}</span>}
      <div style={{ ...styles.switch, backgroundColor: isOn ? "#4caf50" : "#ccc" }} onClick={toggle}>
        <div
          style={{
            ...styles.slider,
            left: isOn ? "calc(100% - 22px)" : "2px",
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Arial, sans-serif",
  },
  label: {
    fontSize: "14px",
    color: "#333",
  },
  switch: {
    width: "50px",
    height: "24px",
    borderRadius: "12px",
    position: "relative" as "relative",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  slider: {
    width: "20px",
    height: "20px",
    background: "white",
    borderRadius: "50%",
    position: "absolute" as "absolute",
    top: "50%", // Centraliza verticalmente
    transform: "translateY(-50%)", // Ajusta o alinhamento para o centro exato
    transition: "left 0.3s",
  },
};

export default ToggleSwitch;
