"use client";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white">
      {/* Top gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FA812F] to-[#AF1B31]"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">BloodFlow</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Empowering donations. Saving lives. Join us on the journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>

        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: <a href="mailto:Ap@vitalplasma.com" className="hover:text-white">ap@vitalplasma.com</a></li>
            <li>Phone: <span className="hover:text-white">(844) 908-4825</span></li>
            <li>Support Hours: Mon–Fri, 9am–5pm</li>
            <li>Address: 12381 s Cleveland ave
              Fort Myers FL 33907</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#FA812F] transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#FA812F] transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#FA812F] transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:Ap@vitalplasma.com" className="hover:text-[#FA812F] transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-white/10">
        © {new Date().getFullYear()} BloodFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
