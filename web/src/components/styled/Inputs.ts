import styled from 'styled-components';

const radius = '5px';
export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 200px;
  height: 200px;
  margin: 2em auto;
  border: 2px solid #FFFA;
  border-radius: ${radius};
  
  button {
    background: #0000;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: ${radius};
    box-sizing: border-box;
    border: 2px solid #FFFA;
  }
  button:active {background: #FFF9;}
  button:focus {outline:0;}

`;

type StyledInputProp = {
  correct?:boolean
}
export const StyledInput = styled.input`
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 150px;
  box-sizing: border-box;
  background-color: #FFFA;
  border: 2px solid ${(prop:StyledInputProp) => (prop.correct ? '#FFFA' : '#F00A')};
  &:focus{ outline:0; }
`;
