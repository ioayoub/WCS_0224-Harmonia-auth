import axios from "axios";
import { useOutletContext } from "react-router-dom";

export default function LogoutPage() {
  const { setCurrentUser } = useOutletContext();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:3310/api/auth/logout", {
        withCredentials: true, // enable credentials here to allow express to read cookies
      });

      setCurrentUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button type="button" onClick={handleLogout}>
      Se déconnecter
    </button>
  );
}
