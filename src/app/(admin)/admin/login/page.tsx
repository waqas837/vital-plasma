"use client";
import { useState } from "react";
import { Mail, Lock, LoaderCircle, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Simulated loading
    router.push("/admin/dashboard");
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br flex items-center justify-center p-6 overflow-hidden">
      {/* Back to Home button */}
      <button
        onClick={goHome}
        className="absolute top-6 left-6 flex items-center space-x-1 text-[#FA812F]/80 hover:text-[#FA812F] transition-colors z-20"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Home</span>
      </button>

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-2xl opacity-20 animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-[10px] border border-white/20 shadow-lg shadow-black/20 p-8 space-y-6">
        <h1 className="text-4xl font-serif tracking-wider font-bold text-center text-[#FA812F]">Admin Login</h1>
        <p className="text-sm font-sans leading-relaxed text-center">
          Welcome back. Please sign in to your dashboard.
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FA812F] w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl focus:ring-2 focus:ring-[#FA812F]/40 outline-none transition-all"
              required
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FA812F] w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl focus:ring-2 focus:ring-[#FA812F]/40 outline-none transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl font-semibold bg-[#FA812F] text-white transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-[#fbba8f] focus:ring-2 focus:ring-[#FA812F]/40"
          >
            {loading ? (
              <span className="inline-flex items-center justify-center space-x-2 animate-pulse">
                <LoaderCircle className="w-5 h-5 animate-spin" />
                <span>Signing in...</span>
              </span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="absolute -inset-0.5 rounded-2xl z-[-1] bg-white/5 shadow-inner shadow-black/20 pointer-events-none" />
      </div>

      <style jsx>{
        `input::placeholder {
          font-family: 'Inter', sans-serif;
        }
        input {
          font-family: 'Inter', sans-serif;
        }`
      }</style>
    </div>
  );
}