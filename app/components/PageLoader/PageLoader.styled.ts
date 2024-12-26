import styled from 'styled-components'

export const PageLoaderBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const PageLoaderShape = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;  
  aspect-ratio: 1;
  height: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid;
  animation: fill 2s linear infinite alternate;

  @keyframes fill {
    0% { 
      box-shadow: 0 0 inset 
    }
    100% { 
      box-shadow: 0 -48px inset 
    }
  }
`