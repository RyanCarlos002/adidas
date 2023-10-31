import Image from 'next/image'



export default function Banner() {
    return (
      <>
      
        <section className="bg-[url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/football_ss23_messi_ballon_dor_onsite_mh_d_843b4a2841.jpg')] h-screen w-auto bg-cover ">
    
          <div className='flex-col items-center pt-[15vw] gap-10 pl-[4vw]'>
                    <div className='text-5xl font-bold text-white pb-4'>      
                      <h1>GRANDI8SO</h1>
                    </div> 

                  <div className='text-white '> 
                    <p>Messi encerrou de uma vez por todas o debate de</p>
                    <p>quem é "O Melhor de Todos os Tempos".</p> 
                  </div>
          </div>
          
          <button className='flex p-3 mt-5 ml-14 border-solid  border-4 bg-white font-medium hover:text-gray-600/95 shadow-sm'>
            COMPRAR MESSI
          </button>

        </section>

        <section>
          <div className="flex justify-center items-center">
            <div className="times">
              <Image src={'/atlmineiro.png'}
              width={50}
              height={50} alt={''}              />
            </div>
            
          </div>
        </section>
      </>
    )
} 