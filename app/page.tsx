import Image from 'next/image'
import Header from './componentes/header' 
import Esquenta from './componentes/esquenta'
import Banner from './componentes/banner'
import Times from './componentes/times'

export default function Home() {
  return (
    <>
    <Header/>
    <Esquenta/>
    <Banner/>
    <Times/>
    </>
  )
}
