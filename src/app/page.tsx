import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
export default function Home() {
  return (
    <main className='px-10'>
      <section className=' h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-lg '>Portfolio</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li><a className='bg-black text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
          </ul>
        </nav>
        <div className='flex justify-between p-10'>
          <div>
          <h2 className='text-4xl py-2 text-teal-500'>Hi 👋,I am Uzair Ahmad</h2>
          <h3 className='text-xl py-2 '>Mobile App Developer</h3>
          <p className='text-md py-5 leading-8'>I'm a cross-platform mobile app and website developer specializing in Flutter. With expertise in both mobile and web development, I create versatile and engaging applications that cater to diverse platforms and user experiences.</p>
          </div>
          <div className=' border-teal-600 m-auto shadow-xl shadow-teal-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src='/Uzair.png' alt='Uzair Ahmad ' width={600} height={50}/>
          </div>
        </div>
      </section>
    </main>
  )
}
