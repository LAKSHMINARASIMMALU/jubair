import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, Calendar } from 'lucide-react';
import FloatingElements from './components/FloatingElements';
import CountdownTimer from './components/CountdownTimer';
import FallingPetals from './components/FallingPetals';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 via-orange-100 to-teal-100 overflow-hidden relative font-serif">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Falling Petals */}
      <FallingPetals />
      
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-full opacity-40 animate-pulse delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          {/* Bismillah */}
          <div className="mb-8">
            <p className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent font-bold arabic-style">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <p className="text-base md:text-lg bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mt-3 italic font-medium">In the name of Allah, the Most Gracious, the Most Merciful</p>
          </div>

          {/* Mosque Dome Silhouette */}
          <div className="relative mb-8">
            <div className="w-40 h-20 bg-gradient-to-t from-purple-400 via-pink-400 to-orange-400 rounded-t-full opacity-70 transform-gpu rotate-3d animate-float shadow-lg"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-gradient-to-t from-teal-500 to-emerald-500 rounded-t-full opacity-70 shadow-md"></div>
          </div>

          {/* Invitation Header */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 via-rose-600 to-orange-600 bg-clip-text text-transparent drop-shadow-2xl elegant-font">
              You're Invited By
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed font-medium">
Kajamoideen J & Jamila K
            </p>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent max-w-2xl mx-auto leading-relaxed font-medium">
              To celebrate the joyous engagement ceremony of
            </p>
          </div>

          {/* Couple Names */}
          <div className="relative mb-12 p-10 backdrop-blur-lg bg-gradient-to-br from-white/40 via-purple-50/30 to-pink-50/40 rounded-3xl shadow-2xl border border-white/50 transform-gpu hover:scale-105 transition-all duration-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Heart className="w-10 h-10 text-pink-500 animate-pulse drop-shadow-lg" fill="currentColor" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-rose-700 bg-clip-text text-transparent mb-3 elegant-font">
              Faridh Khan
            </h2>
            <div className="flex items-center justify-center my-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
              <span className="mx-6 text-3xl bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-bold">&</span>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-700 via-emerald-700 to-green-700 bg-clip-text text-transparent elegant-font">
             Fowziya Begam
            </h2>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-100/60 to-pink-100/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 transform-gpu hover:scale-105 transition-all duration-300">
              <Calendar className="w-10 h-10 text-purple-600 mb-4 drop-shadow-md" />
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Date</h3>
              <p className="text-center text-gray-700 font-medium">10th August 2025</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-pink-100/60 to-rose-100/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 transform-gpu hover:scale-105 transition-all duration-300">
              <Clock className="w-10 h-10 text-pink-600 mb-4 drop-shadow-md" />
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Time</h3>
              <p className="text-center text-gray-700 font-medium">11:00 A.M</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-orange-100/60 to-yellow-100/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 transform-gpu hover:scale-105 transition-all duration-300">
              <MapPin className="w-10 h-10 text-orange-600 mb-4 drop-shadow-md" />
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Venue</h3>
              <p className="text-center text-gray-700 font-medium">GJR Mahal<br />B. Mutlur</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-gradient-to-br from-teal-100/60 to-emerald-100/60 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30 transform-gpu hover:scale-105 transition-all duration-300">
              <Heart className="w-10 h-10 text-teal-600 mb-4 drop-shadow-md" />
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Function</h3>
              <p className="text-center text-gray-700 font-medium">Engagement<br />Ceremony</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <CountdownTimer targetDate="2025-08-10T11:00:00" />
        </section>

        {/* Location Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-50/50 via-pink-50/50 to-orange-50/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-12 elegant-font">Find Us Here</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-8 bg-gradient-to-br from-white/60 to-purple-50/40 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-6">Venue Details</h3>
                  <p className="text-gray-700 mb-3 text-lg"><strong className="text-purple-700">Location:</strong> GJR Mahal, B. Mutlur</p>
                  <p className="text-gray-700 mb-6 text-lg"><strong className="text-pink-700">Landmark:</strong> Theethambalayam Bus Stop</p>
                  
                  <a 
                    href="https://maps.app.goo.gl/X91mHuy1EYmRX3RT8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <MapPin className="w-6 h-6 mr-3" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
              
              {/* QR Code */}
              <div className="flex justify-center">
                <div className="p-8 bg-gradient-to-br from-white/80 to-teal-50/60 rounded-3xl shadow-xl border border-white/50">
                  <h3 className="text-center font-bold text-xl bg-gradient-to-r from-teal-700 to-emerald-700 bg-clip-text text-transparent mb-6">Scan for Directions</h3>
                  <div className="w-52 h-52 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
                    {/* QR Code Pattern Simulation */}
                    <div className="grid grid-cols-8 gap-1 w-full h-full p-4">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-full h-full ${
                            Math.random() > 0.5 ? 'bg-gradient-to-br from-purple-800 to-pink-800' : 'bg-transparent'
                          }`}
                        ></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-3 rounded-xl shadow-lg">
                        <MapPin className="w-8 h-8 text-teal-600" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-base text-gray-600 mt-4 font-medium">Point camera to scan</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Islamic Dua */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-50 via-pink-50 via-orange-50 to-teal-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-br from-white/70 via-purple-50/50 to-pink-50/50 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-teal-700 bg-clip-text text-transparent mb-8 elegant-font">Dua for the Couple</h3>
              
              <div className="space-y-6">
                <p className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent font-bold arabic-style">
                  بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
                </p>
                
                <p className="text-xl md:text-2xl bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent italic leading-relaxed font-medium">
                  "Baarakallahu laka wa baaraka 'alayka wa jama'a baynakuma fee khayr."
                </p>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  "May Allah bless you, and shower His blessings upon you, and join you together in goodness."
                </p>
              </div>
              
              <div className="mt-10 flex justify-center">
                <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 via-orange-400 to-teal-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 text-center">
          <p className="text-lg text-gray-600 font-medium">
            With love and blessings • August 10, 2025 • GJR Mahal, B. Mutlur
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;