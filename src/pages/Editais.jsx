import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaBookOpen, FaMapSigns, FaPencilAlt,
} from "react-icons/fa";
import {
  FaRocket,
  FaRegMessage, FaLocationDot
} from "react-icons/fa6";
import { IoTicketSharp, IoPersonSharp } from "react-icons/io5";
import { PiCoffeeFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { VscGraphLine } from "react-icons/vsc";
import './styles/EditaisStyle.css'

export default function Editais() {
  const editais = [
    {
      id: 1,
      title: 'ADENDO N° 08/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '09/03/2024',
      status: 'RESULTADO',
      color: 'bg-success',
      icon: 'FaPencilAlt',
    },
    {
      id: 2,
      title: 'ADENDO N° 11/2023 - CHAMADA PÚBLICA N° 01/2024 - PROGRAMA TECNOVA III',
      deadline: '23/12/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
      icon: 'FaRegMessage',
    },
    {
      id: 3,
      title: 'ADENDO N° 05/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '06/08/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
      icon: 'FaLocationDot',
    },
    {
      id: 4,
      title: 'ADENDO N° 01/2023 - CHAMADA PÚBLICA N° 07/2023 - PROGRAMA TECNOVA III',
      deadline: '04/05/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
      icon: 'FaRocket',
    },
    {
      id: 5,
      title: 'ADENDO N° 09/2023 - CHAMADA PÚBLICA N° 02/2024 - PROGRAMA TECNOVA III',
      deadline: '09/07/2024',
      status: 'RESULTADO',
      color: 'bg-success',
      icon: 'IoPersonSharp',
    },
    {
      id: 6,
      title: 'ADENDO N° 05/2023 - CHAMADA PÚBLICA N° 07/2023 - PROGRAMA TECNOVA III',
      deadline: '30/11/2024',
      status: 'RESULTADO',
      color: 'bg-success',
      icon: 'VscGraphLine',
    },
    {
      id: 7,
      title: 'ADENDO N° 01/2023 - CHAMADA PÚBLICA N° 09/2023 - PROGRAMA TECNOVA III',
      deadline: '19/12/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
      icon: 'IoTicketSharp',
    },
    {
      id: 8,
      title: 'ADENDO N° 03/2023 - CHAMADA PÚBLICA N° 05/2023  - PROGRAMA TECNOVA III',
      deadline: '20/10/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
      icon: 'FaBookOpen',
    },
    {
      id: 9,
      title: 'ADENDO N° 10/2023 - CHAMADA PÚBLICA N° 01/2024  - PROGRAMA TECNOVA III',
      deadline: '14/09/2024',
      status: 'RESULTADO',
      color: 'bg-success',
      icon: 'TiMessages',
    },
    {
      id: 10,
      title: 'ADENDO N° 12/2023 - CHAMADA PÚBLICA N° 12/2024  - PROGRAMA TECNOVA III',
      deadline: '02/05/2024',
      status: 'EDITAL ABERTO',
      color: 'bg-info',
      icon: 'PiCoffeeFill',
    },
    {
      id: 11,
      title: 'ADENDO N° 06/2023 - CHAMADA PÚBLICA N° 10/2023  - PROGRAMA TECNOVA III',
      deadline: '10/10/2024',
      status: 'EDITAL ENCERRADO',
      color: 'bg-danger',
      icon: 'FaMapSigns',
    },
  ]
  return (
    <main>
      <div className="container pt-4">
        <section>
          <div className="row">
            {editais.map((edital) => {
              return (
                <div key={edital.id} className="col-xl-3 col-sm-6 col-12 mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between px-md-1">
                        {/* <div className="align-self-center">
                          {edital.icon === 'FaPencilAlt' && <FaPencilAlt size={40} className="text-info fa-3x" />}
                          {edital.icon === 'FaRegMessage' && <FaRegMessage size={40} className="text-warning fa-3x" />}
                          {edital.icon === 'FaLocationDot' && <FaLocationDot size={40} className="text-danger fa-3x" />}
                          {edital.icon === 'FaRocket' && <FaRocket size={40} className="text-danger fa-3x" />}
                          {edital.icon === 'IoPersonSharp' && <IoPersonSharp size={40} className="text-success fa-3x" />}
                          {edital.icon === 'VscGraphLine' && <VscGraphLine size={40} className="text-warning fa-3x" />}
                          {edital.icon === 'IoTicketSharp' && <IoTicketSharp size={40} className="text-info fa-3x" />}
                          {edital.icon === 'FaBookOpen' && <FaBookOpen size={40} className="text-info fa-3x" />}
                          {edital.icon === 'TiMessages' && <TiMessages size={40} className="text-warning fa-3x" />}
                          {edital.icon === 'PiCoffeeFill' && <PiCoffeeFill size={40} className="text-success fa-3x" />}
                          {edital.icon === 'FaMapSigns' && <FaMapSigns size={40} className="text-danger fa-3x" />}
                        </div> */}
                        <div>
                          <p className="mb-3 mt-2">Data limite: {edital.deadline}</p>
                          <h5 className='title'>{edital.title}</h5>
                          <div className='d-flex flex-column'>
                            <p className={`w-25% text-white ml-auto align-self-center rounded ${edital.color}`}>{edital.status}</p>
                          </div>
                          <button className='btn-download'>Fazer download</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            )}
          </div>
        </section>
      </div>
    </main>

  )
}
