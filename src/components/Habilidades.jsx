const Habilidades = ()=>{
    return (
        <>
        <h2>Minhas habilidades</h2>
    <section className="section-container">
        <div className="section-content">
            <div className="card-container">
                <div className="card-section">
                    <div className="card-content">
                        <i className="card-icon fas fa-desktop"></i>
                        <h2 className="card-title">Desenvolvimento Web</h2>
                        <p className="card-text">Experiência no desenvolvimento de aplicações web front-end e back-end. Conhecimento em Spring, HTML, CSS e JavaScript, assim como em frameworks populares como React, Angular ou Vue.js. </p>
                    </div>
                </div>
                <div className="card-section">
                    <div className="card-content">
                        <i className="card-icon fas fa-mobile"></i>
                        <h2 className="card-title">Desenvolvimento Mobile</h2>
                        <p className="card-text">Prototipagem de layouts mobile com ênfase no Touch-friendly e usabilidade. Foco na experiência eficaz entre negócio e cliente. </p>
                    </div>
                </div>
                <div className="card-section">
                    <div className="card-content">
                        <i className="card-icon fas fa-database"></i>
                        <h2 className="card-title">Projeção e implementação de Bancos de Dados</h2>
                        <p className="card-text"> Habilidade em projetar e gerenciar bancos de dados relacionais (SQL) e não relacionais (NoSQL). Competência em consultas eficientes, otimização de desempenho e modelagem de dados.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Habilidades;