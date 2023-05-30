import {Routes, Route,} from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./index.css";
import {AuthProvider} from "./context/authContext";
import { Protected } from "./components/Protected";

function App () {
  return (
    <div>
        <AuthProvider>
          <Routes>
            
              <Route path="/home/*" element={
                <Protected>
                  <Home/>
                </Protected>
              }>
                <Route path="servicios" element={<h1>servicios</h1>}></Route>
                <Route path="facturas" element={<h1>servicios</h1>}></Route>
                <Route path="corralon" element={<h1>servicios</h1>}></Route>            
              </Route>
              <Route path="/login" element={<Login/>}>
              </Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="*" element={<h1>Pagina no encontrada</h1>}></Route>
          </Routes>
        </AuthProvider>
    </div>
  )
}
export default App;
