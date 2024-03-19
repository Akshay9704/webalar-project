import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Header = ({ setLoginModalShow }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between mx-10">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer mt-8"
      >
        <div className="bg-theme flex items-center justify-center w-12 h-12 rounded-full">
          <h1 className="text-xl text-white font-bold">A.</h1>
        </div>
        <h2 className="text-xl font-bold">
          Attendance
        </h2>
      </div>
      <ul className="hidden md:hidden lg:flex gap-8 mt-8">
        <li className="cursor-pointer hover:text-theme font-medium">Home</li>
        <li className="cursor-pointer hover:text-theme font-medium">About us</li>
        <li className="cursor-pointer hover:text-theme font-medium">Records</li>
      </ul>
      <div className="flex gap-4 items-center mt-8">
        <FaUser className="text-2xl cursor-pointer rounded-full text-center hover:bg-white w-12 h-12 px-3" />
        {!localStorage.getItem("token") ? (
          <button
            onClick={() => setLoginModalShow(true)}
            className="hover:bg-white rounded-full text-lg font-medium px-3 py-2"
          >
            Log in
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="hover:bg-white rounded-full text-lg font-medium px-3 py-2"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};
export default Header;
