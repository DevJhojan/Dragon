import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/dragon.css"
import { Link } from "react-router-dom";

export function HeaderSimple({ title, link1, nameOne, link2, nameTwo }) {    
    /**
     * The "simple" header is a header that works 
     * perfectly when it has two Links 
     * 
     * @JhojanD. 
     */
  return (
    <header className="container-sm  bg-dark rounded-3 position-relative">
      <h1 className="text-light p-3 ms-5 d-inline-block">{title}</h1>
      <nav className="d-inline-block position-absolute  mt-3 ms-20 translate-middle-x ">
        <li className="p-1">
          <Link className="btn btn-danger  ms-2 " to={link1}>
            {nameOne}
          </Link>
          <Link className="btn btn-warning  ms-2" to={link2}>
            {nameTwo}
          </Link>
        </li>
      </nav>
    </header>
  );
}

