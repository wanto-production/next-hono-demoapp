import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
    title: "error -not-found",
};

function notFound() {
  return (
    <main className=' w-full h-screen flex flex-col justify-center items-center gap-2'>
        <div className=' flex flex-wrap gap-2 justify-center items-center w-full'>
            <Link href="/">
                <Image 
                    src="/ambatukam.jpg" 
                    className=' object-cover rounded-md motion-preset-slide-right-lg' 
                    width={300} 
                    height={200} 
                    alt=''
                    priority
                />
            </Link>
            <h2 className=' border-s-4 border-black text-[150px]'> 404</h2>
        </div>
    </main>
  )
}

export default notFound