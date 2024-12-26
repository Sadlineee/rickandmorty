import { oxanium } from '@/fonts/fonts'
import { HeaderBox, AppTitle } from './Header.styled'

export default function Header() {
  return (
    <HeaderBox>
      <AppTitle className={oxanium.className}>Rick<span style={{ color: '#FFFFFF' }}>&</span>Morty</AppTitle>
    </HeaderBox>
  )
}