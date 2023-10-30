import Image from 'next/image'

export default function Esquenta() {
    return (
    <section className='bg-purple-800 h-[23vw] w-screen '>

      <h1 className='font-extrabold text-4xl text-white ml-14 mb-10 place-items-baseline pt-16'>
        Esquenta Black Friday
      </h1>
      <section className='flex gap-5 justify-center mr-10 '>
        <div className='bg-gray-100 w-[21vw] h-[9vw] items-center flex'>
          <Image alt='' width={123} height={5} src={'/tenis1.jpg'} className='flex '/>
          <h1 className='ml-5 mt-20 cursor-pointer font-semibold text-xs flex'>COMPRE ORIGINALS</h1>  
            </div>

        <div className='bg-gray-100 w-[21vw] h-[9vw] items-center flex'>
          <Image alt='' width={123} height={5} src={'/tenis2.jpg'} className='flex '/>
          <h1 className=' ml-5 mt-20 cursor-pointer font-semibold text-xs flex '>COMPRE CORRIDA</h1> 
        </div>

        <div className='bg-gray-100 w-[21vw] h-[9vw] items-center flex'>
          <Image alt='' width={123} height={5} src={'/tenis.jpg'} className='flex '/>
          <h1 className='ml-5 mt-20 cursor-pointer font-semibold text-xs flex '>COMPRE ESPORTE</h1> 
        </div> 

        <div className='bg-gray-100 w-[21vw] h-[9vw] items-center flex'> 
          <Image alt='' width={123} height={5} src={'/tenis4.jpg'} className='flex '/>
          <h1 className='ml-5 mt-20 cursor-pointer font-semibold text-xs flex '>MOSTRAR TUDO</h1> 
        </div>
        </section>
      
    </section>
    )
}