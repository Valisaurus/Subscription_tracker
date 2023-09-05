import { styled } from "styled-components";

type LightSwitchProps = {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightSwitch = ({ lightMode, setLightMode }: LightSwitchProps) => {
  const StyledButton = styled.button`
    background-color: ${lightMode ? "rgb(200 10% 9%)" : "200 10% 91%"};
    color: ${lightMode ? "black" : "white"};
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 100px;
    height: 40px;
  `;
  return (
    <StyledButton
      onClick={() => {
        setLightMode(!lightMode);
        console.log(lightMode);
      }}
    >
      Light / Dark
    </StyledButton>
  );
};

export default LightSwitch;
