import { keyframes } from 'styled-components'

export const Anvil = keyframes`
 0% {
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    opacity: 0;
    transform: scale(5) rotate(0);
  }

  50% {
    box-shadow: 0 0 0 rgba(241, 241, 241, 0.5);
    opacity: 1;
    transform: scale(1) rotate(-0.2deg);
  }

  75% {
    box-shadow: 0 0 250px rgba(241, 241, 241, 0.5);
    opacity: 1;
    transform: scale(1) rotate(0.2deg);
  }

  100% {
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    opacity: 1;
    transform: scale(1) rotate(0);
  }
`
export default Anvil
