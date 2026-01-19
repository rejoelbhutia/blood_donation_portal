  import React from 'react';
  import StatCard from '../../component/StatCard.jsx';
  import {Heart, Droplet, Search, Bell} from 'lucide-react'
  import LandingImage from '../../assets/LandingImage.png'
  import {Link} from "react-router-dom"













  export default function Hero() {
    return (
      // Main container 
      <div className="min-h-screen bg-white font-inter flex items-center justify-center p-4">
        
        {/* Section container with horizontal padding and max-width */}
        <section className="container mx-auto px-4 py-16 sm:py-24">
          
          {/* Main grid: 1 column on mobile, 2 on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* --- Left Column: Content --- */}
            <div className="flex flex-col gap-6">
              
              {/* 1. Eyebrow Link */}
              <div className=' h-fit w-fit bg-red-200 p-1.5 rounded-2xl px-3'>
              <a href="#" className="flex items-center text-red-600 font-semibold text-sm hover:underline ">
                <Heart className="w-4 h-4 mr-2 fill-current" />
                <span>Save Lives Today</span>
              </a>
              </div>

              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Connecting Blood <span className="text-red-600">Donors</span> with Those in Needs.
              </h1>

            
              <p className="text-lg text-gray-600 leading-relaxed">
                A platform where blood receivers can request urgent donations and donors can respond to help save lives in their community
              </p>

              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link to={"/authPage"}>
                <button className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:-translate-y-0.5">
                  
                  <Search className="w-5 h-5 mr-2 " />
                  <span>Find Blood Request</span>
                </button>
                </Link>
              
                <button className="flex items-center justify-center px-6 py-3 bg-white text-red-600 border border-red-600 font-semibold rounded-lg hover:bg-red-50 transition duration-300 transform hover:-translate-y-0.5">
                  <Bell className=' w-5 h-5 mr-2' />
                  <span>Post a Request</span>
                
                </button>
              </div>

            
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center sm:text-left">
                  <StatCard value="0" title="Active Donor" />
                  <StatCard value="0" title="Request Fullfilled" />
                  
                </div>
              </div>
            </div>
            
          
            <div className="flex items-center justify-center">
              
              <img
                src={LandingImage}
                alt="Illustration of a blood donation bag"
                className="rounded-lg shadow-xl w-full max-w-md md:max-w-full h-auto"
              />
            </div>

          </div>
        </section>

      </div>
    );
  }

