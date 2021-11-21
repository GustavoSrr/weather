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

      border: 1px solid var(--primaryColor);
      border-radius: 5px;
      background-color: transparent;

      &:focus {
        outline: 0;
      }
    }
  }
`
