/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <>
      <footer className="grotesk bg-[#f9fbfb]">


        <div className="max-w-8xl mx-auto px-5 py-10 text-black">
          <div className="order-first flex flex-wrap text-left">
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Redes sociales</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="https://www.facebook.com/ITESCHAM">Facebook</a>
                </li>
                <li>
                  <a href="https://wa.me/+529821845028">Whatsapp</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Registro</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="/">Registro al evento</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">TECNM</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
                <li>
                  <a href="https://champoton.tecnm.mx/ITS_Champoton/">ITESCHAM</a>
                </li>
              </nav>
            </div>
            <div className="flex md:flex-row flex-col justify-center gap-10 pt-5">
              <img src="/images/logo_itescham.png" className="h-24"></img>
              <div className="flex justify-center">
                <img src="/images/tecnm.png" className="h-24"></img>
              </div>
            </div>
          </div>

        </div>

      </footer>
    </>
  );
}
