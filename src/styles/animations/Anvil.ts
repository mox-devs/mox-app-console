import { keyframes } from 'styled-components'

export const Anvil = keyframes`
 0% {
    transform: scale(5) rotate(0);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }

  50% {
    transform: scale(1) rotate(-0.2deg);
    opacity: 1;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0.5);
  }

  75% {
    transform: scale(1) rotate(0.2deg);
    opacity: 1;
    box-shadow: 0 0 250px rgba(241, 241, 241, 0.5);
  }

  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
`
export default Anvil
