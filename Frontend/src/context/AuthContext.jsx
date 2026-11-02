import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial stored authentication
    try {
      const storedToken = localStorage.getItem('worknest_token');
      const storedUser = localStorage.getItem('worknest_user');

      if (storedToken) {
        setToken(storedToken);
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else if (storedToken) {
        // Fallback default user if token exists
        setUser({
          id: 'usr_default',
          name: 'Aman Raj',
          email: 'amanraj@worknest.com',
          role: 'Project Manager',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        });
      }
    } catch (err) {
      console.error('Failed to load session:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      // If backend is active, this calls /auth/login, otherwise graceful fallback
      let resUser, resToken;
      try {
        const res = await api.post('/auth/login', { email, password });
        resUser = res.data.user;
        resToken = res.data.token;
      } catch (e) {
        // Fallback for standalone demo mode
        resUser = {
          id: 'usr_demo',
          name: email.split('@')[0] || 'Aman Raj',
          email,
          role: 'Project Lead',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        };
        resToken = 'demo_jwt_token_' + Date.now();
      }

      setUser(resUser);
      setToken(resToken);
      localStorage.setItem('worknest_token', resToken);
      localStorage.setItem('worknest_user', JSON.stringify(resUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${resToken}`;
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || err.message || 'Login failed',
      };
    }
  };

  const register = async (userData) => {
    try {
      let resUser, resToken;
      try {
        const res = await api.post('/auth/register', userData);
        resUser = res.data.user;
        resToken = res.data.token;
      } catch (e) {
        // Fallback for standalone demo mode
        resUser = {
          id: 'usr_' + Date.now(),
          name: userData.name,
          email: userData.email,
          role: userData.role || 'Developer',
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(userData.name)}`,
        };
        resToken = 'demo_jwt_token_' + Date.now();
      }

      setUser(resUser);
      setToken(resToken);
      localStorage.setItem('worknest_token', resToken);
      localStorage.setItem('worknest_user', JSON.stringify(resUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${resToken}`;
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || err.message || 'Registration failed',
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('worknest_token');
    localStorage.removeItem('worknest_user');
    delete api.defaults.headers.common['Authorization'];
  };

  const updateUser = (data) => {
    const updated = { ...user, ...data };
    setUser(updated);
    localStorage.setItem('worknest_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        loading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
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
