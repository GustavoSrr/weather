import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  margin-top: 80px;

  form {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    input {
      width: 30%;
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
  }
`
