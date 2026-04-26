// pages/Home.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { Button } from "../components/UI/Button.jsx";
import { Status } from "../components/UI/StatusBadge.jsx";
import { Status_mobile } from "../components/UI/StatusBadge_m.jsx";

function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bienvenue sur le Starter Kit
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Template moderne React + Node.js + MySQL
        </p>
        <div className="flex gap-4 justify-center">
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className="px-6 py-3 bg-indigo-60083 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Accéder au Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/register"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Commencer
                <Button variant="inactive"> Boutton </Button>
                <Button variant="active"> Boutton </Button>
                <Button variant="submit"> Boutton </Button>
                <Status variant="valid"> Validé </Status>
                <Status variant="refuse"> Refusé </Status>
                <Status variant="review"> À revoir </Status>
                <Status variant="wait"> En attente </Status>
                <Status_mobile variant="valid"> </Status_mobile>
                <Status_mobile variant="refuse"> </Status_mobile>
                <Status_mobile variant="review"> </Status_mobile>
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Se connecter
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
