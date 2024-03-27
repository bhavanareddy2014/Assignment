import styled,{ keyframes,css } from 'styled-components';

export const Container  = styled.div`
  width:100vw;
  height:100vh;
  position:relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.img`
width:100%;
height:100%;
object-fix:cover;
`

export const NavButton =  styled.button`
width:40px;
height:40px;
font-size:1.5rem;
display:flex;
justify-content:center;
align-items:center;
outline:none;
background:white;
cursor:pointer;
padding:0;
position:absolute;
top:50%;
border-radius:50%;
color:#000;
// box-shadow:0px 4px 60px 20px rgba(3,3,3,0.9),inset 0 3px 3px rgba(3,3,3,0.5);
transform: translate(0,-50%);
${(props) =>  props.right === true ? css `right: 2%` : css `left:2%` }
`

export const Title = styled.h3`
  font-size: 2rem;
  position: absolute;
  font-family:fantasy;
  font-weight:500;
  left: 50%;
  bottom:5%;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
  @media (max-width: 700px) {
    font-size:1rem;
    gap:10px;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-family: fantasy;
  font-weight:500;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  opacity: 0.8;
  text-align: center;
  width: 80%;
  @media (max-width: 700px) {
    font-size: 1rem;
    bottom: 15%;
  }
`;

// export const Description = styled.p`
//   font-size: 1.5rem;
//   font-family:fantasy;
//   font-weight:5005
//   position: absolute;
//   left: 50%;
//   bottom:3%;
//   color: white;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   @media (max-width: 700px) {
//     font-size:0.8rem;
//     gap:10px;
//   }
// `;

export const DotContainer = styled.div`
display:flex;
gap:5px;
justify-content:center;
align-items:center;
position:absolute;
bottom:3%;
left:50%;
transform: translate(-50%,0%);
`

export const Dot =  styled.div`
width:10px;
height:10px;
border-radius:50%;
background-color:white;
cursor:pointer;
${(props) => props.active === true ? css`background-color:white` : css `background-color:grey`}
`

export const ContentContainer =  styled.div`
 text-align-center
`