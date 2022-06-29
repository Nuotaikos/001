import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <nav className="nav">
            <NavLink to='/admin/' className="nav-link" style={
              ({ isActive }) =>
                isActive ? {
                  color: "crimson"

                } : null
            }>Admin</NavLink>
            <NavLink to='/admin/cats' className="nav-link" href="#">Categories</NavLink>
            <NavLink to='/admin/products' className="nav-link" href="#">Products</NavLink>

          </nav >
        </div>
      </div>
    </div>
  )
}

export default Nav;