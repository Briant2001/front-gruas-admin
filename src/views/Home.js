import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../context/authContext";
import "../assest/css/menu.css";
import { AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import { Link, NavLink,Outlet } from "react-router-dom"
import "../assest/css/styles.css"
import { useEffect } from "react";
const Home = ()=>{
    //const navigate=useNavigate()

    
    
    const {user,logout,loading} = useAuth();
    const handleLogout = async()=> {
        try {
            await logout();
        } catch (error) {
        }
    }
    
    if(loading) {return <h1>cargando</h1>}
    
    return(
        
            <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="bg-dark col-auto col-md-3 col-lg-3 min-vh-100 d-flex flex-column justify-content-between" >
                    <div className="bg-dark p-2">
                        <Link to="/home" className="d-flex text-decoration-none mt-1 align-items-center text-white">
                            <span className="fs-4 d-none d-sm-inline">Inicio</span>
                        </Link>
                        <ul className="nav nav-pills flex-column mt-4">
                            <li className="nav-item py-2 py-sm-0">
                                <NavLink to="servicios"  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Servicios</span>
                                </NavLink>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <NavLink  to="facturas" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Facturas</span>
                                </NavLink>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <NavLink to="corralon" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                                    <AiOutlineHome style={{display:"inline", fontSize:"25px"}}/><span className="fs-4 ms-1 d-none d-sm-inline">Corralon</span>
                                </NavLink>
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
                    <main>
                        {user ?  <h1>BIENVENIDO {user.displayName || user.email}</h1>:<h1>Registrate</h1>}
                        <button onClick={handleLogout }>Salir</button>
                        <Outlet/>
                    </main>
                </div>
            </div>

        </div>
    )
}
export {Home};