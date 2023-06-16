import React from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import './carousel.css';
const Carousel = (props) => {
    return (
        <div>
            <section
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner carousel">
                    <div class="container">
                        <div class="carousel-item active">
                            <div class="carousel-flex">
                                <div class="carousel-img">
                                    <img src="https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png" alt="..." />
                                </div>
                                <div class="carousel-content">
                                    <div className="set-bg">
                                        <h1 class="carousel-content-h1">Nike Air Max 97 Blue</h1>
                                        <p>Paul George is the rare high-percentage shooter</p>
                                        <div className='btn-buy'>
                                            <NavLink className={"c-button c-button--gooey"}  to={`/detail/11`}> Buy now
                                                <div className="c-button__blobs">
                                                    <div />
                                                    <div />
                                                    <div />
                                                </div>
                                            </NavLink>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                                <defs>
                                                    <filter id="goo">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                                        <feBlend in="SourceGraphic" in2="goo" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="carousel-flex">
                                <div class="carousel-img">
                                    <img src="https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png" alt />
                                </div>
                                <div class="carousel-content">
                                    <div className="set-bg">
                                        <h1 class="carousel-content-h1">Adidas Ultraboost 4</h1>
                                        <p>Paul George is the rare high-percentage shooter</p>
                                        <div className='btn-buy'>
                                        <NavLink className={"c-button c-button--gooey"}  to={`/detail/7`}> Buy now
                                                <div className="c-button__blobs">
                                                    <div />
                                                    <div />
                                                    <div />
                                                </div>
                                            </NavLink>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                                <defs>
                                                    <filter id="goo">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                                        <feBlend in="SourceGraphic" in2="goo" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="carousel-flex">
                                <div class="carousel-img">
                                    <img src="https://shop.cyberlearn.vn/images/nike-air-max-270-react.png" alt="..." />
                                </div>
                                <div class="carousel-content">
                                    <div className="set-bg">
                                        <h1 class="carousel-content-h1">Nike Air Max 270 React</h1>
                                        <p>Paul George is the rare high-percentage shooter</p>
                                        <div className='btn-buy'>
                                        <NavLink className={"c-button c-button--gooey"}  to={`/detail/12`}> Buy now
                                                <div className="c-button__blobs">
                                                    <div />
                                                    <div />
                                                    <div />
                                                </div>
                                            </NavLink>
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
                                                <defs>
                                                    <filter id="goo">
                                                        <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                                                        <feBlend in="SourceGraphic" in2="goo" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({})
export default connect(mapStateToProps)(Carousel)