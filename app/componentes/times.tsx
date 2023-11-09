import Image from "next/image"

export default function Times() {
    return (
      <>
    <section>
        <h1 className="flex justify-center text-center mt-7">
            Encontre seu time
        </h1>

        <div className="flex justify-center items-center gap-3 mt-2">
           <div className="times">
                <Image src={'/atlmineiro.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/SaoPaulo.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/flamengo.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/cruzeiro.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/inter.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/realmadrid.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/manchester.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/bayer.png'}
                width={50}
                height={50} alt={''}/> 
            </div>

            <div className="times">
                <Image src={'/juventus.png'}
                width={50}
                height={50} alt={''}/> 
            </div>
        </div>
    </section>    
 </>
    )
}