import styled from 'styled-components';

export const DivContainer = styled.div`
background: black;
width: 100%;
height:100vh;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
`

export const DivContainerImg = styled.img`
height: 100%;
width: auto;
`

export const DivContainerForm = styled.div`
height: 100%;
width: auto;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
`

export const LoginBox = styled.div`
  padding: 40px;
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
`
export const UserBox = styled.div`
  position: relative;
`
export const InputStyled = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ label{
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }

  &:valid ~ label{
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
  }
`

export const LabelStyled = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
`

export const LinkStyled = styled.a`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  cursor: pointer;

  &:hover{
    background: #11B0C8;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #11B0C8,
                0 0 25px #11B0C8,
                0 0 50px #11B0C8,
                0 0 100px #11B0C8;
  }
`

export const SpanStyled = styled.span`
  position: absolute;
  display: block;

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  &:nth-child(1){
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #11B0C8);
    animation: btn-anim1 2s linear infinite;
  }
`
