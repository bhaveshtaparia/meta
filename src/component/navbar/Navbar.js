import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import uri from '../../uri';
import { logout } from '../../actions/authAction';

function Navbar() {
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        credentials: 'include'
      };
      const response = await fetch(`${uri}/api/v1/logout`, requestOptions);
      const result = await response.json();
      if (response.ok) {
        localStorage.removeItem('auth');
        dispatch(logout());
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img className="h-10 w-auto" src={require(`../../images/logo.jpeg`)} alt="logo" style={{ borderRadius: 15 }} />
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to='/game' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Game</Link>
            <Link to='/disadvantage' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">The Professor</Link>
            <Link to='/advice' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Advice</Link>
          </div>
          <div className="flex items-center">
            {authenticated ? (
              <button onClick={handleLogout} className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium">Logout</button>
            ) : (
              <div className="flex">
                <Link to='/login' className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">Login</Link>
                <Link to='/signup' className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-sm font-medium">SignUp</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
