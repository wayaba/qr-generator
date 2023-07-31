'use client'

import { QRCode } from '@/components/QrCode'

export default function CustomHome({params}) {
  const {id} = params
  
  
  return (
    <main className="flex h-screen justify-center items-center">
      <section className="z-50 bg-white w-fit rounded-lg p-4 shadow-lg">
        <QRCode urlParam={decodeURIComponent(id)} isCustom={true}/>
      </section>
    </main>
  )
}