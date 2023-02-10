import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const diapatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    diapatch(logout());
    diapatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>

      {/* A List */}
      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
