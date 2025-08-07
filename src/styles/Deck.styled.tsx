import { styled } from '@mui/material/styles';

export const DeckWrapper = styled('div')`
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-bottom: hidden;
  padding: 1rem;
  box-sizing: border-box;
`;

export const DeckTitle = styled('div')`
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 25px;
    color: #fff;
    pointer-events: none;
`;

export const CardWrapper = styled('div')`
  position: absolute;
  width: 120px;
  height: 250px;
  transform-origin: center bottom;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);;
  

  &.orbit {
    animation: orbitAnim 1.4s ease-in-out forwards;
  }

  @keyframes orbitAnim {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    25% {
      transform: translate(30px, -60px) rotate(45deg) scale(1.05);
    }
    75% {
      transform: translate(-30px, 60px) rotate(-45deg) scale(1.05);
    }
    100% {
      transform: translate(0px, 0px) rotate(0deg) scale(1);
    }
  }
`;
