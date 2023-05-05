import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerWrap">
                    <div className="footerLeft">
                        <div className="footerHeading">Genres</div>
                        <ul>
                            <li>Sci-Fi</li>
                            <li>Action</li>
                            <li>Romance</li>
                            <li>Thriller</li>
                            <li>Drama</li>
                            <li>Biography</li>
                        </ul>
                    </div>
                    <div className="footerMid">
                        <div className="footerHeading">Quick Links</div>
                        <ul>
                            <li>TV Shows</li>
                            <li>Movies</li>
                            <li>Popular</li>
                            <li>Trending</li>
                            <li>New Release</li>
                        </ul>
                    </div>
                    <div className="footerRight">
                        <div className="footerHeading">Subscribe For updtaes</div>
                        <form className="footerForm">
                            <input type="email" placeholder='Email...' />
                            <input type="text" placeholder='Message...' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footerCopy">
                    copyright &copy; DBros 2022-23
                </div>
            </footer>
        </>
    )
}

export default Footer