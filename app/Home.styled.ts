import styled from 'styled-components'

export const HomeBox = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 0 15rem;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }
`

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`

export const CharacterPhoto = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 100%;
`

export const CharacterName = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`

export const CharacterOtherInfo = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`