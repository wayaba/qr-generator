import { Cafecito } from "./Cafecito"

export const Footer = () =>{
    return (
        <footer className="flex flex-col text-xs bottom-0 left-0 right-0 2xl:pb-20 md:pb-2 pb-5 text-center opacity-60  text-white/80 justify-center">
        <div>
          {' '}
          Desarrollado por{' '}
          <a
            className="text-white hover:underline"
            target="_blank"
            href={`mailto:pabloj.pedraza@gmail.com`}
          >
            Pablo Pedraza
          </a>{' '}
          &bull;{' '}
          <a
            className="text-white hover:underline"
            target="_blank"
            href={`https://github.com/wayaba`}
          >
            Github
          </a>
        </div>
        <Cafecito/>
      </footer>
    )
}