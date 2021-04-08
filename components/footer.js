import Container from './container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            There's a lot more to me than my blog
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/filiptronicek"
              target="_blank"
              className="mx-3 bg-black dark:text-blue hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              My GitHub
            </a>
            <a
              href="https://trnck.dev"
              target="_blank"
              className="mx-3 font-bold hover:underline"
            >
              My Website
            </a>
          </div>
        </div>
        <div className="grid justify-items-center pb-8">
          ©{new Date().getFullYear()} Filip Troníček. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
