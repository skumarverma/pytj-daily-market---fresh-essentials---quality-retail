import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  Navigation,
  Car,
  Compass
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/marketData';
import { OfficialSignboardCard } from './BrandSignboard';

interface ContactModuleProps {
  onNavigate?: (moduleId: string) => void;
}

export const ContactModule: React.FC<ContactModuleProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    inquiryType: 'Daily Fresh Availability',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const inquiryOptions = [
    'Daily Fresh Availability (Vegetables / Fish / Chicken)',
    'Bulk / Wholesale B2B Supply (Hotels / Restaurants / Catering)',
    'Grocery & Staples Inquiry',
    'Cosmetics & Skincare Inquiries',
    'Direct Message to MD Smt. Yabom Buchi Nyokir'
  ];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `Hello PYTJ Daily Market Owner!\n\nName: ${formData.name || 'A Customer'}\nPhone: ${formData.phone || 'Not provided'}\nInquiry: ${formData.inquiryType}\nMessage: ${formData.message || 'I would like to connect regarding store items.'}`;
    const url = `https://wa.me/${BUSINESS_DATA.whatsappPhone}?text=${encodeURIComponent(formattedMsg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleSubmitOnline = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact" className="py-8 md:py-12 space-y-14">
      {/* 1. Module Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          Direct Connect • Contact Owners & Store Location
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 font-serif tracking-tight">
          Connect Directly with the Store Owners
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
          We are dedicated to serving our customers directly with complete transparency. Call, message, or visit our retail facility at Nyokir Complex, '0' Point Tinali, Itanagar.
        </p>
      </div>

      {/* 2. Official Business Signboard Banner */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
            Official Registered Business Board
          </span>
          <span className="text-xs text-amber-700 font-medium">
            Government of Arunachal Pradesh Registered
          </span>
        </div>
        <OfficialSignboardCard />
      </div>



      {/* 4. Horizontal Store Location & Live Map Section (Left to Right Way) */}
      <section id="store-location" className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Column: Location, Landmarks, Parking & Visit Information */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-stone-50/60 border-b lg:border-b-0 lg:border-r border-stone-200">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                <span>Store Location & Directions</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
                  Visit Us at Nyokir Complex
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  Centrally located at the vital '0' Point Tinali junction in Itanagar with easy highway connectivity and dedicated parking.
                </p>
              </div>

              {/* Verified Address Card */}
              <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Verified Physical Address</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-900 font-medium leading-snug">
                  Flat/Block No. 01, Nyokir Complex, '0' Point Tinali, Itanagar, Papum Pare District, Arunachal Pradesh – 791111
                </p>
              </div>

              {/* Visiting Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 text-[11px]">
                    <Navigation className="w-3.5 h-3.5 text-amber-600" />
                    <span>Prime Junction</span>
                  </div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    Zero Point Tinali junction connecting NH-415 and Gompa Road.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-stone-200 space-y-1">
                  <div className="font-bold text-stone-900 flex items-center gap-1.5 text-[11px]">
                    <Car className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Parking & Loading</span>
                  </div>
                  <p className="text-stone-600 text-[11px] leading-relaxed">
                    Spacious parking for retail shoppers and loading space for bulk pickups.
                  </p>
                </div>
              </div>

              {/* Service Schedule */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                <div>
                  <span className="font-bold block">Schedule: Open All 7 Days</span>
                  <span className="text-[11px] text-emerald-800">Fresh farm produce and daily supplies arrive every morning.</span>
                </div>
              </div>
            </div>

            {/* Location Navigation Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://maps.google.com/?q=Nyokir+Complex+0+Point+Tinali+Itanagar+Arunachal+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-stone-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-stone-950" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-900" />
              </a>

              <a
                href={`tel:${BUSINESS_DATA.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-stone-600" />
                <span>Call for Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Horizontal Map Display */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] h-full bg-stone-100 flex flex-col">
            {/* Live Interactive OpenStreetMap Centered on Nyokir Complex, '0' Point Tinali */}
            <iframe
              title="PYTJ Daily Market Store Location Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=93.6150%2C27.0920%2C93.6434%2C27.1114&layer=mapnik&marker=27.1017%2C93.6292"
              className="w-full h-full flex-1 border-0 min-h-[380px] sm:min-h-[460px]"
              loading="lazy"
            />

            {/* Floating Info Overlay On Map Top Left */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-stone-900">PYTJ Daily Market</span>
              </div>
              <p className="text-[11px] text-stone-600 mt-0.5">
                Nyokir Complex, '0' Point Tinali, Itanagar
              </p>
              <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500 font-mono">
                <span>Lat: 27.1017° N</span>
                <span>Long: 93.6292° E</span>
              </div>
            </div>

            {/* Bottom Bar below map */}
            <div className="p-3 bg-stone-900 text-stone-300 text-xs flex flex-wrap items-center justify-between gap-2 px-4 border-t border-stone-800">
              <div className="flex items-center gap-2 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Zero Point Tinali Junction • NH-415 Intersection, Itanagar</span>
              </div>
              <a
                href="https://maps.google.com/?q=Nyokir+Complex+0+Point+Tinali+Itanagar+Arunachal+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
              >
                <span>Live GPS Navigation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Inquiry Form (Clean, Dedicated Section without duplicates) */}
      <section id="contact-form" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200 shadow-sm w-full scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Send className="w-3.5 h-3.5 text-amber-700" />
            <span>Send Direct Inquiry</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900">
            Message the Store Owners Directly
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Need daily fresh produce, a wholesale quotation, or specific items kept aside? Send your message straight to store management.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 max-w-xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 font-serif">
              Thank you! Your inquiry has been prepared.
            </h3>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              The owners at PYTJ Daily Market will review your request. For immediate pickup or urgent stock availability, call us directly at <strong>+91 8575291355</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`tel:${BUSINESS_DATA.primaryPhone}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-600 text-white hover:bg-amber-700 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store Now</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', inquiryType: inquiryOptions[0], message: '' });
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-stone-800 border border-stone-300 hover:bg-stone-50 cursor-pointer"
              >
                <span>Send Another Inquiry</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="w-full space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh / Nabam / Taba"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Inquiry Category
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                {inquiryOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                Your Message / Items & Quantity Needed
              </label>
              <textarea
                rows={4}
                placeholder="Describe what you need (e.g. 5kg fresh Rohu fish, fresh greens, daily kitchen grocery, wholesale requirement, etc.)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-stone-50/50"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Inquiry via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitOnline}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4 text-stone-600" />
                <span>Submit Message Here</span>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 6. Module Page Navigation Footer */}
      {onNavigate && (
        <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('quality')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Quality Standards & Cold Storage</span>
          </button>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-xs cursor-pointer ml-auto"
          >
            <span>Back to Home Overview</span>
          </button>
        </div>
      )}
    </div>
  );
};

