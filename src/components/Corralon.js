import "../assest/css/corralon.css";
export const Corralon = () => {


    return(
        
        <div>
<form className="formulario">
    <h3>Datos del Recibo</h3>
    <label for="fecha">Fecha:</label>
    <input type="date" id="fecha" name="fecha" required></input><br></br><br></br>
    
    <label for="danios_materiales">Daños Materiales:</label>
    <input type="text" id="danios_materiales" name="danios_materiales" required></input><br></br><br></br>
    
    <label for="numero_vehiculo">Número de Vehículo:</label>
    <input type="text" id="numero_vehiculo" name="numero_vehiculo" required></input><br></br><br></br>
    
    <label for="lugar_siniestro">Lugar de Siniestro:</label>
    <input type="text" id="lugar_siniestro" name="lugar_siniestro" required></input><br></br><br></br>
    
    <label for="domicilio">Domicilio:</label>
    <input type="text" id="domicilio" name="domicilio" required></input><br></br><br></br>
    
    <label for="motivo">Motivo:</label>
    <input type="text" id="motivo" name="motivo" required></input><br></br><br></br>
    
    <label for="hora">Hora:</label>
    <input type="text" id="hora" name="hora" required></input><br></br><br></br>
    
    <label for="kilometros">Kilómetros:</label>
    <input type="text" id="kilometros" name="kilometros" required></input><br></br><br></br>
    
    <h3>Datos del Vehículo</h3>
    <label for="marca_vehiculo">Marca del Vehículo:</label>
    <input type="text" id="marca_vehiculo" name="marca_vehiculo" required></input><br></br><br></br>
    
    <label for="tipo">Tipo:</label>
    <input type="text" id="tipo" name="tipo" required></input><br></br><br></br>
    
    <label for="modelo">Modelo:</label>
    <input type="text" id="modelo" name="modelo" required></input><br></br><br></br>
    
    <label for="serie">Serie:</label>
    <input type="text" id="serie" name="serie" required></input><br></br><br></br>
    
    <label for="numero_motor">Número de Motor:</label>
    <input type="text" id="numero_motor" name="numero_motor" required></input><br></br><br></br>
    
    <label for="color">Color:</label>
    <input type="text" id="color" name="color" required></input><br></br><br></br>
    
    <label for="placas">Placas:</label>
    <input type="text" id="placas" name="placas" required></input><br></br><br></br>
    
    <label for="edo_placas">Estado de Placas:</label>
    <input type="text" id="edo_placas" name="edo_placas" required></input><br></br><br></br>
    
    <h3>Datos del Seguro</h3>
    <label for="seguro_viajero">Seguro de Viajero:</label>
    <input type="text" id="seguro_viajero" name="seguro_viajero" required></input><br></br><br></br>
    
    <label for="numero_economico">Número Económico:</label>
    <input type="text" id="numero_economico" name="numero_economico" required></input><br></br><br></br>
    
    <h3>Datos del Conductor</h3>
    <label for="conductor">Conductor:</label>
    <input type="text" id="conductor" name="conductor" required></input><br></br><br></br>
    
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad" required></input><br></br><br></br>
    
    <label for="domicilio_conductor">Domicilio:</label>
    <input type="text" id="domicilio_conductor" name="domicilio_conductor" required></input><br></br><br></br>
    
    <label for="licencia_tipo">Licencia Tipo:</label>
    <input type="text" id="licencia_tipo" name="licencia_tipo" required></input><br></br><br></br>
    
    <label for="numero_licencia">Número de Licencia:</label>
    <input type="text" id="numero_licencia" name="numero_licencia" required></input><br></br><br></br>
    
    <label for="vigencia">Vigencia:</label>
    <input type="date" id="vigencia" name="vigencia" required></input><br></br><br></br>
    
    <h3>Otros Datos</h3>
    <label for="edo_combinacion">Estado de Combinación:</label>
    <input type="text" id="edo_combinacion" name="edo_combinacion" required></input><br></br><br></br>
    
    <label for="marca_combinacion">Marca de Combinación:</label>
    <input type="text" id="marca_combinacion" name="marca_combinacion" required></input><br></br><br></br>
    
    <label for="modelo_combinacion">Modelo de Combinación:</label>
    <input type="text" id="modelo_combinacion" name="modelo_combinacion" required></input><br></br><br></br>
    
    <label for="serie_combinacion">Serie de Combinación:</label>
    <input type="text" id="serie_combinacion" name="serie_combinacion" required></input><br></br><br></br>
    
    <label for="rfv">RFV:</label>
    <input type="text" id="rfv" name="rfv" required></input>
    
    <label for="placas_combinacion">Placas:</label>
    <input type="text" id="placas_combinacion" name="placas_combinacion" required></input><br></br><br></br>
    
    <label for="edo_placas_combinacion">Estado de Placas:</label>
    <input type="text" id="edo_placas_combinacion" name="edo_placas_combinacion" required></input><br></br><br></br>
    
    <label for="capacidad">Capacidad:</label>
    <input type="text" id="capacidad" name="capacidad" required></input><br></br><br></br>
    
    <label for="autorizacion">Autorización:</label>
    <input type="text" id="autorizacion" name="autorizacion" required></input><br></br><br></br>
    
    <input type="submit" value="Generar Recibo"></input><br></br><br></br>
</form>

        </div>
    )
}
