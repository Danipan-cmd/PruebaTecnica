import { useState, useEffect } from "react";
import "./Dashboard.css";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [citas, setCitas] = useState([]);
  const cargarUsuarios = async () => {
    const response = await fetch("http://localhost:4000/usuarios");
    const data = await response.json();
    setUsuarios(data);
  };
  const cargarCitas = async () => {
    const response = await fetch("http://localhost:4000/citas");
    const data = await response.json();
    setCitas(data);
  };

  useEffect(() => {
    cargarUsuarios();
    cargarCitas();
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Panel de Administración</h2>
        <span className="user-count">
          Total Pacientes: {usuarios.length}
        </span>
      </header>
      <div className="table-wrapper">
        <h2>Tabla Pacientes</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>ID Paciente</th>
              <th>Documento</th>
              <th>Nombre Completo</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id_paciente}>
                <td>{usuario.id_paciente}</td>
                <td>{usuario.Documento}</td>
                <td>{usuario.Nombre_Completo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-wrapper">
        <h2>Tabla Citas</h2>

        <table className="styled-table">
          <thead>
            <tr>
              <th>ID Cita</th>
              <th>ID Paciente</th>
              <th>Fecha Cita</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id_cita}>
                <td>{cita.id_cita}</td>
                <td>{cita.id_paciente}</td>
                <td>{cita.fecha_cita}</td>
                <td>{cita.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
