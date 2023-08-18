import React from 'react'

const Nav = () => {
  return (

    <aside className="w-64 min-h-screen text-white bg-gray-800 hp-4">
    <nav>
      <ul className="space-y-2">
        <li className="opcion-con-desplegable">
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div className="flex items-center">
              <i className="mr-2 fas fa-calendar-alt"></i>
              <span>Agenda</span>
            </div>
            <i className="text-xs fas fa-chevron-down"></i>
          </div>
          <ul className="hidden ml-4 desplegable">
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Gestion de citas
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Polizas
              </a>
            </li>
          </ul>
        </li>
        <li className="opcion-con-desplegable">
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div className="flex items-center">
              <i className="mr-2 fas fa-money-bill-wave"></i>
              <span>Contabilidad</span>
            </div>
            <i className="text-xs fas fa-chevron-down"></i>
          </div>
          <ul className="hidden ml-4 desplegable">
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Tratamientos
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Gastos
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Facturas
              </a>
            </li>
          </ul>
        </li>
        <li className="opcion-con-desplegable">
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div className="flex items-center">
              <i className="mr-2 fas fa-chart-bar"></i>
              <span>Informes</span>
            </div>
            <i className="text-xs fas fa-chevron-down"></i>
          </div>
          <ul className="hidden ml-4 desplegable">
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Presupuestos
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Informe médico
              </a>
            </li>
          </ul>
        </li>
        <li className="opcion-con-desplegable">
          <div className="flex items-center justify-between p-2 hover:bg-gray-700">
            <div className="flex items-center">
              <i className="mr-2 fas fa-file-alt"></i>
              <span>Documentación</span>
            </div>
            <i className="text-xs fas fa-chevron-down"></i>
          </div>
          <ul className="hidden ml-4 desplegable">
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Firmas pendientes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center block p-2 hover:bg-gray-700">
                <i className="mr-2 text-xs fas fa-chevron-right"></i>
                Documentos
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
  )
}

export default Nav