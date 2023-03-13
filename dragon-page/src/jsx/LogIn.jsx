import { Link } from "react-router-dom";
function LogIn({link1}) {
  return (
    <div className="container bg-dark mt-5 rounded-3 p-4">
      <h1 className="text-light">Entrar</h1>

      <input
        type="email"
        name="email"
        id="email"
        className="form-control bg-dark text-light border-bottom border-danger m-3"
        placeholder="user@ejemplo.com"
      />
      <input
        type="password"
        name="password"
        id="password"
        className="form-control bg-dark text-light border-bottom border-danger m-3"
        placeholder="Digit Password"
      />
      <Link className="btn btn-warning  ms-2" to={link1}>
        Entrar
      </Link>
    </div>
  );
}
export default LogIn;
