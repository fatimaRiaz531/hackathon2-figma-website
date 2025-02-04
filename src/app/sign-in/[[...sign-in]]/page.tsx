import { SignedOut, SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image 
        src="/images/mainpage/mainpic.jpg" 
        alt="mainpic" 
        layout="fill" 
        objectFit="cover" 
        className="brightness-50" 
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SignIn />
        <SignedOut />
      </div>
    </div>
  )
}