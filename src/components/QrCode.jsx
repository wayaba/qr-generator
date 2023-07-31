'use client'

import Link from 'next/link'
import { QRCodeCanvas } from 'qrcode.react'
import { useState } from 'react'

export function QRCode({ urlParam = '', isCustom = false }) {
  const [url, setUrl] = useState(urlParam)
  const [pressButtom, setPressBottom] = useState(false)

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const downloadQRCode = (e) => {
    e.preventDefault()
    const canvas = document.getElementById('canvas-qr')
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'canvas-qr.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const copyQRCode = (e) => {
    e.preventDefault()

    const copyedUrl = `${window.location.origin}/${encodeURIComponent(url)}`

    navigator.clipboard
      .writeText(copyedUrl)
      .then(() => {
        setPressBottom(true)
        let iterval = setInterval(() => {
          setPressBottom(false)

          return clearInterval(iterval)
        }, 2000)
      })
      .catch(() => {
        alert('Error al copiar la URL')
      })
  }

  return (
    <div className="m-2">
      <form className="flex flex-col gap-3">
        <div className="bg-qr-app flex flex-col items-center rounded-lg p-2 m-auto">
          <QRCodeCanvas
            id="canvas-qr"
            value={url}
            bgColor={'#4e54c8'}
            fgColor={'#FFF'}
            level={'L'}
          />
        </div>
        {isCustom ? (
          <div>
            <Link className="text-qr-app hover:text-white border border-qr-app hover:bg-qr-app focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-qr-app dark:text-qr-app dark:hover:text-white dark:hover:bg-qr-app dark:focus:ring-blue-800 w-fit m-auto"
             href={'/'}>Generar otro QR</Link>
          </div>
        ) : (
          <>
            <p className='text-center'>Genera tu código QR</p>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={url}
              placeholder='Ej. www.google.com'
              onChange={handleChange}
            ></input>
            <button
              disabled={url === ''}
              onClick={downloadQRCode}
              className="text-qr-app disabled:bg-slate-200 hover:text-white border border-qr-app hover:bg-qr-app focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-qr-app dark:text-qr-app dark:hover:text-white dark:hover:bg-qr-app dark:focus:ring-blue-800 w-fit m-auto"
            >
              Descargar QR
            </button>
            <button
              disabled={url === ''}
              onClick={copyQRCode}
              className="text-qr-app disabled:bg-slate-200 hover:text-white border border-qr-app hover:bg-qr-app focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-qr-app dark:text-qr-app dark:hover:text-white dark:hover:bg-qr-app dark:focus:ring-blue-800 w-fit m-auto"
            >
              {pressButtom ? '¡Copiado! ✓' : 'Copiar Link'}
            </button>
            </>
        )}
      </form>
    </div>
  )
}
