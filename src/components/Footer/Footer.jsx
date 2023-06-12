import React from 'react'
import { connect } from 'react-redux'
import './footer.css';
const Footer = (props) => {
    return (
        <div>
            <footer id="footer">
                <div class="top_content">
                    <div class="container">
                        <div class="content_top">
                            <h3>get help</h3>
                            <p><a href="">Contact us</a></p>
                            <p><a href="">Shopping</a></p>
                            <p><a href="">NIKEID</a></p>
                            <p><a href="">Nike +</a></p>
                        </div>
                        <div class="content_top">
                            <h3>order</h3>
                            <p><a href="">Payment options</a></p>
                            <p><a href="">Shipping and delivery</a></p>
                            <p><a href="">Returns</a></p>
                        </div>
                        <div class="content_top">
                            <h3>register</h3>
                            <p>
                                Create one account to manage everything you do with Nike, from
                                your shopping preferences to your Nike+ activity
                            </p>
                            <a href="">Learn more</a>
                        </div>
                    </div>
                </div>
                <div class="bot_content">
                    <div class="container">
                        <div class="content_bot">
                            <h3>email sign up</h3>
                            <p>Be the first to know about new products and special offers</p>
                            <a href="">Sign up now</a>
                        </div>
                        <div class="content_bot">
                            <h3>gift cards</h3>
                            <p>Give the gift that always fits</p>
                            <a href="">View cards</a>
                        </div>
                        <div class="content_bot">
                            <h3>Stores near you</h3>
                            <p>Locate a Nike retail store or authorized retailer</p>
                            <a href="">Search</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Footer)