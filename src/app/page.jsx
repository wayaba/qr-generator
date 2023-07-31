
import { QRCode } from '@/components/QrCode'

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <section className="z-50 bg-white w-fit rounded-lg p-4 shadow-lg">
        <QRCode/>
      </section>
    </main>
  )
}
