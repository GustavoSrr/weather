import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  border: 0;
  font-weight: bold;
  border-radius: 50%;
  background-color: var(--primaryColorTransparent);
  cursor: pointer;

  svg {
    fill: var(--primaryColor);
  }
`
