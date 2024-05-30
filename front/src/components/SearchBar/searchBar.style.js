import styled from "styled-components";

export const ContainerSearch = styled.div`
  min-width: 250px;
  width: 60vw;
  max-width: 600px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-direction: row;

  .input{
    width: 100%;
    height: 100%;

    .search__input{
      width: 100%;
      height: 100%;
      border-radius: 40px 0 0 40px;
      padding: 0 4px 0 16px;
      font-size: 1.6em;
      background-color: #f4f2f2;
      color: #646464;
      border: 1px solid hsl(0, 0%, 18.82%);
      border-right: none;
      transition: all ease-in-out .5s;

      &:hover, &:focus{
        box-shadow: 0 0 2em rgba(255,255,255,0.5);
      }

      &:focus{
        outline: none;
        background-color: #f0eeee;
      }

      &::-webkit-input-placeholder{
        font-weight: 100;
        color: #ccc;
      }
    }
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 7px;
    position: relative;

    .clean__button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 40px;
      z-index: 3;
      background-color: transparent;
      border: none;
      position: absolute;
      right: 67px;
      transition: all ease-in-out .3s;

      &:hover{
        cursor: pointer;
        background-color: #646464;
      }

      img{
        width: 100%;
        height: 100%;
      }
    }
    .search__button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 40px;
      border-radius: 0 40px 40px 0;
      border: 1px solid hsl(0, 0%, 18.82%);
      background-color: #f4f2f2;

      &:hover{
        cursor: pointer;
      }

      img{
        width: 100%;
        height: 100%;
        fill: #b4b4b4;
      }
    }
  }

`