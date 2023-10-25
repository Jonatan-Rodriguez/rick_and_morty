import styled from 'styled-components';

export const DivContainer = styled.div`
  background: linear-gradient(90deg, rgba(24,25,26,1) 0%, rgba(0,0,0,1) 70%);
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
  animation: fadeIn 5s linear;

  @keyframes fadeIn {
    0%{
      opacity: 0;
      transform: scale(0.9)
    }

    50%{
      opacity: 0.5;
      transform: scale(0.95);
    }

    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
`

export const DivContainerForm = styled.div`
  height: 100%;
  width: 50vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  background-color: rgba(24,25,26,1);
`

export const LoginBox = styled.div`
  padding: 40px;
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
  width: 350px;

  .title{
    font-size: 2.5em;
    color: #ffffff;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  #linkInvited{
    letter-spacing: 2px;
    font-size: 13px;
    box-shadow: 0 0 5px #208D4530;

    &:hover{
      background: #208D45;
      box-shadow: 0 0 5px #208D45,
                  0 0 25px #208D45,
                  0 0 50px #208D45,
                  0 0 100px #208D45;
    }
  }

  #spanInvited{
    &:nth-child(1){
      background: linear-gradient(90deg, transparent, #208D45);
    }
  }
`
export const UserBox = styled.div`
  position: relative;

    .error{
      background-color: #c1121f;
      border-radius: 5px;
      padding: 1px 5px;
      p{
        font-size: 1.5em;
        color: #ffffff;
      }
    }
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
  box-shadow: 0 0 5px #11B0C830;
  border-radius: 5px;

  &:hover{
    background: #11B0C8;
    color: #fff;
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
