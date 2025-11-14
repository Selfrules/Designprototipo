import React, { useState } from 'react';
import { Lock, Mail, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in produzione userebbe Supabase Auth
    if (email === 'mattia@example.com' && password === 'admin123') {
      onLogin();
    } else {
      setError('Credenziali non valide');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D7EFF] via-[#7209B7] to-[#FF006E] flex items-center justify-center p-6">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white" />
      </div>

      <div className="relative z-10 w-full max-w-[440px]">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-3 bg-white border-4 border-[#000] rounded-lg shadow-brutal-lg mb-4">
            <h1 
              className="text-[#0A0A0A]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 900, fontSize: '32px' }}
            >
              MFDL Admin
            </h1>
          </div>
          <p className="text-white text-body">
            Accedi al pannello di controllo
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#FFFCF2] border-4 border-[#000] rounded-lg shadow-brutal-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email" 
                className="block mb-2 text-[#0A0A0A]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
              >
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mattia@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label 
                htmlFor="password" 
                className="block mb-2 text-[#0A0A0A]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '14px' }}
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-white border-3 border-[#000] rounded-lg shadow-brutal-sm focus:outline-none focus:shadow-brutal transition-all"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px' }}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-[#FF006E]/10 border-2 border-[#FF006E] rounded-lg">
                <AlertCircle className="w-5 h-5 text-[#FF006E]" />
                <p className="text-body-small text-[#FF006E]">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-[#0D7EFF] text-white border-4 border-[#000] rounded-lg shadow-brutal hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '16px' }}
            >
              Accedi
            </button>
          </form>

          {/* Mock credentials hint */}
          <div className="mt-6 p-4 bg-[#FFD60A]/20 border-2 border-[#FFD60A] rounded-lg">
            <p className="text-body-small text-[#0A0A0A] mb-1">
              <strong>Demo credentials:</strong>
            </p>
            <p className="text-body-small text-[#2D2D2D]">
              Email: mattia@example.com<br />
              Password: admin123
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center mt-6 text-white/80 text-body-small">
          Questo è un prototipo. In produzione userebbe Supabase Auth.
        </p>
      </div>
    </div>
  );
}
