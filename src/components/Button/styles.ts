import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  border: 1px solid transparent;
  font-weight: bold;
  border-radius: 50%;
  background-color: var(--primaryColorTransparent);
  cursor: pointer;
  transition: 0.1s;

  svg {
    fill: var(--primaryColor);
  }

  &:hover {
    border-color: var(--primaryColorTransparent);
  }

  &:focus {
    filter: brightness(0.9);
  }
`
