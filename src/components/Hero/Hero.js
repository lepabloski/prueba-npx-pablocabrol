import React from 'react'

function Hero() {
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={require('./asado-a-la-estaca-grillshop.jpg')} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">GrillShop es Todo lo que tu Parrilla nececita</h1>
                    <p className="lead">Sumate a una nueva casta de Parrilleros!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Suscribirme</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Quiero Saber Más!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
