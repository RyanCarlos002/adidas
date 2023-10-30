import Image from 'next/image'
import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {BsBagCheck} from "react-icons/bs"


export default function Header() {
  return (
    <>
    <header className='bg-black text-white justify-center flex font-extrabold text-xs h-9 items-center '>
      <h1>ESQUENTA BLACK FIRE | ATÉ 60% OFF</h1>
    </header>

    <header className='flex justify-between place-items-baseline h-[5vw] border-gray-200 mr-14'>
      
      <Image alt='' width={70} height={5} src={'/logoadidas.png'} className='ml-5 flex '/>
      
      <nav className='flex justify-center gap-7'>
        <a href="" className='font-semibold hover'>MULHER</a>
        <a href="" className='font-semibold'>HOMEM</a>
        <a href="" className='font-semibold'>INFANTIL</a>
        <a href="">NOVIDADE</a>
        <a href="">ESPORTES</a>
        <a href="">MUNDOS ADIDAS</a>
        <a href="" className='text-red-600 font-bold'>OUTLET</a>

        <input placeholder='Procurar' className='bg-gray-100 w-[10vw] h-[2vw]'/>
        <a href=""> <AiOutlineUser/> </a> 
        <a href=""> <AiOutlineHeart/> </a> 
        <a href=""> <BsBagCheck/> </a> 
      </nav>

      
   </header>


  
    </> 
   )

}