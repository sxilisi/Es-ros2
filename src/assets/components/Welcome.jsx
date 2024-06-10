import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h3> Welcome page</h3>
      <Link to="/users">users</Link>
    </div>
  );
}
