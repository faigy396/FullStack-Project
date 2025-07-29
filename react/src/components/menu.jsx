
import { useContext } from "react"
import { Link } from "react-router-dom"
import MyContex from '../context'
export const Menue = () => {
  const is = useContext(MyContex).is_m
  const user = useContext(MyContex).currentUser
  return <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
    <div className="container-fluid">


      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to={'home'}>בית</Link>
        </li>
        <li>
          <Link className="nav-link" to={'signup'}>הרשם</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'login'}>התחברות</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'personl'}>איזור אישי</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'cart'}>סל קניות</Link>
        </li>
        {is && <>
          <li className="nav-item">
            <Link className="nav-link" to={'gamelist'}>all games</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'categorylist'}>all categories</Link>
          </li>

        </>
        }

      </ul>
      <div className="justify-content-end navbar-collapse collapse">
        <span className="navbar-text">
          {user.name} connected
        </span>
      </div>
    </div>
  </nav>
}


{/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to={'home'}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'login'}>Log in</Link>
      </li>
      {is &&
        <li className="nav-item">
          <Link className="nav-link" to={'allproducts'}>All products</Link>
        </li>
      }
      {is &&
        <li className="nav-item">
          <Link className="nav-link" to={'addproduct'}>Add product</Link>
        </li>
      }

    </ul>
    <div className="justify-content-end navbar-collapse collapse">
      <span className="navbar-text">
        {user}
      </span>
    </div>
  </div>


</nav> */}
