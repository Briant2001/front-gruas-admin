import { Img, Li, LiRedes, Ul } from "../styleComponents/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarBurst, faFileInvoice, faHome, } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import { AiOutlineHome,AiOutlineUser} from "react-icons/ai"








const Menu = ()=>{
    <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="bg-dark col-auto col-md-3 col-lg-3 min-vh-100 d-flex flex-column justify-content-between" >
                    <div className="bg-dark p-2">
                        <a className="d-flex text-decoration-none mt-1 align-items-center text-white">
                            <span className="fs-4 d-none d-sm-inline">SideMenu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mt-4">
                            <li className="nav-item py-2 py-sm-0 ">
                                <Link  to="/"  className="nav-link text-white">
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/> <span className="fs-4 d-none d-sm-inline">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <Link to="/servicios"  className="nav-link text-white">
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Servicios</span>
                                </Link>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <Link  to="facturas" className="nav-link text-white">
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Facturas</span>
                                </Link>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <Link to="corralon" className="nav-link text-white">
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Corralon</span>
                                </Link>
                            </li>
                
                        </ul>
                    </div>
                    <div className="dropdown open p-2">
                        <button className="btn border-none dropdown-toggle text-white" type="button" id="triggerId"
                            aria-expanded="false">
                            <AiOutlineUser className="fa fa-user"/><span className="ms-2">Yousaf</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <button className="dropdown-item">Senttings </button>
                            <button className="dropdown-item" >Profile </button>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    
                </div>
            </div>

        </div>
}

export {Menu}