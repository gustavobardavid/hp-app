const Footer = () => {
    return (
    <>
    <div className="hero-section text-center text-white bg-dark py-5 vh-100 d-flex align-items-center">
      <div className="container">
        <h1 className="display-4 mb-4">Receba curiosidades por e-mail</h1>
         <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Digite seu e-mail" />
              </div>
              <hr />
              <button type="submit" className="btn btn-primary btn-block">Inscrever-se</button>
            </form>
          </div>
        </div>
        <div className="mt-5">
          <p>Conheça mais:</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-outline-light mr-3">Sobre nós</a>
            <a href="#" className="btn btn-outline-light">Contato</a>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default Footer