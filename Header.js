import React from "react"

export default function Header() {
    return(
        <div className="container">
            <div className="card-container">
                <div className="card-block">
                    <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
                        className="card-logo" />
                    <div className="card-information">
                        <h1 className="card-title">Amanda Cardoso</h1>
                        <h3>FrontEnd Developer</h3>
                        <h4>amandacardoso.website</h4>
                        <button className="card-button1">
                            <ion-icon name="mail-outline"></ion-icon> Email
                        </button>
                        <button className="card-button2">
                            <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
                        </button>
                    </div>
                  
                </div>

            </div>
    </div>
    )
}