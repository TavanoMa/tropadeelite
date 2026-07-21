import { Hero } from '@/components/sections/hero'
import { HomeSummary } from '@/components/sections/home-summary'
import { HomeCharacters } from '@/components/sections/home-characters'
import { HomeQuotes } from '@/components/sections/home-quotes'
import { HomeCuriosities } from '@/components/sections/home-curiosities'
import { HomeCTA } from '@/components/sections/home-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSummary />
      <HomeCharacters />
      <HomeQuotes />
      <HomeCuriosities />
      <HomeCTA />
    </>
  )
}
