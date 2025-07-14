import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Login form submitted:', formData);
  };

  const handleGoogleLogin = () => {
    // Handle Google OAuth login
    console.log('Google login initiated');
    // You can implement Google OAuth here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#715482]/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#715482]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/6 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-[#8B6B9A]/20 rounded-full animate-float"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10 animate-fade-in-up">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-8 group">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-[#715482] to-[#8B6B9A] bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
              DAaranya.AI
            </Link>
            <Sparkles className="w-6 h-6 text-[#715482] animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Welcome back
          </h1>
          <p className="text-gray-600 font-medium flex items-center justify-center gap-2">
            <Shield size={16} className="text-[#715482]" />
            Secure access to your AI workspace
          </p>

          {/* Trust indicators */}
          {/* <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={12} className="text-[#715482]" />
              <span>Instant Access</span>
            </div>
          </div> */}
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 transition-all duration-500 hover:shadow-3xl hover:bg-white/90 animate-slide-up relative">
          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#715482]/10 to-transparent rounded-tr-2xl"></div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-[#715482]/30 hover:shadow-md transition-all duration-300 font-medium group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#715482]/5 to-purple-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 relative z-10" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="group-hover:text-[#715482] transition-colors duration-300 relative z-10">Continue with Google</span>
          </button>

          <div className="mt-7">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form className="mt-7 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2 group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#715482] transition-colors duration-200">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#715482]/20 focus:border-[#715482] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#715482] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#715482] transition-colors duration-200">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#715482]/20 focus:border-[#715482] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#715482] transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#715482] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center group">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#715482] focus:ring-[#715482] border-gray-300 rounded transition-all duration-200"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200 cursor-pointer">
                  Remember me for 30 days
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="text-[#715482] hover:text-[#5a3f6b] font-semibold transition-colors duration-200 relative group">
                  Forgot password?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#715482] to-[#8B6B9A] text-white py-3.5 px-6 rounded-xl font-semibold hover:from-[#5a3f6b] hover:to-[#715482] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#715482] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign in to your account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#715482] hover:text-[#5a3f6b] font-semibold transition-colors duration-200 relative group">
                Create account
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#715482] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
