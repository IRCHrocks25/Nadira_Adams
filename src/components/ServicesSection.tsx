import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Check } from 'lucide-react';
import { Button } from './ui/button';
import serviceCardBackground from 'figma:asset/c52311b2a11932ebf1278a8ec4d25b94b0fa02e0.png';

const services = [
  {
    id: 1,
    title: 'The Reboot Blueprint: 90 Days to Unstoppable',
    subtitle: 'A complete reset for your mindset, habits, and future.',
    image: serviceCardBackground,
    features: [
      'Weekly group coaching for momentum',
      'Private community for accountability and support',
      'My exclusive 3-Phase Reboot Method for lasting results'
    ],
    description: "This isn't just coaching. It's a structured transformation roadmap with built-in support and accountability."
  },
  {
    id: 2,
    title: 'Executive 1:1 Coaching',
    subtitle: 'Personalized transformation for high-performing leaders.',
    image: serviceCardBackground,
    features: [
      'Custom strategies aligned with your unique goals',
      'Deep-dive sessions to overcome specific challenges',
      'VIP access and priority support'
    ],
    description: 'For leaders ready to reclaim their power and redefine success on their own terms.'
  },
  {
    id: 3,
    title: 'Speaking & Workshops',
    subtitle: 'Inspire your team or audience with transformative insights.',
    image: serviceCardBackground,
    features: [
      'Keynotes on resilience, reinvention, and leadership',
      'Interactive workshops for real-world application',
      'Tailored content for your organization\'s needs'
    ],
    description: 'Motivate your team with actionable strategies that create lasting impact.'
  }
];

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const currentService = services[currentSlide];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#ff8c42]" />
            <p 
              className="text-[#ff8c42] uppercase tracking-wider"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}
            >
              Services
            </p>
          </div>
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: 'Noto Serif Display, serif',
              fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
              lineHeight: '1.5',
              fontWeight: '700',
              color: '#000'
            }}
          >
            Tailored Coaching and Speaking Designed to Reset Your Life and Ignite Your Next Chapter
          </h2>
          <p 
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.7',
              color: '#666'
            }}
          >
            No two journeys are alike—and neither is my approach.<br />
            <span style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #ff8c42 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Whether you're ready to reboot, break free from burnout, or ignite a room, my programs spark real, lasting transformation.</span>
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-12 md:h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 flex items-center justify-center transition-all touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Service Card */}
          <div 
            className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative"
            style={{
              background: 'linear-gradient(135deg, #C75C0B 0%, #D9A00E 25%, #5A7C3E 50%, #2C5F7C 75%, #1E3A5F 100%)'
            }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage: `url(${currentService.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[450px] flex flex-col justify-end items-start">
              <h3 
                className="text-white mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  lineHeight: '1.2',
                  fontWeight: '400',
                  letterSpacing: '-0.02em'
                }}
              >
                {currentService.title}
              </h3>
              
              <p 
                className="text-white mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  lineHeight: '1.6',
                  letterSpacing: '-0.01em'
                }}
              >
                <Sparkles className="inline w-4 h-4 mr-1 mb-1" />
                {currentService.subtitle}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#ff8c42]" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                        lineHeight: '1.6',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p 
                className="text-white/90"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  lineHeight: '1.7',
                  letterSpacing: '-0.01em'
                }}
              >
                <span className="font-semibold">Where the breakthrough happens:</span> {currentService.description}
              </p>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 md:h-2 rounded-full transition-all touch-manipulation ${ 
                  index === currentSlide 
                    ? 'w-10 md:w-8 bg-[#ff8c42]' 
                    : 'w-3 md:w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p 
            className="mb-6"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.6',
              color: '#000'
            }}
          >
            Because the life you want won't wait forever.
          </p>
          <Button
            onClick={() => {
              console.log('Explore Programs clicked');
              alert('Let\'s begin your reboot!');
            }}
            className="bg-[#012F68] hover:bg-[#01264d] text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto w-full sm:w-auto"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif'
            }}
          >
            Explore Programs & Begin My Reboot
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}