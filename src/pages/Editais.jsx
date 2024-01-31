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

export default function Editais() {
  return (
    <main style={{ marginTop: 58 }}>
      <div className="container pt-4">
        <section>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <FaPencilAlt size={40} className="text-info fa-3x" />
                    </div>
                    <div className="text-end">
                      <p className="mb-3 mt-2">Data limite: 22/12/2024</p>
                      <h3>ADENDO N° 01/2023 - CHAMADA PÚBLICA N° 05/2023 - PROGRAMA TECNOVA III</h3>
                      <div className='d-flex flex-column'>
                        <p className='bg-success w-25% text-white ml-auto align-self-end rounded'>RESULTADO</p>
                      </div>
                      <button className='btn btn-primary button-alert'>Fazer download</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <FaRegMessage size={40} className="text-warning fa-3x" />
                    </div>
                    <div className="text-end">
                      <h3>156</h3>
                      <p className="mb-0">New Comments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <VscGraphLine size={40} className="text-warning fa-3x" />
                    </div>
                    <div className="text-end">
                      <h3>64.89 %</h3>
                      <p className="mb-0">Bounce Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <FaLocationDot size={40} className="text-danger fa-3x" />
                    </div>
                    <div className="text-end">
                      <h3>423</h3>
                      <p className="mb-0">Total Visits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-danger">278</h3>
                      <p className="mb-0">New Projects</p>
                    </div>
                    <div className="align-self-center">
                      <FaRocket size={50} className="text-danger fa-3x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-success">156</h3>
                      <p className="mb-0">New Clients</p>
                    </div>
                    <div className="align-self-center">
                      <IoPersonSharp size={50} className="text-success fa-3x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-warning">64.89 %</h3>
                      <p className="mb-0">Conversion Rate</p>
                    </div>
                    <div className="align-self-center">
                      <VscGraphLine size={50} className="text-warning fa-3x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-info">423</h3>
                      <p className="mb-0">Support Tickets</p>
                    </div>
                    <div className="align-self-center">
                      <IoTicketSharp size={50} className="text-info fa-3x" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-info">278</h3>
                      <p className="mb-0">New Posts</p>
                    </div>
                    <div className="align-self-center">
                      <FaBookOpen size={50} className="text-info fa-3x" />
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-warning">156</h3>
                      <p className="mb-0">New Comments</p>
                    </div>
                    <div className="align-self-center">
                      <TiMessages size={50} className="text-warning fa-3x" />
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '35%' }} aria-valuenow="35"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-success">64.89 %</h3>
                      <p className="mb-0">Bounce Rate</p>
                    </div>
                    <div className="align-self-center">
                      <PiCoffeeFill size={50} className="text-success fa-3x" />
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '60%' }} aria-valuenow="60"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-danger">423</h3>
                      <p className="mb-0">Total Visits</p>
                    </div>
                    <div className="align-self-center">
                      <FaMapSigns size={50} className="text-danger fa-3x" />
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div className="progress mt-3 mb-1 rounded" style={{ height: 7 }}>
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow="40"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  )
}
