import axios from 'axios'
import { NextResponse } from 'next/server'
import { CharacterProps } from '@/types/CharacterProps'

export async function GET() {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    const data: { results: CharacterProps[] } = response.data
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching data' }, { status: 500 })
  }
}