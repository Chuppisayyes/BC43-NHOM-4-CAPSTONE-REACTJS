import React from 'react'
import { connect } from 'react-redux'

const SearchPage = (props) => {
    return (
        <div>
            <div className="search-page">
                <div className="container">
                    <div className="header-search-page">
                        <h4>Search</h4>
                    </div>
                    <div className="search-bar">
                        <div className="input-container">
                            <input type="text" id="input" required />
                            <label htmlFor="input" className="label">Product name ...</label>
                            <div className="underline" />
                        </div>
                        <div className="button-search">
                            <button class="btn-search">
                                <button class="btn-search ">
                                    Search
                                </button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(SearchPage)