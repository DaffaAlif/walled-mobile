import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "@/hooks/useStorageState";
import { login } from "@/api/api"; // Import the login function


const AuthContext = createContext<{
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>(null!);

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");

  const signIn = async (email: string, password: string) => {
    try {
      const data = await login(email, password); // Call the login API
      if (data?.token) {
        setSession(data.token); // Store the token in session
        console.log("Login successful, token stored.");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Propagate error to handle in UI
    }
  };

  const signOut = () => {
    setSession(null); // Clear session/token
    console.log("User signed out");
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
