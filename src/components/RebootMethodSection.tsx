import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import rebootImage from 'figma:asset/d6d2342716cffe7e7ccd6758ce3936dea55d7fd5.png';

const steps = [
  {
    number: 1,
    title: 'Unlock Your True Self (Clarity)',
    description: 'See yourself clearly again. Identify what truly matters, shed limiting beliefs, and rediscover the version of you that\'s been waiting beneath the burnout.'
  },
  {
    number: 2,
    title: 'Find Your Compass (Alignment)',
    description: 'Map your next chapter with confidence. Align your goals and daily habits with your values and vision so that every step feels true to who you are.'
  },
  {
    number: 3,
    title: 'From Vision to Victory (Action)',
    description: 'Turn your clarity into momentum. With structure, accountability, and bold support, you\'ll move from stuck to unstoppable, and see real, lasting results.'
  }
];

export function RebootMethodSection() {
  return (
    <div 
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #012F68 0%, #012F68 85%, #E0790F 100%)'
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'Noto Serif Display, serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.2',
              fontWeight: '400',
              color: '#fff'
            }}
          >
            The Reboot Method Section
          </h2>
          
          <p 
            className="mb-3"
            style={{ 
              fontFamily: 'Noto Serif Display, serif',
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              lineHeight: '1.3',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ff8c42 0%, #ffb347 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            3 Bold Steps to Break Free and Become Unstoppable
          </p>
          
          <p 
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
              lineHeight: '1.6',
              color: '#fff',
              opacity: 0.9
            }}
          >
            A framework designed to reignite your fire and keep the drive alive.
          </p>
        </div>

        {/* Main Content - Image and Steps */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src={rebootImage} 
              alt="People in superhero capes representing transformation"
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md md:max-w-full"
            />
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number}>
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: 'Noto Serif Display, serif',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    lineHeight: '1.3',
                    fontWeight: '600',
                    color: '#fff'
                  }}
                >
                  Step {step.number}: {step.title}
                </h3>
                <p 
                  style={{ 
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                    lineHeight: '1.7',
                    color: '#fff',
                    opacity: 0.85,
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote and CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <p 
            className="mb-8"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              lineHeight: '1.7',
              color: '#fff'
            }}
          >
            <span style={{ fontWeight: '700' }}>You're not stuck because you're broken.</span>{' '}
            You're stuck because you've simply outgrown the life you've been living. We're going to figure out what you really want, build a plan, and start moving.
          </p>

          <Button
            onClick={() => {
              console.log('Discover the Method in Action clicked');
              alert('Let\'s explore the Reboot Method!');
            }}
            className="bg-white hover:bg-gray-100 text-[#012F68] px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto w-full sm:w-auto"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: '600'
            }}
          >
            Discover the Method in Action
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}