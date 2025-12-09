import React from 'react';

// import { Heart, Calendar, Phone, Mail, MapPin} from 'lucide-react';

const Heart = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const Calendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const Droplet = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7Z" /></svg>
);
const Facebook = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Twitter = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.1 3.4 5.2-1.9.1-3.1-.7-4.4-1.9-2 .1-3.8.7-5 2.5-.1 1.2.8 2.3 2.5 3.1-2.2.1-4.4-.6-5.2-2.3s-.1-3.1 1.4-4.4c-2.3.1-4.2.8-5.2 2-1.2 2.3-.4 5.1 1.4 6.9 1.9 1.9 4.2 2.8 6.9 3.1 2 .1 4-.6 5.2-1.9 1.4-1.4 2.3-3.1 2.8-5.2.7-2.3.1-4.2-1.4-5.2s-3.1-1.4-5.2-1.4-4 .6-5.2 1.9" /></svg>
);
const Instagram = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);
const Linkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const Phone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const Mail = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const MapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

/**
 * Reusable component for footer links.
 */
const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </a>
  </li>
);

/**
 * Reusable component for contact items.
 */
const ContactInfo = ({ Icon, children }) => (
  <li className="flex items-start">
    <Icon className="flex-shrink-0 w-5 h-5 text-red-500 mt-1 mr-3" />
    <span className="text-gray-400">{children}</span>
  </li>
);

/**
 * The main Website Footer component.
 */
export default function Footer() {
  return (
    <footer className="font-inter">

    

      {/* --- Main Footer Section (Dark) --- */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Column 1: Brand & Socials */}
            <div>
              <div className="flex items-center mb-4">
                <Droplet className="w-8 h-8 text-red-500 fill-current mr-2" />
                <span className="text-3xl font-bold">BloodDonate</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs">
                Connecting donors with those in need. Together, we save lives one donation at a time.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Twitter className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300"><Linkedin className="w-6 h-6" /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">How to Donate</FooterLink>
                <FooterLink href="#">Eligibility</FooterLink>
                <FooterLink href="#">FAQ</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <FooterLink href="#">Donor Portal</FooterLink>
                <FooterLink href="#">Find a Drive</FooterLink>
                <FooterLink href="#">Blood Types</FooterLink>
                <FooterLink href="#">Donation Centers</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-5">
                <ContactInfo Icon={Phone}>
                  1-800-DONATE-1
                </ContactInfo>
                <ContactInfo Icon={Mail}>
                  info@blooddonate.org
                </ContactInfo>
                <ContactInfo Icon={MapPin}>
                  123 Health Street<br />Medical District, NY 10001
                </ContactInfo>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Copyright Bar --- */}
      <div className="bg-gray-900 border-t border-gray-800 py-6">
        <p className="text-center text-gray-500 text-sm">
          © 2025 BloodDonate. All rights reserved. Saving lives together.
        </p>
      </div>
    </footer>
  );
}
