import React from 'react';
import { ArrowRight, Menu, Check, ChevronRight, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/a11f0291972b3f9ba9ac8e130ce21b9b5a016e42.png';
import birdLogo from 'figma:asset/6e53190105afeca631b6fcc49e900136adceeb5e.png';
import textLogo from 'figma:asset/339295033d466053f230181b7f9f9cd0a93594c4.png';
import heroBackground from 'figma:asset/4e8b66b3b682809c4d0a058bc730bd4d7a3d661a.png';
import accentBlur from 'figma:asset/bbf9a876724b15db91dbaf6a6e6f4e6ff0ca22ff.png';
import nadiraPhoto from 'figma:asset/efa3f31384efbc5d8344782adffe9d83d51c59d5.png';
import crowdBackground from 'figma:asset/3915581157d90ef354fba6b55e1c1543f8eb4e10.png';
import crowdHeaderBackground from 'figma:asset/e94c380e439282db7c94b97d69d1584e63c53973.png';
import professionalPhoto from 'figma:asset/b8e1f62aab426b333e52d775c0636ae53656ee2f.png';
import burnoutPhoto from 'figma:asset/7d5817d5b5c29935c891b29eb550bcda2adbaa37.png';
import speakingPhoto from 'figma:asset/9b6728a08dad3d25bbb665b783a7c0f1372f96cf.png';
import entrepreneurLogo from 'figma:asset/13f84dc9f51dcf8f8ad2a760f1e21d7228e03b1f.png';
import foxBusinessLogo from 'figma:asset/c6ab962d4c1051157f3d12b56e70620538ce870d.png';
import harvardLogo from 'figma:asset/72a9f23fbecfbd8b2c93bdf47b01e1db200b1313.png';
import cbsLogo from 'figma:asset/96b36e40633766ac271b6e26ef75b6b4755e0bcd.png';
import nbcNewsLogo from 'figma:asset/fec23922f41355858cefea7a3c14c816ddbf2903.png';
import forbesLogo from 'figma:asset/ed6cccfccee8c1adee120b0583e9f68afac92233.png';
import nadiraBlueTop from 'figma:asset/7056c29919b9e860f70c6dd437a9e9941a34ff24.png';
import nadiraProfessional from 'figma:asset/cda440aa05ef75dd37bfb6d1286820f91b7d20ca.png';
import nadiraSilhouette from 'figma:asset/88c7544a8f3f8d418f48c61248eff2d618343f3b.png';
import { Button } from './components/ui/button';
import { ServicesSection } from './components/ServicesSection';
import { RebootMethodSection } from './components/RebootMethodSection';

export default function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState<number | null>(0);

  const handleIgniteReboot = () => {
    console.log('Ignite My Reboot clicked!');
    alert('Ready to ignite your transformation!');
  };

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    console.log(`Navigating to ${section}`);
  };

  const handleSeeHowICanHelp = () => {
    console.log('See How I Can Help You Rise clicked!');
    alert('Let me help you transform your life!');
  };

  const handleStartReboot = () => {
    console.log('Start My Reboot Today clicked!');
    alert('Let\'s start your reboot journey today!');
  };

  const toggleExpandedItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a1f2e] overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col">
        {/* Background Image - Fixed and Centered */}
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
          }}
        >
          {/* Accent Blur - Decorative Element */}
          <div 
            className="absolute top-1/4 -left-32 w-[600px] h-[600px] md:w-[1400px] md:h-[1400px] opacity-60 pointer-events-none"
            style={{
              backgroundImage: `url(${accentBlur})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'screen',
            }}
          ></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-20 px-6 md:px-8 lg:px-16 py-6">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto">
            {/* Logo - White Version */}
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src={birdLogo} 
                alt="Phoenix Logo" 
                className="h-12 md:h-14 lg:h-16 w-auto"
              />
              <img 
                src={textLogo} 
                alt="Nadira Adam - Awaken the Fire Within" 
                className="h-8 md:h-10 lg:h-12 w-auto brightness-0 invert"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-3 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => handleNavigation('home')}
                className="text-white hover:text-orange-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('about')}
                className="text-white hover:text-orange-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                About
              </button>
              <button
                onClick={() => handleNavigation('testimonials')}
                className="text-white hover:text-orange-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavigation('services')}
                className="text-white hover:text-orange-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('contact')}
                className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-all"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a1f2e]/95 backdrop-blur-md mt-2 py-4 px-6 rounded-lg shadow-xl">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-white hover:text-orange-400 transition-colors text-left py-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('about')}
                  className="text-white hover:text-orange-400 transition-colors text-left py-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  About
                </button>
                <button
                  onClick={() => handleNavigation('testimonials')}
                  className="text-white hover:text-orange-400 transition-colors text-left py-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Testimonials
                </button>
                <button
                  onClick={() => handleNavigation('services')}
                  className="text-white hover:text-orange-400 transition-colors text-left py-2"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="border-2 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-gray-900 transition-all text-center"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="relative flex-1 flex items-center pb-16 md:pb-20 pt-8 md:pt-0">
          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
            <div className="max-w-2xl mx-auto md:mx-0">
              {/* Main Heading - Centered Text */}
              <h1 
                className="text-white mb-6 text-center md:text-left" 
                style={{ 
                  fontFamily: 'Noto Serif Display, serif', 
                  fontSize: 'clamp(2rem, 6vw, 4.5rem)', 
                  lineHeight: '1.2', 
                  fontWeight: '400',
                  letterSpacing: '-0.02em'
                }}
              >
                From Stuck to <span className="text-[#ff8c42]">Soaring</span>
              </h1>

              {/* Description - Centered Text */}
              <p 
                className="text-white mb-8 leading-relaxed text-center md:text-left" 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  lineHeight: '1.7'
                }}
              >
                <span className="font-bold">Every ending carries the seed of a new beginning. I know what it's like to feel stuck and burnt out, and I know what it takes to <span className="font-semibold">rise</span>.</span> I rebuilt my life, and now I help others do the same: step into confidence, reclaim your strength, and step boldly into a future that excites you.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center md:justify-start mb-8">
                <Button
                  onClick={handleIgniteReboot}
                  className="bg-white text-[#1e3a8a] hover:bg-orange-500 hover:text-white transition-all px-8 md:px-10 py-6 md:py-7 rounded-md group flex items-center justify-center w-full sm:w-auto"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: 'bold' }}
                >
                  Ignite My Reboot
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Quote - Centered Text */}
              <div 
                className="italic text-white/90" 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.9rem)',
                  lineHeight: '1.6'
                }}
              >
                <p className="mb-2 text-center md:text-left">
                  "Fear doesn't disappear when you're <span className="italic">ready</span>. It disappears when <span className="italic">you</span> move anyway and that first step changes everything."
                </p>
                <p className="not-italic text-white/80 text-center md:text-left">— Nadira Adam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Orange Banner */}
        <div className="relative z-20 bg-[#ff8c42] py-4">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
            <p 
              className="text-center text-white tracking-widest uppercase"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif', 
                fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)',
                letterSpacing: '0.15em',
                fontWeight: '600'
              }}
            >
              Turn burnout into breakthrough. Rise into your next bold chapter.
            </p>
          </div>
        </div>
      </div>

      {/* About Section - Built on Experience */}
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Media Features */}
          <div className="text-center mb-16">
            <p 
              className="text-gray-500 uppercase tracking-widest mb-8"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em'
              }}
            >
              Have Been Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 opacity-60">
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={entrepreneurLogo} 
                  alt="Entrepreneur Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={foxBusinessLogo} 
                  alt="FOX BUSINESS Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={forbesLogo} 
                  alt="Forbes Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={nbcNewsLogo} 
                  alt="NBC NEWS Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={cbsLogo} 
                  alt="CBS Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={harvardLogo} 
                  alt="Harvard Logo" 
                  className="h-8 md:h-10 lg:h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <div className="bg-[#FFD700] rounded-3xl overflow-hidden" style={{ marginLeft: '50px' }}>
                <div className="relative">
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#ff8c42] rounded-full"></div>
                      <p 
                        className="uppercase tracking-wider"
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          letterSpacing: '0.1em'
                        }}
                      >
                        Purpose Driven
                      </p>
                    </div>
                  </div>
                  <img 
                    src={nadiraPhoto} 
                    alt="Nadira Adam presenting"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <h2 
                className="mb-6"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  lineHeight: '1.2',
                  fontWeight: '400'
                }}
              >
                Built on Experience,<br />
                Proven in Transformation
              </h2>
              <p 
                className="mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: '1.7',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                A proven voice of resilience who turned <span className="text-[#ff8c42]">personal burnout</span> into a blueprint for <span className="text-[#ff8c42]">breakthrough</span>.
              </p>
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                "Reboot My Life" was born from my own reinvention. With nearly three decades in corporate leadership and certifications in coaching and NLP, I blend business strategy with lived transformation to guide you into your best next chapters.
              </p>
              <Button
                onClick={handleSeeHowICanHelp}
                className="bg-[#1e3a8a] text-white hover:bg-[#ff8c42] transition-all px-6 md:px-8 py-5 md:py-6 rounded-md group flex items-center justify-center w-full sm:w-auto"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 'bold' }}
              >
                See How I Can Help You Rise
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Quote Box */}
              <div className="mt-8 bg-[#FFF8F0] p-6 rounded-lg border-l-4 border-[#ff8c42]">
                <p 
                  className="italic mb-2"
                  style={{ 
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#333'
                  }}
                >
                  "Do you want lessons built on theory, or wisdom earned through lived transformation? I know the difference, because I've lived it."
                </p>
                <p 
                  className="not-italic"
                  style={{ 
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '0.85rem',
                    color: '#666'
                  }}
                >
                  — Nadira Adam
                </p>
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="text-center mb-12">
            <h3 
              style={{ 
                fontFamily: 'Noto Serif Display, serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '400'
              }}
            >
              <span className="text-[#ff8c42]">Milestones</span> That Shape My Work
            </h3>
          </div>

          {/* Milestones Grid */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            {/* Corporate Leadership */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Corporate <span className="text-[#ff8c42]">Leadership</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Nearly 30 years leading high-performing sales teams, scaling revenue, and driving consistent growth.
              </p>
            </div>

            {/* Published Author */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Published <span className="text-[#ff8c42]">Author</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Ruts, Guts & Glory: The Ultimate Playbook for Resilience, Courage and Winning.
              </p>
            </div>

            {/* Certified Expertise */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Certified <span className="text-[#ff8c42]">Expertise</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Certified Life Coach, NLP Practitioner, and Sales Trainer with top-of-class credentials.
              </p>
            </div>

            {/* Media Recognition */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Media <span className="text-[#ff8c42]">Recognition</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Featured on the cover of The Celebrity Online Magazine (2023).
              </p>
            </div>

            {/* Personal Reinvention */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Personal <span className="text-[#ff8c42]">Reinvention</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                From burnout to breakthrough, I embody the transformation I now help others achieve.
              </p>
            </div>

            {/* Speaking Engagements */}
            <div className="border-b border-gray-200 pb-6">
              <h4 
                className="mb-3"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: '400'
                }}
              >
                Speaking <span className="text-[#ff8c42]">Engagements</span>
              </h4>
              <p 
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: '#666'
                }}
              >
                Guest speaker at international summits including Fun After 40, Play, Power, and Possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-[#f8f9fa] py-12 md:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Header */}
          <div className="text-center mb-12">
            <p 
              className="text-[#ff8c42] uppercase tracking-widest mb-4 flex items-center justify-center gap-2"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontWeight: '600'
              }}
            >
              <span>👑</span> TESTIMONIALS
            </p>
            <h2 
              className="mb-6"
              style={{ 
                fontFamily: 'Noto Serif Display, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: '1.2',
                fontWeight: 'bold'
              }}
            >
              Voices of Change That Prove What's Possible
            </h2>
            <p 
              className="max-w-3xl mx-auto"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #ff8c42 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              The proof of transformation lives in their stories: lives reignited, confidence reclaimed, futures rewritten.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative mb-12 overflow-hidden">
            <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
              {/* First set of testimonials */}
              {[
                {
                  title: "Leadership That Opens Doors",
                  quote: "Nadira welcomed me back during a turning point that led to my growth from Key Account Manager to Senior Manager. Her empowered environment made people feel supported and inspired.",
                  author: "Jon Munro"
                },
                {
                  title: "Clarity That Sparks Change",
                  quote: "Nadira has a way of making you feel truly seen and supported. She guided me with patience and encouragement, helping me discover strengths I didn't know I had.",
                  author: "Asogan Naidoo"
                },
                {
                  title: "Results With Confidence",
                  quote: "Working with Nadira is both inspiring and grounding. She gave us space to grow while trusting our judgment. A mentor and role model I'll always be grateful for.",
                  author: "Manager, TBO.com"
                },
                {
                  title: "Vision That Transforms Teams",
                  quote: "Nadira's leadership style is transformative. Her ability to see potential in others and create an environment where people thrive is remarkable.",
                  author: "Sarah Mitchell"
                },
                {
                  title: "Authenticity That Inspires",
                  quote: "What sets Nadira apart is her genuine care for people's growth. She challenged me to step outside my comfort zone while providing unwavering support.",
                  author: "Michael Chen"
                },
                {
                  title: "Wisdom That Delivers",
                  quote: "Nadira combines strategic thinking with deep empathy. Her insights are always practical and actionable. One of the most impactful experiences of my professional journey.",
                  author: "Lisa Rodriguez"
                }
              ].map((testimonial, index) => (
                <div 
                  key={`testimonial-1-${index}`}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-md w-[320px] sm:w-[380px] md:w-[450px] min-h-[320px] flex-shrink-0 flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ff8c42] text-xl">★</span>
                    ))}
                  </div>
                  <h4 
                    className="mb-4"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: '400',
                      lineHeight: '1.3',
                      color: '#000'
                    }}
                  >
                    {testimonial.title}
                  </h4>
                  <p 
                    className="mb-4 flex-grow"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-[#ff8c42] pt-6 mt-auto">
                    <p 
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#000',
                        textAlign: 'left',
                        margin: 0,
                        padding: 0
                      }}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                {
                  title: "Leadership That Opens Doors",
                  quote: "Nadira welcomed me back during a turning point that led to my growth from Key Account Manager to Senior Manager. Her empowered environment made people feel supported and inspired.",
                  author: "Jon Munro"
                },
                {
                  title: "Clarity That Sparks Change",
                  quote: "Nadira has a way of making you feel truly seen and supported. She guided me with patience and encouragement, helping me discover strengths I didn't know I had.",
                  author: "Asogan Naidoo"
                },
                {
                  title: "Results With Confidence",
                  quote: "Working with Nadira is both inspiring and grounding. She gave us space to grow while trusting our judgment. A mentor and role model I'll always be grateful for.",
                  author: "Manager, TBO.com"
                },
                {
                  title: "Vision That Transforms Teams",
                  quote: "Nadira's leadership style is transformative. Her ability to see potential in others and create an environment where people thrive is remarkable.",
                  author: "Sarah Mitchell"
                },
                {
                  title: "Authenticity That Inspires",
                  quote: "What sets Nadira apart is her genuine care for people's growth. She challenged me to step outside my comfort zone while providing unwavering support.",
                  author: "Michael Chen"
                },
                {
                  title: "Wisdom That Delivers",
                  quote: "Nadira combines strategic thinking with deep empathy. Her insights are always practical and actionable. One of the most impactful experiences of my professional journey.",
                  author: "Lisa Rodriguez"
                }
              ].map((testimonial, index) => (
                <div 
                  key={`testimonial-2-${index}`}
                  className="bg-white rounded-lg p-6 md:p-8 shadow-md w-[320px] sm:w-[380px] md:w-[450px] min-h-[320px] flex-shrink-0 flex flex-col"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#ff8c42] text-xl">★</span>
                    ))}
                  </div>
                  <h4 
                    className="mb-4"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: '400',
                      lineHeight: '1.3',
                      color: '#000'
                    }}
                  >
                    {testimonial.title}
                  </h4>
                  <p 
                    className="mb-4 flex-grow"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-[#ff8c42] pt-6 mt-auto">
                    <p 
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#000',
                        textAlign: 'left',
                        margin: 0,
                        padding: 0
                      }}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Text and CTA */}
          <div className="text-center mt-32">
            <p 
              className="mb-6"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.6',
                color: '#333'
              }}
            >
              When you're ready to reboot your life, you won't just read the success stories, you'll become one.
            </p>
            <Button
              onClick={() => console.log('Start My Transformation clicked')}
              className="bg-[#1e3a8a] text-white hover:bg-[#ff8c42] transition-all px-10 py-6 rounded-md group inline-flex items-center"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem', fontWeight: 'bold' }}
            >
              Start My Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Resilience Metrics Section */}
      <div className="relative overflow-hidden">
        {/* Blue Accent Blur - Left Side Middle */}
        <div 
          className="absolute top-1/3 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-90 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${accentBlur})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
            filter: 'hue-rotate(180deg) saturate(1.5)',
          }}
        ></div>

        {/* Blue Accent Blur - Left Side Bottom */}
        <div 
          className="absolute bottom-20 left-0 w-[400px] h-[400px] md:w-[700px] md:h-[700px] opacity-100 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${accentBlur})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
            filter: 'hue-rotate(180deg) saturate(1.5)',
          }}
        ></div>

        {/* Orange Accent Blur - Right Side Top - Spans entire section */}
        <div 
          className="hidden md:block absolute top-0 right-0 w-[300px] h-[400px] md:w-[600px] md:h-[800px] opacity-100 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${accentBlur})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
          }}
        ></div>

        {/* Orange Accent Blur - Right Side Middle */}
        <div 
          className="hidden md:block absolute top-1/3 right-10 w-[250px] h-[250px] md:w-[500px] md:h-[500px] opacity-90 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${accentBlur})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
          }}
        ></div>

        {/* Orange Accent Blur - Right Side Bottom */}
        <div 
          className="hidden md:block absolute bottom-20 right-0 w-[350px] h-[350px] md:w-[700px] md:h-[700px] opacity-100 pointer-events-none z-10"
          style={{
            backgroundImage: `url(${accentBlur})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'lighten',
          }}
        ></div>

        {/* Header with Crowd Background */}
        <div 
          className="relative py-16 md:py-24"
          style={{
            backgroundImage: `url(${crowdHeaderBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay with gradient fade to black */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.75) 70%, rgba(0,0,0,0.9) 90%, rgba(0,0,0,1) 100%)'
            }}
          ></div>

          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
            {/* Header */}
            <div className="text-center">
              <p 
                className="text-white/80 uppercase tracking-widest mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  fontWeight: '600'
                }}
              >
                RESILIENCE METRICS
              </p>
              <h2 
                className="text-white mb-8"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.2',
                  fontWeight: '400'
                }}
              >
                Behind Every Statistic is a Story Waiting to be Rewritten.
              </h2>
              <p 
                className="text-white max-w-3xl mx-auto"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
                }}
              >
                The data doesn't lie. Burnout and stagnation <span className="text-[#ff8c42]">are everywhere</span>. The good news? With the right method and <span className="text-[#ff8c42]">accountability</span>, <span className="text-[#ff8c42]">lasting transformation is inevitable</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Layout - Black Background */}
        <div className="relative bg-black py-16 md:py-20">
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Left Column - The Burnout Trap */}
              <div>
                {/* Image */}
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <img 
                    src={burnoutPhoto} 
                    alt="Person experiencing burnout at desk"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white mb-6"
                  style={{ 
                    fontFamily: 'Noto Serif Display, serif',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: '400'
                  }}
                >
                  The Burnout Trap
                </h3>

                {/* Statistics List */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      77% of professionals report hitting burnout at some point.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      More than 40% of midlife entrepreneurs feel "stuck," even after achieving success.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      One in three professionals say stress and exhaustion keep them from their full potential.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      Less than 20% of people stick with change long-term without the right support.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 pt-8 border-t border-[#ff8c42]">
                  <p 
                    className="text-white/90 italic mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}
                  >
                    "Burnout is your spirit's way of asking, 'Is this really it?' The answer is yours to rewrite."
                  </p>
                  <p 
                    className="text-white/80"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.85rem'
                    }}
                  >
                    — Nadira Adam
                  </p>
                </div>
              </div>

              {/* Right Column - The Reinvention Path */}
              <div>
                {/* Image */}
                <div className="mb-8 rounded-2xl overflow-hidden">
                  <img 
                    src={professionalPhoto} 
                    alt="Professional woman in business attire"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white mb-6"
                  style={{ 
                    fontFamily: 'Noto Serif Display, serif',
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: '400'
                  }}
                >
                  The Reinvention Path
                </h3>

                {/* Statistics List */}
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      Coaching helps—70% of people feel clearer, more confident, and perform better.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      Structured programs boost energy and life engagement.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      Three in four leaders who invested in reinvention report deeper fulfillment at work and home.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#ff8c42] flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <p 
                      className="text-white"
                      style={{ 
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      90% combining mindset and strategy achieve lasting transformation.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 pt-8 border-t border-[#ff8c42]">
                  <p 
                    className="text-white/90 italic mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.6'
                    }}
                  >
                    "It's never too late to reinvent yourself. The fire is still in you, it's just waiting to be awakened."
                  </p>
                  <p 
                    className="text-white/80"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.85rem'
                    }}
                  >
                    — Nadira Adam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Silent Struggles to Liberating Solutions Section */}
      <div className="bg-white py-12 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Top Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
            {/* Left - Image */}
            <div className="relative order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={speakingPhoto} 
                  alt="Nadira Adam speaking at podium"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 md:order-2">
              <h2 
                className="mb-6"
                style={{ 
                  fontFamily: 'Noto Serif Display, serif',
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  lineHeight: '1.2',
                  fontWeight: '600'
                }}
              >
                From Silent Struggles to Liberating Solutions
              </h2>
              <p 
                className="mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  lineHeight: '1.7',
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Your breaking point can be the spark <span className="font-semibold">for your boldest new beginning</span>.
              </p>
              <p 
                className="mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#666'
                }}
              >
                I know what it feels like to look "successful" on the outside while silently running on empty inside. I've been there, climbing the ladder, hitting targets, smiling through the exhaustion.
              </p>
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#000'
                }}
              >
                <span className="font-semibold text-[#333]">The truth? That kind of success comes at too high a cost.</span> You don't have to keep living this way, and I can show you the way out.
              </p>
              <Button
                onClick={handleSeeHowICanHelp}
                className="bg-[#1e3a8a] text-white hover:bg-[#ff8c42] transition-all px-6 md:px-8 py-5 md:py-6 rounded-md group flex items-center justify-center w-full sm:w-auto"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(0.9rem, 2vw, 1rem)', fontWeight: 'bold' }}
              >
                See How I Can Help You Rise
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Bottom Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left - Do these sound familiar? */}
            <div>
              <div className="mb-6">
                <div style={{ width: '50px', height: '3px', backgroundColor: '#F97316', marginBottom: '12px' }}></div>
                <h3 
                  style={{ 
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#000'
                  }}
                >
                  Do these sound familiar?
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    You've achieved external success, but inside you feel exhausted, stuck, or uninspired.
                  </p>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F97316' }}></div>
                </div>
                <div>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    You've sacrificed health, joy, and freedom for work, and it's no longer sustainable.
                  </p>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F97316' }}></div>
                </div>
                <div>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    You know you're meant for more, but you don't know how to get there.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Here's how I help you solve it */}
            <div>
              <div className="mb-6">
                <div style={{ width: '50px', height: '3px', backgroundColor: '#F97316', marginBottom: '12px' }}></div>
                <h3 
                  style={{ 
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#000'
                  }}
                >
                  Here's how I help you solve it:
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#000'
                    }}
                  >
                    Clarity & Purpose
                  </h4>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    Rediscover who you really are and what excites your soul.
                  </p>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F97316' }}></div>
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#000'
                    }}
                  >
                    Energy & Confidence
                  </h4>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    Replace burnout and doubt with strength and self-belief.
                  </p>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F97316' }}></div>
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#000'
                    }}
                  >
                    Aligned Success
                  </h4>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    Build a life and career that reflect your values and vision.
                  </p>
                  <div style={{ width: '100%', height: '1px', backgroundColor: '#F97316' }}></div>
                </div>
                <div>
                  <h4 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: '#000'
                    }}
                  >
                    Lasting Tools
                  </h4>
                  <p 
                    className="mb-2"
                    style={{ 
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#000'
                    }}
                  >
                    Gain strategies and habits that keep you thriving long after coaching ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Quote Banner - Blue to Orange Gradient */}
      <div 
        className="relative py-10 md:py-12"
        style={{
          background: 'linear-gradient(90deg, #012F68 0%, #E0790F 100%)'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="text-center">
            <p 
              className="text-white mb-4"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                lineHeight: '1.8',
                fontStyle: 'italic',
                fontWeight: '400'
              }}
            >
              "Do you want lessons built on theory, or wisdom earned through lived transformation?<br />
              I know the difference, because I've lived it."
            </p>
            <p 
              className="text-white/90"
              style={{ 
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: '1rem'
              }}
            >
              — Nadira Adam
            </p>
          </div>
        </div>
      </div>

      {/* Reboot Method Section */}
      <RebootMethodSection />

      {/* I Don't Just Teach Change Section */}
      <div 
        className="relative py-16 md:py-20"
        style={{
          backgroundColor: '#FFFFFF'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
          {/* Main Heading - Centered */}
          <h2 
            className="mb-6 text-center"
            style={{ 
              fontFamily: 'Noto Serif Display, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.2',
              fontWeight: '700',
              color: '#000'
            }}
          >
            I Don't just Teach Change, I've Lived It.
          </h2>

          {/* Subtitle - Centered */}
          <p 
            className="mb-12 text-center"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              lineHeight: '1.6',
              background: 'linear-gradient(90deg, #1e3a8a 0%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Because you deserve more than motivation, you deserve lasting change.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>

              {/* Body Text */}
              <p 
                className="mb-4"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#000'
                }}
              >
                I've climbed the ladder, pushed through exhaustion, and realized the life I was building wasn't the one I truly wanted.
              </p>

              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#000'
                }}
              >
                That's why my coaching is different, rooted in real experience and transformation. <span style={{ fontWeight: '600' }}>With me, you'll find clarity, direction, and the courage to rise into the life you're meant to live.</span>
              </p>

              {/* Expandable Items */}
              <div className="space-y-3 mb-8">
                {/* Energy That Lasts */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <button
                    onClick={() => toggleExpandedItem(0)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight 
                        className="transition-transform" 
                        style={{ 
                          color: '#F97316',
                          transform: expandedItem === 0 ? 'rotate(90deg)' : 'rotate(0deg)',
                          width: '20px',
                          height: '20px'
                        }} 
                      />
                      <span 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#000'
                        }}
                      >
                        Energy That Lasts
                      </span>
                    </div>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#F97316' }}
                    >
                      <ArrowRight 
                        style={{ 
                          color: 'white',
                          width: '16px',
                          height: '16px'
                        }} 
                      />
                    </div>
                  </button>
                  {expandedItem === 0 && (
                    <div className="px-4 pb-4 pl-11">
                      <p 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#666'
                        }}
                      >
                        Reignite your drive without sacrificing your health or peace.
                      </p>
                    </div>
                  )}
                </div>

                {/* Confidence That Sticks */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <button
                    onClick={() => toggleExpandedItem(1)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight 
                        className="transition-transform" 
                        style={{ 
                          color: '#666',
                          transform: expandedItem === 1 ? 'rotate(90deg)' : 'rotate(0deg)',
                          width: '20px',
                          height: '20px'
                        }} 
                      />
                      <span 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#000'
                        }}
                      >
                        Confidence That Sticks
                      </span>
                    </div>
                    <ArrowRight 
                      style={{ 
                        color: '#666',
                        width: '20px',
                        height: '20px'
                      }} 
                    />
                  </button>
                  {expandedItem === 1 && (
                    <div className="px-4 pb-4 pl-11">
                      <p 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#666'
                        }}
                      >
                        Build unshakeable self-belief that carries you through any challenge.
                      </p>
                    </div>
                  )}
                </div>

                {/* Success That Aligns */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <button
                    onClick={() => toggleExpandedItem(2)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight 
                        className="transition-transform" 
                        style={{ 
                          color: '#666',
                          transform: expandedItem === 2 ? 'rotate(90deg)' : 'rotate(0deg)',
                          width: '20px',
                          height: '20px'
                        }} 
                      />
                      <span 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#000'
                        }}
                      >
                        Success That Aligns
                      </span>
                    </div>
                    <ArrowRight 
                      style={{ 
                        color: '#666',
                        width: '20px',
                        height: '20px'
                      }} 
                    />
                  </button>
                  {expandedItem === 2 && (
                    <div className="px-4 pb-4 pl-11">
                      <p 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#666'
                        }}
                      >
                        Create success that reflects your values and true desires.
                      </p>
                    </div>
                  )}
                </div>

                {/* Support That Walks With You */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <button
                    onClick={() => toggleExpandedItem(3)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight 
                        className="transition-transform" 
                        style={{ 
                          color: '#666',
                          transform: expandedItem === 3 ? 'rotate(90deg)' : 'rotate(0deg)',
                          width: '20px',
                          height: '20px'
                        }} 
                      />
                      <span 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#000'
                        }}
                      >
                        Support That Walks With You
                      </span>
                    </div>
                    <ArrowRight 
                      style={{ 
                        color: '#666',
                        width: '20px',
                        height: '20px'
                      }} 
                    />
                  </button>
                  {expandedItem === 3 && (
                    <div className="px-4 pb-4 pl-11">
                      <p 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#666'
                        }}
                      >
                        Get personalized guidance every step of your transformation journey.
                      </p>
                    </div>
                  )}
                </div>

                {/* Momentum That Compounds */}
                <div 
                  className="bg-white rounded-lg overflow-hidden transition-all"
                  style={{
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }}
                >
                  <button
                    onClick={() => toggleExpandedItem(4)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight 
                        className="transition-transform" 
                        style={{ 
                          color: '#666',
                          transform: expandedItem === 4 ? 'rotate(90deg)' : 'rotate(0deg)',
                          width: '20px',
                          height: '20px'
                        }} 
                      />
                      <span 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: '#000'
                        }}
                      >
                        Momentum That Compounds
                      </span>
                    </div>
                    <ArrowRight 
                      style={{ 
                        color: '#666',
                        width: '20px',
                        height: '20px'
                      }} 
                    />
                  </button>
                  {expandedItem === 4 && (
                    <div className="px-4 pb-4 pl-11">
                      <p 
                        style={{ 
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                          fontSize: '0.9rem',
                          lineHeight: '1.6',
                          color: '#666'
                        }}
                      >
                        Build sustainable habits that create lasting positive change.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={handleStartReboot}
                className="bg-[#012F68] text-white hover:bg-[#ff8c42] transition-all px-8 py-6 rounded-md group flex items-center justify-center w-full sm:w-auto"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: 'bold' }}
              >
                Start My Reboot Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative lg:pl-8">
              <div className="relative">
                <img 
                  src={nadiraBlueTop} 
                  alt="Nadira Adam" 
                  className="w-full h-auto rounded-lg"
                  style={{
                    maxWidth: '450px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* I Lost Myself in Success Section */}
      <div 
        className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden"
        style={{
          backgroundColor: '#2d2d2d'
        }}
      >
        {/* Silhouette Background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${nadiraSilhouette})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.8',
            filter: 'brightness(0.8) contrast(1.3)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Main Heading */}
          <h2 
            className="mb-12 text-center"
            style={{ 
              fontFamily: 'Noto Serif Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1',
              fontWeight: '700',
              color: '#fff'
            }}
          >
            I Lost Myself in Success and Found My True Calling in Reinvention
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Subtitle with colored highlights */}
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  lineHeight: '1.6',
                  fontWeight: '700',
                  background: 'linear-gradient(90deg, #ffffff 0%, #F97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                A journey from corporate heights to personal breaking point—the rebirth that became my mission.
              </p>

              {/* First Body Paragraph */}
              <p 
                className="mb-6"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#e0e0e0'
                }}
              >
                For nearly three decades, I was the picture of corporate success: leading high-performing teams, driving record-breaking growth, and climbing the ladder with relentless focus. On the outside, it looked like I had it all. But behind the scenes, I was burning out. The pressure was constant, the glass ceiling was real, and eventually my body broke. A hypervigilant nervous system became the wake-up call I could no longer ignore.
              </p>

              {/* Second Body Paragraph */}
              <p 
                className="mb-8"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  color: '#e0e0e0'
                }}
              >
                That breaking point became my turning point. I chose to reboot my life, to stop living by default and start living by design. What I discovered was more than healing: it was a mission. Reboot My Life was born from that fire: a commitment to help others break free from burnout, rediscover their purpose, and rise into a future that excites them to wake up each day.
              </p>

              {/* CTA Button */}
              <Button
                onClick={handleStartReboot}
                className="bg-white text-black hover:bg-gray-100 transition-all px-8 py-6 rounded-md group flex items-center justify-center w-full sm:w-auto"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: '600' }}
              >
                Discover How My Story Can Help Rewrite Yours
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Orange gradient behind image - larger */}
                <div 
                  className="absolute bottom-0 right-0 rounded-lg pointer-events-none"
                  style={{
                    width: '70%',
                    height: '70%',
                    background: 'linear-gradient(135deg, transparent 0%, rgba(249, 115, 22, 0.4) 100%)',
                    zIndex: 0,
                    transform: 'translate(10%, 10%)'
                  }}
                />
                <img 
                  src={nadiraProfessional} 
                  alt="Nadira Adam" 
                  className="w-full h-auto rounded-lg relative"
                  style={{
                    maxWidth: '600px',
                    display: 'block',
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          </div>

          {/* Centered 7 Images and Bottom Text */}
          <div className="mt-16 flex flex-col items-center">
            {/* 7 Small Images Row */}
            <div className="flex justify-center w-full mb-8">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 sm:gap-3">
                  <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1679492430093-fce51613a570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNwZWFraW5nJTIwc3RhZ2V8ZW58MXx8fHwxNzY0ODY4MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Speaking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576085898323-218337e3e43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzY0NzY0MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Corporate"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1651608670852-1f4203ca8966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NDgyMTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Conference"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHNlbWluYXJ8ZW58MXx8fHwxNzY0ODI0MzA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Seminar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlub3RlJTIwc3BlYWtlcnxlbnwxfHx8fDE3NjQ4NjgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Keynote"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1623652653308-d49d335c92eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY0ODY4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBldmVudHxlbnwxfHx8fDE3NjQ4NjgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Event"
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>
              </div>

              {/* Bottom Text */}
              <p 
                className="mb-8 text-center max-w-4xl mx-auto"
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  lineHeight: '1.6',
                  color: '#fff'
                }}
              >
                Today, I combine corporate expertise, coaching certifications, and lived reinvention to guide ambitious professionals and entrepreneurs who feel stuck, drained, or uninspired. <span style={{ fontWeight: '700' }}>My story isn't just proof that transformation is possible, it's the reason I know it's possible for you too</span>.
              </p>
          </div>
        </div>
      </div>

      {/* CTA Section - Every transformation begins */}
      <div 
        className="relative w-full py-12 md:py-20 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #003366 0%, #1e3a8a 50%, #f97316 100%)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          {/* Main Heading */}
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: '1.2',
              color: '#fff',
              fontWeight: '400'
            }}
          >
            Every transformation begins with a single bold step.
          </h2>

          {/* Subheading */}
          <p 
            className="mb-4"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              lineHeight: '1.4',
              background: 'linear-gradient(90deg, #ffffff 0%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            My free guide gives you the tools to start your reboot today.
          </p>

          {/* Description */}
          <p 
            className="mb-8"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              lineHeight: '1.6',
              color: '#fff',
              maxWidth: '900px',
              margin: '0 auto 2rem'
            }}
          >
            Ready to start your reboot? Get Nadira's free guide packed with bold insights, resilience strategies, and practical steps to help you break free from what's holding you back.
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleStartReboot}
            className="bg-white text-[#003366] hover:bg-gray-100 transition-all px-6 md:px-8 py-4 md:py-5 rounded-md group flex items-center justify-center mx-auto w-full sm:w-auto"
            style={{ 
              fontFamily: 'Plus Jakarta Sans, sans-serif', 
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
              fontWeight: '700' 
            }}
          >
            Explore Programs & Begin My Reboot
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#f8f8f8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Top Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={birdLogo} alt="Phoenix Logo" className="h-16 md:h-20 w-auto" />
                <div>
                  <div className="text-[#003366]" style={{ fontFamily: 'Noto Serif Display, serif', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '700', lineHeight: '1.2' }}>
                    NADIRA <span style={{ fontWeight: '300' }}>ADAM</span>
                  </div>
                  <div className="text-[#003366]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', fontWeight: '400', lineHeight: '1.2' }}>
                    AWAKEN THE FIRE WITHIN
                  </div>
                </div>
              </div>
              <p className="text-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', fontWeight: '700' }}>
                "The life you want isn't waiting, it's calling."
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-[#F97316] mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: '700' }}>
                Navigation
              </h3>
              <ul className="space-y-2">
                {['Home', 'About Nadira', 'Coaching Programs', 'Speaking & Workshops'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => handleNavigation(item.toLowerCase().replace(/ /g, '-'))}
                      className="text-[#003366] hover:text-[#F97316] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Links */}
            <div>
              <h3 className="text-transparent mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: '700' }}>
                &nbsp;
              </h3>
              <ul className="space-y-2">
                {['Contact', 'Free Guide', 'The Reboot Method'].map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => handleNavigation(item.toLowerCase().replace(/ /g, '-'))}
                      className="text-[#003366] hover:text-[#F97316] transition-colors"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-[#F97316] mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: '700' }}>
                Contact
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-[#003366]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                  hello@nadiraadam.com
                </p>
                <p className="text-black" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}>
                  Serving clients worldwide<br />
                  (Virtual & In-Person)
                </p>
                <p className="text-[#003366]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                  +1 76 824 76 08
                </p>
              </div>

              <div>
                <h3 className="text-[#F97316] mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', fontWeight: '700' }}>
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center hover:bg-[#003366] transition-colors">
                    <Facebook className="w-4 h-4 text-white" fill="white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center hover:bg-[#003366] transition-colors">
                    <Linkedin className="w-4 h-4 text-white" fill="white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center hover:bg-[#003366] transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center hover:bg-[#003366] transition-colors">
                    <Youtube className="w-4 h-4 text-white" fill="white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="border-t border-[#F97316] pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}>
                <span className="text-[#F97316]">© 2025 RebootMyLife.</span> <span className="text-black">All rights reserved.</span>
              </p>
              
              <div className="flex gap-6 items-center">
                <button 
                  onClick={() => console.log('Privacy Policy')}
                  className="text-[#666] hover:text-[#F97316] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => console.log('Terms of Service')}
                  className="text-[#666] hover:text-[#F97316] transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem' }}
                >
                  Terms of Service
                </button>
              </div>

              <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', fontWeight: '600' }}>
                <span className="text-black">Designed & Developed by </span><span className="text-[#F97316]">KATALYST CRM</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}