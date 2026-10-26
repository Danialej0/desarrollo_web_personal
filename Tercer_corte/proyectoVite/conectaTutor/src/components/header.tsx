import './header.css'

interface EncabezadoProps {
  titulo: string
  subtitulo: string
}

export function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <a className="header__logo" href="/">
            {titulo}
          </a>
          <p className="header__subtitle">{subtitulo}</p>
        </div>

        <nav className="header__nav" aria-label="Navegación principal">
          <a className="header__link" href="#inicio">
            Inicio
          </a>
          <a className="header__link" href="#productos">
            Productos
          </a>
          <a className="header__link" href="#categorias">
            Categorías
          </a>
          <button className="header__button" type="button">
            Ver carrito
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado