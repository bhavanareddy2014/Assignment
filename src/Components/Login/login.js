import styled,{ keyframes,css } from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60vh;
  width: 30vw;
  background: linear-gradient(to bottom, #3498db, #2980b9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;

  @media (max-width: 1000px)  {
    width: 50vw;
    height: 60vh;
  }

  @media (max-width: 700px) {
      width: 50vw;
      height: 60vh;
  }
`;

export const MainContainer = styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:80vh;
width:30vw;
background:rgba(255,255,255,0.15);
box-shadow:0 8px 32px 0 rgba(31,38,135,0.37);
border-radius:10px;


`

export const ErrorMessage =  styled.p`
font-size:1rem;
font-weight:500;
color:white
`

export const TitleRegister =  styled.h1`
margin: 3rem 0 2rem 0;
 font-size::2rem;
 color:white;
`

export const FormContainer = styled.form`
  font-family: Arial, sans-serif;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:80%
 
`;

export const Label = styled.label`
  display:flex;
  align-items:center;
  padding:1rem;
  color:white;
  font-size:1rem;
  font-weight:500
`;

export const Input = styled.input`
background:rgba(255,255,255);
box-shadow: 0  8px 32px 0 rgba(31,38,135,0.37);
border-radius:2rem;
width:100%;
height:3rem;
padding:1rem 2rem;
border:none;
outline:none;
  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
`;

export const UserErrMessage = styled.p`
font-size: 14px;
text-align: center;
line-height: 1.5;
margin:1rem;
color:white;

  &.valid {
    display:none;
    color: green;
  }
  &.invalid {
    color: white;
    display:block
  }
`

export const UserSpan =  styled.span`
 font-size:12px;
 &.valid {
    color: green;
    display:none
  }
  &.invalid {
    color: red;
    display:block
  }
`

export const ButtonContainer =  styled.div`
margin:1rem 0 2rem 0;
width:100%;
display:flex;
align-items:center;
justify-content:center;
`

// export const Button = styled.button`
//  font-size:1rem;
//  font-weight:600;
//  width:65%;
//  height:3rem;
//  color:white;
//  background-color:#3498db;
//  border:none;
//  border-radius:2rem;
//  margin:1rem;
//  cursor:pointer;
 
// `

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  width: 65%;
  height: 3rem;
  color: white;
  background-color: ${props => (props.disabled ? '#ccc' : '#3498db')};
  border: none;
  border-radius: 2rem;
  margin: 1rem;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;


