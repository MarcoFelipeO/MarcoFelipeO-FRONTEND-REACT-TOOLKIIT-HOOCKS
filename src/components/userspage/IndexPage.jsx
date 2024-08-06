import React from 'react';
import { Link } from 'react-router-dom';

import '../../style/custom.css';

const IndexPage = () => {
    return (
        <div className="background-image">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1 className='text-white'>Bienvenidos</h1>
                        <p className='text-white'>El mundo de la programación.</p>
                        <Link to="/login" className="btn btn-danger">¿Te gustaria iniciar Sesion?</Link>



                        <div className="row mt-5">
                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Avances en mis proyectos</h5>
                                        <p className="card-tex text-white">Esta es una breve descripción de la primera tarjeta. Contiene información breve sobre el contenido.</p>
                                        <div className="d-flex align-items-center">
                                            <Link to="/link1" className="btn btn-outline-danger me-2">Ir a Avances de Proyectos </Link>
                                            <a href="https://github.com/MarcoFelipeO" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-github github-icon"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-6">
                                <div className="card text-bg-dark">
                                    <div className="card-body">
                                        <h5 className="card-title">Descarga mi CV aqui pudes tener mas informacion </h5>
                                        <p className="card-text text-white">Esta es una breve descripción de la segunda tarjeta. Contiene información breve sobre el contenido.</p>
                                        <Link to="/link2" className="btn btn btn-outline-danger">Descargar CV </Link>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;