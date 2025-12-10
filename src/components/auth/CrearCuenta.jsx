import "../../styles/CrearCuentaStyles.css";

export default function CrearCuenta() {
  return (
    <div className="google-wrapper">
      <div className="google-card">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png"
          alt="Google"
          className="google-logo"
        />

        <h2 className="title">Crea una cuenta de MathemaKids</h2>

        {/* Nombres */}
        <div className="row">
          <input type="text" placeholder="Nombre" className="input" />
          <input type="text" placeholder="Apellidos" className="input" />
        </div>

        {/* Usuario */}
        <div className="col">
          <input
            type="text"
            placeholder="Nombre de usuario"
            className="input input-full"
          />
          <small className="hint">
            Puedes utilizar letras, números y puntos
          </small>
        </div>

        {/* Contraseñas */}
        <div className="row">
          <input type="password" placeholder="Contraseña" className="input" />
          <input type="password" placeholder="Confirmación" className="input" />
        </div>

        <small className="hint">
          Utiliza ocho caracteres como mínimo con una combinación de letras,
          números y símbolos
        </small>

        {/* Mostrar contraseña */}
        <label className="show-pass">
          <input type="checkbox" /> Mostrar contraseña
        </label>

        <button className="btn">Siguiente</button>
        <p className="login-link">Prefiero iniciar sesión</p>
      </div>
    </div>
  );
}
