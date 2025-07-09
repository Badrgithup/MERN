import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('abbk_user');
    if (storedUser) {
      const { email, role } = JSON.parse(storedUser);
      setCurrentUser({ email });
      setUserRole(role);
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      const userData = { email, role };
      setCurrentUser({ email });
      setUserRole(role);
      localStorage.setItem('abbk_user', JSON.stringify(userData));
      return true;
    } catch (error) {
      console.error("Login failed:", error);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
    localStorage.removeItem('abbk_user');
  };

  const value = {
    currentUser,
    userRole,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}