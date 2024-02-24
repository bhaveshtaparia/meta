import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import uri from '../../uri';
import { logout } from '../../actions/authAction';
function Navbar() {
  // const username=useSelector(state=>state.auth && state.auth.user && state.auth.user.user && state.auth.user.user.name);
  const authenticated=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const handleLogout=async()=>{
    try {
      const requestOptions = {
        method: 'GET',
        credentials: 'include'
      };
      const response = await fetch(`${uri}/api/v1/logout`, requestOptions);
      const result = await response.json();
      if(response.ok){
        localStorage.removeItem('auth')
        // alert(result.message);
        dispatch(logout());
      }else{
        alert(result.message);
        // console.log(result.message);
      }
    } catch (err) {
      alert(err);
    }

  }
  return (
    <>
    <nav className="navbar  bg-dark  bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <img src={require(`../../images/logo.jpeg`)} style={{borderRadius:15}} alt='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/game">Game</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/disadvantage">The Professor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/advice">Advice</Link>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>e.preventDefault()}>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        
        {authenticated? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/profile">{username}</Link>
        </li> */}
        <button className="btn btn-outline-success" onClick={handleLogout}>Logout</button>
        </ul>: <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/signup">SignUp</Link>
        </li>
        </ul>}
       
        {/* <button className="btn btn-outline-success" type="submit">Sign Up</button> */}
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar