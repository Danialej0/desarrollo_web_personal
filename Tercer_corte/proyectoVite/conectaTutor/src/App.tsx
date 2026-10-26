import { Encabezado } from './components/header'

/** Componente raíz: define la estructura general de la aplicación. */
function App() {
  return (
    <>
      <Encabezado
        titulo="StockFácil"
        subtitulo="Tecnología y componentes electrónicos para tu equipo"
      />
      <main id="inicio">
        <h1>Encuentra la tecnología que necesitas</h1>
      </main>
      <footer className="pie">
        StockFácil · Tu tienda de componentes electrónicos
      </footer>
    </>
  )
}

export default App
