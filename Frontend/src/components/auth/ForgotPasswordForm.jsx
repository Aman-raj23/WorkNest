import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your account email address.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate reset link dispatch (or backend api call)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Reset Password</h2>
        <p className="text-xs text-slate-500">
          Enter your email to receive a password recovery link
        </p>
      </div>

      {submitted ? (
        <div className="text-center space-y-4 py-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={24} />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">Recovery link sent!</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              If an account matches <span className="font-medium text-slate-700">{email}</span>, you will receive instructions shortly.
            </p>
          </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 hover:text-indigo-500 pt-2"
          >
            <ArrowLeft size={14} /> Back to Sign In
          </Link>
        </div>
      ) : (
        <>
          {error && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-600 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="name@worknest.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition text-slate-800"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60 cursor-pointer"
            >
              {loading ? 'Sending Instructions...' : 'Send Recovery Link'}
              <ArrowRight size={16} />
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 pt-2">
            Remember your credentials?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:underline">
              Sign In
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
