import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Check, ArrowRight, Sparkles, Shield, Users, Zap, Award } from 'lucide-react';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    agreeToTerms: false,
    orgName: '',
    orgDomain: '',
    orgLogo: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value)
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validate personal details before moving to org step
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    setStep(2);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate organization details
    if (!formData.orgName || !formData.orgDomain) {
      alert('Please fill in organization name and domain');
      return;
    }
    // Submit all data
    console.log('Signup form submitted:', formData);
  };

  const handleGoogleSignup = () => {
    // Mock Google OAuth signup
    console.log('Google signup initiated');
    setIsGoogleLoading(true);

    // Simulate OAuth response after 2 seconds
    setTimeout(() => {
      // Mock user data from Google OAuth
      const mockGoogleUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gmail.com',
        phone: '',
        password: '', // OAuth users don't need password
        confirmPassword: '',
        agreeToTerms: true, // Assume terms accepted via OAuth
        orgName: '',
        orgDomain: '',
        orgLogo: null
      };

      // Update form data with Google user info
      setFormData(prevData => ({
        ...prevData,
        ...mockGoogleUser
      }));

      // Skip to Step 2 since personal details are filled
      setStep(2);
      setIsGoogleLoading(false);

      console.log('Google OAuth successful, proceeding to organization setup');
    }, 2000);
  };

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
    { text: 'Contains lowercase letter', met: /[a-z]/.test(formData.password) },
    { text: 'Contains number', met: /\d/.test(formData.password) }
  ];  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-80 h-80 bg-gradient-to-r from-[#6B4F4E]/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#6B4F4E]/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-float-delayed"></div>
        <div className="absolute top-2/3 left-1/6 w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#8B6B9A]/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-blue-400/30 rounded-full animate-float-delayed"></div>
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
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-[#6B4F4E] to-[#8B6B9A] bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
              DAaranya.AI
            </Link>
            <Sparkles className="w-6 h-6 text-[#6B4F4E] animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {step === 2 && formData.firstName ? `Welcome ${formData.firstName}!` : 'Create your account'}
          </h1>
          <p className="text-gray-600 font-medium flex items-center justify-center gap-2">
            <Users size={16} />
            {step === 2 && formData.firstName ? 'Set up your organization' : 'Join thousands of businesses using AI'}
          </p>

          {/* Trust indicators */}
          {/* <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Shield size={12} className="text-green-500" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-1">
              <Award size={12} className="text-[#6B4F4E]" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-1">
              <Zap size={12} className="text-blue-500" />
              <span>30s Setup</span>
            </div>
          </div> */}
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8 transition-all duration-500 hover:shadow-3xl hover:bg-white/90 animate-slide-up relative">
          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#6B4F4E]/10 to-transparent rounded-tr-2xl"></div>

          {/* Google Signup Button - Only show on Step 1 */}
          {step === 1 && (
            <>
              <button
                onClick={handleGoogleSignup}
                disabled={isGoogleLoading}
                className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border-2 border-gray-200 rounded-xl text-gray-700 bg-white hover:bg-gray-50 hover:border-[#6B4F4E]/30 hover:shadow-md transition-all duration-300 font-medium group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B4F4E]/5 to-purple-500/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                {isGoogleLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-[#6B4F4E] rounded-full animate-spin"></div>
                    <span className="relative z-10">Authenticating...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 relative z-10" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="group-hover:text-[#6B4F4E] transition-colors duration-300 relative z-10">Continue with Google</span>
                  </>
                )}
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
            </>
          )}

          {/* Stepper UI */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className={`flex items-center gap-2 text-sm font-semibold ${step === 1 ? 'text-[#6B4F4E]' : 'text-gray-400'}`}>
              <Check className={`w-5 h-5 ${step === 1 ? 'text-[#6B4F4E]' : 'text-gray-300'}`} /> Personal details
            </div>
            <div className="w-8 h-0.5 bg-gray-200 rounded-full"></div>
            <div className={`flex items-center gap-2 text-sm font-semibold ${step === 2 ? 'text-[#6B4F4E]' : 'text-gray-400'}`}>
              <Check className={`w-5 h-5 ${step === 2 ? 'text-[#6B4F4E]' : 'text-gray-300'}`} /> Organization
            </div>
          </div>

          {/* Step 1: Personal Details */}
          {step === 1 && (
            <form className="mt-7 space-y-5" onSubmit={handleNext}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2 group">
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                  First name
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                    placeholder="John"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
              <div className="space-y-2 group">
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                  Last name
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                    placeholder="Doe"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                  placeholder="john@company.com"
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            <div className="space-y-2 group">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                Phone Number (optional)
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                  placeholder="Enter your valid phone number"
                />
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            <div className="group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#6B4F4E] transition-colors">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#6B4F4E]/50 focus:border-[#6B4F4E] outline-none transition-all duration-300 bg-white/80 hover:bg-white hover:border-gray-300"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6B4F4E] transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Enhanced Password Requirements */}
              {formData.password && (
                <div className="mt-3 p-3 bg-gray-50/80 rounded-xl border border-gray-200/50">
                  <p className="text-xs font-medium text-gray-700 mb-2">Password requirements:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs">
                        <div className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 ${req.met ? 'bg-green-500 scale-110' : 'bg-gray-300'}`}>
                          {req.met && <Check size={8} className="text-white" />}
                        </div>
                        <span className={`transition-colors ${req.met ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="group">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#6B4F4E] transition-colors">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#6B4F4E]/50 focus:border-[#6B4F4E] outline-none transition-all duration-300 bg-white/80 hover:bg-white hover:border-gray-300"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6B4F4E] transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-200">⚠️ Passwords do not match</p>
              )}
              {formData.confirmPassword && formData.password === formData.confirmPassword && formData.confirmPassword.length > 0 && (
                <p className="mt-2 text-xs text-green-600 bg-green-50 p-2 rounded-lg border border-green-200">✅ Passwords match!</p>
              )}
            </div>

            <div className="flex items-start p-4 bg-gray-50/80 rounded-xl border border-gray-200/50">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-[#6B4F4E] focus:ring-[#6B4F4E] border-gray-300 rounded mt-1 transition-colors"
              />
              <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-gray-700 cursor-pointer">
                I agree to the{' '}
                <Link to="/terms" className="text-[#6B4F4E] hover:text-[#5a3f6b] font-medium relative group">
                  Terms of Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B4F4E] transition-all duration-300 group-hover:w-full"></span>
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-[#6B4F4E] hover:text-[#5a3f6b] font-medium relative group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B4F4E] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#6B4F4E] to-[#8B6B9A] text-white py-3.5 px-6 rounded-xl font-semibold hover:from-[#5a3f6b] hover:to-[#6B4F4E] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B4F4E] focus:ring-offset-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
              disabled={!formData.agreeToTerms}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Next
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </form>
          )}

          {/* Step 2: Organization Details */}
          {step === 2 && (
            <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2 group">
                <label htmlFor="orgName" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                  Organization Name
                </label>
                <div className="relative">
                  <input
                    id="orgName"
                    name="orgName"
                    type="text"
                    required
                    value={formData.orgName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                    placeholder="Enter your organization name"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="orgDomain" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                  Organization Domain
                </label>
                <div className="relative">
                  <input
                    id="orgDomain"
                    name="orgDomain"
                    type="text"
                    required
                    value={formData.orgDomain}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                    placeholder="yourcompanyname.com"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="orgLogo" className="block text-sm font-semibold text-gray-700 group-focus-within:text-[#6B4F4E] transition-colors duration-200">
                  Logo (optional)
                </label>
                <div className="relative">
                  <input
                    id="orgLogo"
                    name="orgLogo"
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6B4F4E]/20 focus:border-[#6B4F4E] outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#6B4F4E] to-purple-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>

              <div className="flex justify-between gap-4 mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 bg-gray-100 text-[#6B4F4E] py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B4F4E] focus:ring-offset-2 shadow group relative overflow-hidden"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-gradient-to-r from-[#6B4F4E] to-[#8B6B9A] text-white py-3.5 px-6 rounded-xl font-semibold hover:from-[#5a3f6b] hover:to-[#6B4F4E] transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B4F4E] focus:ring-offset-2 shadow-lg hover:shadow-xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <span className="relative z-10">Create Organization</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-[#6B4F4E] hover:text-[#5a3f6b] font-medium transition-colors relative group">
                Sign in
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B4F4E] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>

            {/* Security notice */}
            {/* <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield size={14} className="text-green-500" />
                <span>Your data is protected with bank-level encryption</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
