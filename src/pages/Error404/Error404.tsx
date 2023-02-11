import { useNavigate } from "react-router-dom";
import { Error404Styled, Link } from "./Error404.style";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <Error404Styled>
      <div className="errorContainer">
        <h1>O nie! Mamy tutaj błąd 404 (▰˘︹˘▰)</h1>{" "}
        <h4>Wygląda na to, że strona której szukasz nie istnieje</h4>
        <h4>
          Spróbuj <Link onClick={() => navigate(-1)}>wrócić</Link>, albo odwiedź{" "}
          <Link onClick={() => navigate("/", { replace: true })}>stronę główną</Link>
        </h4>
      </div>
    </Error404Styled>
  );
};

export default Error404;
