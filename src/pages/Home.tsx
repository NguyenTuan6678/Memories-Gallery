import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>
        <Link to="/Spring">Spring</Link>
      </h1>
      <h1>
        <Link to="/Summer">Summer</Link>
      </h1>
      <h1>
        <Link to="/Autumn">Autumn</Link>
      </h1>
      <h1>
        <Link to="/Winter">Winter</Link>
      </h1>
    </div>
  );
}
