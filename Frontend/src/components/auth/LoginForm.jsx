import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
    setError("");
    setLoading(true);

    // Save demo session to localStorage for immediate client-side testing
    localStorage.setItem(
      "worknest_user",
      JSON.stringify({
        id: "usr_demo",
        name: email.split("@")[0] || "Demo User",
        email: email,
        role: "Project Manager",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      })
    );
    localStorage.setItem("worknest_token", "demo_jwt_token_12345");

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 400);
  };

  const handleFillDemo = () => {
    setEmail("amanraj@worknest.com");
    setPassword("password123");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome Back</h2>
        <p className="text-xs text-slate-500">Sign in to manage your WorkNest projects</p>
      </div>

      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-600 font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-700">Email Address</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail size={17} />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="amanraj@worknest.com"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-slate-800"
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-slate-700">Password</label>
            <Link
              to="/forgot-password"
              className="text-[11px] font-medium text-indigo-600 hover:text-indigo-500 hover:underline cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock size={17} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-slate-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60 cursor-pointer"
        >
          {loading ? "Signing In..." : "Sign In to WorkNest"} <ArrowRight size={16} />
        </button>
      </form>

      <div className="pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={handleFillDemo}
          className="w-full py-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-medium rounded-xl transition cursor-pointer"
        >
          Auto-fill Demo Credentials
        </button>
      </div>

      <p className="text-center text-xs text-slate-500">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-indigo-600 hover:underline">
          Create one now
        </Link>
      </p>
    </div>
  );
}
