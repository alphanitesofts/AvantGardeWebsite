import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>

            <header className="header_area bg-img background-overlay-white" style={{ backgroundImage: 'url(img/bg-img/bg-1.jpg)', borderBottom: '0.5px solid #000' }}>
                <div className="top_header_area">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-end">
                            <div className="col-12 col-lg-7">
                                <div className="top_single_area d-flex align-items-center">
                                    <div className="top_logo">
                                        <a href="#"><img src="img/core-img/logo.png" alt="Avant-Grade Logo" /></a>
                                    </div>
                                    <div className="header-cart-menu d-flex align-items-center ml-auto">
                                        <div className="cart me-3">
                                            <a href="#" id="header-cart-btn" target="_blank"><span className="cart_quantity">2</span> <i className="ti-bag" /> Your Bag $20</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main_header_area">
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-12 d-md-flex justify-content-between">
                                <div className="header-social-area">
                                    <a href="#" target='_blank'><span className="karl-level">Share</span> <i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a href="#" target='_blank'><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a href="#" target='_blank'><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                    <a href="#" target='_blank'><i className="fa fa-globe" aria-hidden="true" /></a>
                                </div>
                                <div className="main-menu-area">
                                    <nav className="navbar navbar-expand-lg align-items-start">
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu" /></span></button>
                                        <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                            <ul className="navbar-nav animated" id="nav">
                                                <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                    <div className="dropdown-menu" aria-labelledby="karlDropdown">
                                                        <Link className="dropdown-item" to='/'>Home</Link>
                                                        <Link className="dropdown-item" to='/Shop-now'>Shop</Link>
                                                        <Link className="dropdown-item" to='/Product-description'>Product Details</Link>
                                                        <Link className="dropdown-item" to='/Cart'>Cart</Link>
                                                        <Link className="dropdown-item" to="/checkout">Checkout</Link>
                                                    </div>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="#">Shorts</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Bottoms</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">WINTER CLEARANCE -UPTO 75% OFF</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Our Blogs</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="header-social-area">
                                    <div className='d-flex'>
                                        <a className='ms-1 additional-icons'><i className="fa-solid fa-magnifying-glass" /></a>
                                        <Link to='/Login' className='ms-1 additional-icons'><i className="fa-solid fa-user" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Navbar