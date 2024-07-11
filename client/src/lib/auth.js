import axios from "axios";

const fetchAuth = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/checkauth`,
      {
        withCredentials: true,
      }
    );
    return response.data.user;
  } catch (e) {
    return null;
  }
};

export default fetchAuth;
