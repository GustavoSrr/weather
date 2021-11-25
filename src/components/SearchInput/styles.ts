import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 80px;

  form {
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    input {
      width: 100%;
      height: 33px;

      padding: 10px 10px;

      border: 1px solid var(--primaryColorTransparent);
      border-radius: 5px;
      background-color: transparent;
      transition: 0.1s;

      &:focus {
        outline: 0;
        border-color: var(--primaryColor);
      }

      &::-webkit-search-cancel-button {
        height: 15px;
        width: 15px;

        -webkit-appearance: none;

        border-radius: 50%;
        background: url('https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg') no-repeat;
      }
    }

    @media only screen and (max-width: 1050px) {
      width: 50%;
    }

    @media only screen and (max-width: 650px) {
      width: 70%;
    }

    @media only screen and (max-width: 400px) {
      width: 80%;
    }
  }
`
