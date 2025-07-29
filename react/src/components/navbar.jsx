import { Link } from "react-router-dom"

export const MyNav = () => {


  return <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={'home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'login'}>Log in</Link>
        </li>
        

      </ul>
    </div>
  </nav>


}