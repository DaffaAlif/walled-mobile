import axios from "axios";

// Fungsi untuk membuat instance axios
const createAPIClient = () => {
  const apiClient = axios.create({
    baseURL:
      "https://express-firebase-daffaalif-daffaalifs-projects.vercel.app", // Ganti dengan URL API Anda
    headers: {
      "Content-Type": "application/json",
    },
  });

  return apiClient;
};

// Default API instance
const api = createAPIClient();

// Login Function
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("auth/login", {
      email: email,
      password: password,
    });
    return response.data; // Return token or user info
  } catch (error: any) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || error.message; // Propagate error for handling
  }
};

export const register = async (
  email: string,
  password: string,
  fullname: string,
  phone_no: string
) => {
  try {
    const response = await api.post("auth/register", {
      email,
      password,
      fullname,
      phone_no,
    });
    return response.data; // Return success message or token
  } catch (error: any) {
    console.error("Register error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const currentUser = async (token: string | null | undefined) => {
  try {
    const response = await api.get("users/current", {
      headers: {
        authorization: token, // Authorization header
      },
    });
    return response.data; // Return success message or token
  } catch (error: any) {
    console.error("Current error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const userTransaction = async (token: string | null | undefined) => {
  try {
    const response = await api.get("transaction/logs", {
      headers: {
        authorization: token, // Authorization header
      },
    });
    return response.data; // Return success message or token
  } catch (error: any) {
    console.error("Register error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const topup = async (
  token: string | null | undefined,
  amount: string,
  from_user: string,
  to_user: string,
  notes: string
) => {
  try {
    const response = await api.post(
      "transaction/topup",
      {
        amount: amount,
        from_user: from_user,
        to_user: to_user,
        notes: notes,
      },
      {
        headers: {
          authorization: token, // Authorization header
        },
      }
    );
    return response; // Return success message or token
  } catch (error: any) {
    console.error("Register error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const transfer = async (
  token: string | null | undefined,
  amount: string,
  from_user: string,
  to_user: string,
  notes: string
) => {
  try {
    const response = await api.post(
      "transaction/transfer",
      {
        amount: amount,
        from_user: from_user,
        to_user: to_user,
        notes: notes,
      },
      {
        headers: {
          authorization: token, // Authorization header
        },
      }
    );
    return response.data; // Return success message or token
  } catch (error: any) {
    console.error("Register error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export default api;
