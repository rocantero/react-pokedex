import React from 'react';
const spinnerStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  position: 'relative',
  margin: '100px auto',
};

const doubleBounceStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: '#333',
  opacity: 0.6,
  position: 'absolute',
  top: 0,
  left: 0,
  animation: 'sk-bounce 2.0s infinite ease-in-out',
};

const doubleBounce2Style: React.CSSProperties = {
  ...doubleBounceStyle,
  animationDelay: '-1.0s',
};

const keyframes = `
@keyframes sk-bounce {
  0%, 100% { transform: scale(0.0) }
  50% { transform: scale(1.0) }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

export default Spinner;