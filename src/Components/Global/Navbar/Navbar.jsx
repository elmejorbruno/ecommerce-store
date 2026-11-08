
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdSearch } from 'react-icons/io';
import {
  FaBars,
  FaCaretDown,
  FaCartShopping,
  FaArrowLeft,
 
  FaFire,
} from 'react-icons/fa6';

import ShopBag from '../../../assets/icon/bag-blue-circulo-yellow.svg';
import DarkMode from '../../DarkMode';

import {
  MenuItem,
  MegaMenuPromo,
} from '../../Data/Navigation/NavigationData';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState(null);
  const [mobilePath, setMobilePath] = useState([]);

  const desktopMenuRef = useRef(null);
  const closeMenuTimeout = useRef(null);

  // Obtiene los elementos hijos de un elemento.
  const getItems = (item) => {
    return Array.isArray(item?.items) ? item.items : [];
  };

  // Cancela cualquier cierre pendiente.
  const cancelCloseMenu = useCallback(() => {
    if (closeMenuTimeout.current !== null) {
      clearTimeout(closeMenuTimeout.current);
      closeMenuTimeout.current = null;
    }
  }, []);

  // Cierra todos los menús.
  const closeMenus = useCallback(() => {
    cancelCloseMenu();
    setOpenMenu(false);
    setActiveDesktopMenu(null);
    setMobilePath([]);
  }, [cancelCloseMenu]);

  // Abre o cierra un menú de escritorio.
  const toggleDesktopMenu = (id) => {
    cancelCloseMenu();

    setActiveDesktopMenu((current) =>
      current === id ? null : id
    );
  };

  // El cursor entra en la zona del menú.
  const handleDesktopMenuEnter = useCallback(() => {
    cancelCloseMenu();
  }, [cancelCloseMenu]);

  // El cursor sale de la zona del menú.
  const handleDesktopMenuLeave = useCallback(() => {
    cancelCloseMenu();

    closeMenuTimeout.current = setTimeout(() => {
      setActiveDesktopMenu(null);
      closeMenuTimeout.current = null;
    }, 250);
  }, [cancelCloseMenu]);

  // Limpia el temporizador al desmontar.
  useEffect(() => {
    return () => {
      cancelCloseMenu();
    };
  }, [cancelCloseMenu]);

  // Navegación móvil.
  const openMobileLevel = (item) => {
    setMobilePath((current) => [...current, item]);
  };

  const goBackMobile = () => {
    setMobilePath((current) => current.slice(0, -1));
  };

  const currentMobileItem =
    mobilePath.length > 0
      ? mobilePath[mobilePath.length - 1]
      : null;

  // Cierra los menús con Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenus]);

  // Cierra el Mega Menu al hacer clic fuera.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(event.target)
      ) {
        cancelCloseMenu();
        setActiveDesktopMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cancelCloseMenu]);

  // Renderiza los enlaces de un nivel de navegación móvil.
  const renderMobileItems = (items) => {
    return items.map((item) => {
      const children = getItems(item);
      const hasSubmenu = children.length > 0;

      return (
        <li key={item.id}>
          {hasSubmenu ? (
            <button
              type="button"
              onClick={() => openMobileLevel(item)}
              aria-label={`Abrir ${item.name}`}
              className="flex w-full items-center justify-between gap-3 py-3 text-left text-base hover:text-primary"
            >
              <span>{item.name}</span>

              <FaCaretDown
                aria-hidden="true"
                className="-rotate-90"
              />
            </button>
          ) : (
            <Link
              to={item.link}
              onClick={closeMenus}
              className="block w-full py-3 text-base hover:text-primary"
            >
              {item.name}
            </Link>
          )}

          <div className="border-b border-gray-200 dark:border-gray-700" />
        </li>
      );
    });
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-gray-900 duration-200 dark:text-white">

      {/* HEADER PRINCIPAL */}

      <div className="pt-3">
        <div className="container flex items-center justify-between gap-3">

          {/* LOGO */}

          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center gap-2 font-handwriting text-2xl font-bold sm:text-4xl"
          >
            <img
              src={ShopBag}
              alt=""
              className="w-10"
            />
            Elegance
          </Link>

          {/* BUSCADOR Y UTILIDADES */}

          <div className="flex items-center gap-3 sm:gap-5">

            {/* BUSCADOR DESKTOP */}

            <form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              className="relative hidden sm:block"
            >
              <input
                type="search"
                placeholder="Buscar productos..."
                aria-label="Buscar productos"
                className="w-[200px] rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 outline-none transition-all duration-300 focus:border-primary dark:border-gray-500 dark:bg-gray-800 dark:text-white"
              />

              <IoMdSearch
                aria-hidden="true"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </form>

            {/* CARRITO / PEDIDOS */}

            <button
              type="button"
              onClick={() => alert('Ordering not available yet')}
              aria-label="Carrito de compras"
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white transition-all duration-200"
            >
              <span className="hidden transition-all duration-200 group-hover:block">
                Order
              </span>

              <FaCartShopping
                aria-hidden="true"
                className="text-xl"
              />
            </button>

            {/* MODO OSCURO */}

            <DarkMode />

            {/* BOTÓN MENÚ MÓVIL */}

            <button
              type="button"
              onClick={() => {
                setOpenMenu(true);
                setMobilePath([]);
              }}
              aria-label="Abrir menú de navegación"
              aria-expanded={openMenu}
              aria-controls="mobile-navigation"
              className="rounded-md p-2 text-2xl sm:hidden"
            >
              <FaBars aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* NAVEGACIÓN DESKTOP */}

      <nav
        ref={desktopMenuRef}
        aria-label="Navegación principal"
        className="relative hidden justify-center sm:flex"
        onMouseEnter={handleDesktopMenuEnter}
        onMouseLeave={handleDesktopMenuLeave}
      >
        <ul className="flex items-center gap-4">

          {MenuItem.map((item) => {
            const children = getItems(item);
            const hasSubmenu = children.length > 0;
            const isOpen = activeDesktopMenu === item.id;

            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  handleDesktopMenuEnter();

                  if (hasSubmenu) {
                    setActiveDesktopMenu(item.id);
                  }
                }}
              >
                {hasSubmenu ? (
                  <button
                    type="button"
                    onClick={() => toggleDesktopMenu(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`mega-menu-${item.id}`}
                    className="flex items-center gap-2 px-4 py-2 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    {item.name}

                    <FaCaretDown
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.link}
                    onClick={closeMenus}
                    className="inline-block px-4 py-2 transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}

                {/* MEGA MENU */}

                {hasSubmenu && isOpen && (
                  <div
                    id={`mega-menu-${item.id}`}
                    onMouseEnter={handleDesktopMenuEnter}
                    onMouseLeave={handleDesktopMenuLeave}
                    className="fixed inset-x-0 top-[var(--mega-menu-top)] z-[999] w-full border-y border-gray-200 bg-white px-6 py-6 text-gray-900 shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  >
                    <div className="mx-auto max-w-7xl">

                      {item.id === 'Atencion-al-cliente' ? (

                        /* ATENCIÓN AL CLIENTE */

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">

                          <section>
                            <h2 className="mb-4 px-3 text-lg font-semibold">
                              Atención al cliente
                            </h2>

                            <ul className="flex flex-col gap-1">
                              {children.map((child) => (
                                <li key={child.id}>
                                  <Link
                                    to={child.link}
                                    onClick={closeMenus}
                                    className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800"
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section className="flex min-h-[190px] flex-col justify-center rounded-xl bg-gray-100 p-6 dark:bg-gray-800">
                            <h3 className="text-xl font-semibold">
                              ¿Necesitas ayuda?
                            </h3>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                              Encuentra información sobre tus compras y nuestros servicios.
                            </p>

                            <Link
                              to="/contact"
                              onClick={closeMenus}
                              className="mt-4 inline-flex w-fit items-center gap-2 font-semibold text-primary hover:underline"
                            >
                              Contactar
                              <span aria-hidden="true">→</span>
                            </Link>
                          </section>
                        </div>

                      ) : (

                        /* PRODUCTOS: TRES CATEGORÍAS Y PROMOCIÓN */

                        <>
                          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(220px,1.1fr)]">

                            {/* CATEGORÍAS */}

                            {children.map((child) => {
                              const childItems = getItems(child);

                              return (
                                <section
                                  key={child.id}
                                  className="flex min-w-0 gap-3"
                                >
                                  {/* IMAGEN DE CATEGORÍA */}

                                  <Link
                                    to={child.link}
                                    onClick={closeMenus}
                                    className="group relative h-[190px] w-[42%] min-w-[100px] shrink-0 overflow-hidden rounded-lg bg-gray-200"
                                  >
                                    {child.image && (
                                      <img
                                        src={child.image}
                                        alt=""
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-2">
                                      <h3 className="text-sm font-semibold text-white">
                                        {child.name}
                                      </h3>

                                      <p className="mt-1 text-[10px] leading-relaxed text-white/90">
                                        {child.description || 'Descubre nuestra colección'}
                                      </p>

                                      <span className="mt-2 inline-flex rounded-full border border-white/80 px-2 py-1 text-[9px] text-white transition-colors group-hover:bg-white group-hover:text-gray-900">
                                        Ver colección
                                      </span>
                                    </div>
                                  </Link>

                                  {/* ENLACES DE CATEGORÍA */}

                                  <div className="min-w-0 flex-1 py-1">
                                    <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                                      {child.name}
                                    </h3>

                                    <ul className="flex flex-col gap-2">
                                      {childItems.map((subItem) => (
                                        <li key={subItem.id}>
                                          <Link
                                            to={subItem.link}
                                            onClick={closeMenus}
                                            className="block text-[11px] leading-snug text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
                                          >
                                            {subItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </section>
                              );
                            })}

                            {/* BANNER PROMOCIONAL */}

                            <Link
                              to={MegaMenuPromo.link}
                              onClick={closeMenus}
                              className="group relative flex min-h-[190px] flex-col justify-end overflow-hidden rounded-lg bg-[#e9e4dc] bg-cover bg-center p-5"
                              style={
                                MegaMenuPromo.image
                                  ? {
                                      backgroundImage: `url(${MegaMenuPromo.image})`,
                                    }
                                  : undefined
                              }
                            >
                              {MegaMenuPromo.image && (
                                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
                              )}

                              <div className="relative z-10">
                                <span
                                  className={`text-[9px] font-semibold uppercase tracking-widest ${
                                    MegaMenuPromo.image
                                      ? 'text-white'
                                      : 'text-gray-500 dark:text-gray-300'
                                  }`}
                                >
                                  Elegance Store
                                </span>

                                <h3
                                  className={`mt-2 text-base font-semibold leading-snug ${
                                    MegaMenuPromo.image
                                      ? 'text-white'
                                      : 'text-gray-900 dark:text-white'
                                  }`}
                                >
                                  {MegaMenuPromo.title}
                                </h3>

                                {MegaMenuPromo.description && (
                                  <p
                                    className={`mt-2 text-xs leading-relaxed ${
                                      MegaMenuPromo.image
                                        ? 'text-white/90'
                                        : 'text-gray-600 dark:text-gray-300'
                                    }`}
                                  >
                                    {MegaMenuPromo.description}
                                  </p>
                                )}

                                <span
                                  className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-medium transition-colors ${
                                    MegaMenuPromo.image
                                      ? 'border-white text-white group-hover:bg-white group-hover:text-gray-900'
                                      : 'border-gray-800 text-gray-900 group-hover:bg-gray-900 group-hover:text-white dark:border-white dark:text-white'
                                  }`}
                                >
                                  {MegaMenuPromo.buttonText}
                                  <span aria-hidden="true">→</span>
                                </span>
                              </div>
                            </Link>
                          </div>

                          {/* FRANJA INFERIOR */}

                          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-200 pt-4 dark:border-gray-700">

                            <span className="w-full text-[9px] font-semibold uppercase tracking-widest text-gray-400 lg:w-auto">
                              En circulación
                            </span>

                            <Link
                              to="/women"
                              onClick={closeMenus}
                              className="group inline-flex items-center gap-3 text-xs font-medium text-gray-700 transition-colors hover:text-primary dark:text-gray-200"
                            >
                              <FaCartShopping aria-hidden="true" />
                              Productos
                              <span className="text-gray-400 transition-transform group-hover:translate-x-1">
                                →
                              </span>
                            </Link>

                            <span className="inline-flex items-center gap-3 text-xs font-medium text-gray-500">
                              <FaFire aria-hidden="true" />
                              Las más vendidas
                              <span className="text-gray-400">→</span>
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* OVERLAY MÓVIL */}

      {openMenu && (
        <button
          type="button"
          aria-label="Cerrar menú de navegación"
          onClick={closeMenus}
          className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-sm sm:hidden"
        />
      )}

      {/* SIDEBAR MÓVIL */}

      <aside
        id="mobile-navigation"
        aria-label="Menú móvil"
        aria-hidden={!openMenu}
        className={`fixed left-0 top-0 z-[999] flex h-dvh w-[min(85vw,340px)] flex-col overflow-y-auto bg-white p-5 text-gray-900 shadow-xl transition-transform duration-300 dark:bg-gray-900 dark:text-white sm:hidden ${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* CABECERA DEL SIDEBAR */}

        <div className="mb-5 flex items-center justify-between gap-3">

          {mobilePath.length > 0 ? (
            <button
              type="button"
              onClick={goBackMobile}
              aria-label="Volver al menú anterior"
              className="rounded-md p-2 text-xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <FaArrowLeft aria-hidden="true" />
            </button>
          ) : (
            <Link
              to="/"
              onClick={closeMenus}
              className="flex items-center gap-2 font-handwriting text-2xl font-bold"
            >
              <img
                src={ShopBag}
                alt=""
                className="w-9"
              />
              Elegance
            </Link>
          )}

          {mobilePath.length > 0 && (
            <h2 className="flex-1 truncate text-center font-semibold">
              {currentMobileItem?.name}
            </h2>
          )}

          <button
            type="button"
            onClick={closeMenus}
            aria-label="Cerrar menú"
            className="rounded-md p-2 text-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>
link
        <div className="border-b border-gray-200 dark:border-gray-700" />

        {/* CONTENIDO DEL MENÚ */}

        <nav
          aria-label="Navegación móvil"
          className="flex-1"
        >
          <ul className="flex flex-col">

            {mobilePath.length === 0 ? (
              renderMobileItems(MenuItem)
            ) : (
              <>
                {currentMobileItem?.link && (
                  <li className="border-b border-gray-200 py-3 dark:border-gray-700">
                    <Link
                      to={currentMobileItem.link}
                      onClick={closeMenus}
                      className="font-semibold text-primary"
                    >
                      Ver sección: {currentMobileItem.name}
                    </Link>
                  </li>
                )}

                {renderMobileItems(getItems(currentMobileItem))}
              </>
            )}
          </ul>
        </nav>

        {/* BUSCADOR MÓVIL */}

        <form
          role="search"
          onSubmit={(event) => event.preventDefault()}
          className="relative my-4"
        >
          <input
            type="search"
            placeholder="Buscar productos..."
            aria-label="Buscar productos"
            className="w-full rounded-full border border-gray-300 bg-transparent py-3 pl-4 pr-10 text-sm outline-none focus:border-primary dark:border-gray-600"
          />

          <IoMdSearch
            aria-hidden="true"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </form>

        {/* UTILIDADES MÓVILES */}

        <div className="flex items-center justify-around border-t border-gray-200 pt-4 dark:border-gray-700">
          <button
            type="button"
            onClick={() => alert('Ordering not available yet')}
            aria-label="Carrito de compras"
            className="rounded-full p-3 text-xl hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FaCartShopping aria-hidden="true" />
          </button>

          <DarkMode />
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
