import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4"
         style={{
          padding: '1rem',
          backgroundColor: '#2372c0ff',
          display: 'flex',
          justifyContent: "space-between", 
          gap: '1rem'
    }}>

        <span className="navbar-brand fw-bold fs-4">🛍️ MyTienda</span>
        <div className="ms-auto d-flex gap-3">
          <Link className="nav-link" to="/categorias">Categorías</Link>
          <Link className="nav-link" to="/productos">Productos</Link>
        </div>
    </nav>
  );
}
