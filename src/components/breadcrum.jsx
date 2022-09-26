import { Link, useLocation } from "react-router-dom";

const Breadcrum = () => {
  const location = useLocation();
  const active = location.pathname;
  return (
    <div className="breadcrumb-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrum;
