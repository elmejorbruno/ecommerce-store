import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaCcVisa,
  FaCcPaypal,
  FaCcMastercard,
  FaApplePay,
} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <footer className="bg-slate-950 text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-16">

        {/* Grid Principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-wide">
              Elegance
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Moda para mujeres, hombres y niños.
              Diseños elegantes que combinan calidad, comodidad y estilo para
              cada ocasión.
            </p>

            {/* Redes */}
            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white duration-300"
              >
                <FaPinterestP />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white duration-300"
              >
                <FaTiktok />
              </a>

            </div>
          </div>

          {/* Comprar */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Comprar
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/women"
                  className="hover:text-white duration-300"
                >
                  Mujer
                </Link>
              </li>

              <li>
                <Link
                  to="/men"
                  className="hover:text-white duration-300"
                >
                  Hombre
                </Link>
              </li>

              <li>
                <Link
                  to="/kids"
                  className="hover:text-white duration-300"
                >
                  Niños
                </Link>
              </li>

              <li>
                <Link
                  to="/new"
                  className="hover:text-white duration-300"
                >
                  Nuevos ingresos
                </Link>
              </li>

              <li>
                <Link
                  to="/offers"
                  className="hover:text-white duration-300"
                >
                  Ofertas
                </Link>
              </li>

            </ul>

          </div>

          {/* Ayuda */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Atención al cliente
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/shipping"
                  className="hover:text-white duration-300"
                >
                  Envíos
                </Link>
              </li>

              <li>
                <Link
                  to="/returns"
                  className="hover:text-white duration-300"
                >
                  Devoluciones
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="hover:text-white duration-300"
                >
                  Preguntas frecuentes
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-white duration-300"
                >
                  Contacto
                </Link>
              </li>

            </ul>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contacto
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>info@elegance.com</p>

              <p>+57 300 000 0000</p>

              <p>Colombia</p>

              <p>Lunes - Viernes</p>

              <p>8:00 AM - 6:00 PM</p>

            </div>

          </div>

        </div>

        {/* Línea */}

        <div className="border-t border-slate-800 my-5"></div>

        {/* Pago */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>

            <h4 className="text-lg font-semibold text-white mb-4">
              Métodos de pago
            </h4>

            <div className="flex flex-wrap gap-5 text-4xl text-gray-400">

              <FaCcVisa className="hover:text-white duration-300 cursor-pointer" />

              <FaCcMastercard className="hover:text-white duration-300 cursor-pointer" />

              <FaCcPaypal className="hover:text-white duration-300 cursor-pointer" />

              <FaApplePay className="hover:text-white duration-300 cursor-pointer" />

            </div>

          </div>

          <p className="text-sm text-gray-500 text-center lg:text-right">
            © {new Date().getFullYear()} Elegance Fashion.
            Todos los derechos reservados.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer