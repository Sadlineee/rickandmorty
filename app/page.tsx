'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Footer, Header } from '@/components'
import { CharacterProps } from '@/types/CharacterProps'
import { CharacterCard, CharacterName, CharacterOtherInfo, CharacterPhoto, HomeBox } from './Home.styled'

export default function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/characters')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Header />
      <HomeBox>
        {characters.map((el) => (
          <CharacterCard key={el.id}>
            <CharacterPhoto>
              <Image 
                src={el.image} 
                alt={`${el.name}` + ' image'} 
                fill={true} 
                quality={80}
                priority 
              />
            </CharacterPhoto>
            <CharacterName>{el.name}</CharacterName>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <CharacterOtherInfo>{el.species}</CharacterOtherInfo>
              <hr />
              <CharacterOtherInfo style={{ color: 'orangered' }}>{el.status}</CharacterOtherInfo>
            </div>
          </CharacterCard>
        ))}
      </HomeBox>
      <Footer />
    </>
  )
}