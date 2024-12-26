'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Footer, Header, PageLoader } from '@/components'
import { CharacterProps } from '@/types/CharacterProps'
import { CharacterCard, CharacterName, CharacterOther, CharacterPhoto, HomeBox } from './Home.styled'

export default function Home() {
  const [characters, setCharacters] = useState<CharacterProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/characters')
        const data = await response.json()
        setCharacters(data.results)
      } catch (error) {
        console.error('Error fetching characters:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <PageLoader />

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
              <CharacterOther>{el.species}</CharacterOther>
              <hr />
              <CharacterOther style={{ color: 'orangered' }}>{el.status}</CharacterOther>
            </div>
          </CharacterCard>
        ))}
      </HomeBox>
      <Footer />
    </>
  )
}