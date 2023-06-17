import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = (props) => {
    const { userLogin } = useSelector(state => state.userReducer);
    const renderLoginLink = () => {
    //   if (userLogin.email !== '') {
  
    //     return <>
    //       <li className='nav-item'>
    //         <NavLink className="nav-link" to="/profile">Hello ! {userLogin.email}</NavLink>
    //       </li>
    //       <li className='nav-item'>
    //         <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => {
    //           clearStorage(USER_LOGIN);
    //           window.location.reload(); //f5
    //         }}>Logout</span>
    //       </li>
    //     </>
    //   }
  
    //   return <li className='nav-item'>
    //     <NavLink className="nav-link" to="/login">Login</NavLink>
    //   </li>
    }
    return (
        <div>
            <header id="header">
                <div className="top_header">
                    <div className="container">
                        <div className="left_content">
                            <div className="logo">
                                <svg aria-hidden="true" class="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img" width="80px" height="80px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <div className="right_content d-flex">
                            <NavLink className="nav-link" to="/cart"><i className="fa fa-shopping-cart" /></NavLink>
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </div>
                    </div>
                </div>
                <nav className="menu">
                    <div className="container">
                        <div className="menu-content">
                            <a href="/">Home</a>
                            <a href=".">Men</a>
                            <a href=".">Woman</a>
                            <a href=".">Kid</a>
                            <a href=".">Sport</a>
                        </div>
                    </div>
                </nav>
            </header>

        </div>

    )
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Header)