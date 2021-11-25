import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const WindInformation = styled.div`
  width: 30%;
  max-width: 100vw;

  display: flex;
  justify-content: left;
  flex-direction: column;

  padding: 30px;

  border-radius: 5px;
  border: 1px solid var(--primaryColor);
  background-color: transparent;

  @media only screen and (max-width: 1050px) {
    width: 50%;
  }

  @media only screen and (max-width: 650px) {
    width: 70%;
  }

  @media only screen and (max-width: 400px) {
    width: 80%;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  gap: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;

    border-radius: 50%;
    background-color: var(--primaryColorTransparent);

    svg {
      fill: var(--primaryColor);
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 5px;

  margin-top: 20px;

  color: var(--primaryColor);

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      margin-left: 8px;
    }
  }

  hr {
    border: 1px solid var(--primaryColorTransparent);
    border-radius: 1px;
  }
`
