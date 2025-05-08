import { Button } from '../components/ui/button';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-data-50/50 via-white to-accent1-50/50 -z-20"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 grid-pattern opacity-20 -z-10"></div>
      
      {/* Animated Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-data-200 rounded-full blur-3xl opacity-20 animate-pulse-light -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent1-200 rounded-full blur-3xl opacity-20 animate-pulse-light -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-data-100/80 backdrop-blur-sm text-data-700 px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-shadow">
                <Star size={16} className="animate-pulse" />
                Aspiring Data Analyst
                <Star size={16} className="animate-pulse" />
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
              Transforming 
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-data-200 to-data-100 blur-2xl -z-10"></span>
                <span className="relative text-data-700"> Data </span>
              </span>
              Into
              <br className="hidden sm:block" />
              <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-accent1-200 to-accent1-100 blur-2xl -z-10"></span>
                <span className="relative text-accent1-700"> Insights</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              I'm Abigail Afful, passionate about uncovering patterns and creating 
              meaningful visualizations that drive informed decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                className="group text-md px-6 py-6 bg-data-600 hover:bg-data-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="text-md px-6 py-6 border-2 border-data-600 text-data-600 hover:bg-data-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="#contact" className="flex items-center gap-2">
                  Contact Me
                  <TrendingUp size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Data Visualization Decoration */}
          <div className="mt-16 flex justify-center opacity-90">
            <div className="hidden md:flex gap-2">
              {[35, 65, 45, 80, 55, 70, 40, 90, 60, 75].map((height, i) => (
                <div 
                  key={i} 
                  className="w-6 rounded-t-lg bg-gradient-to-t from-data-600 to-data-400 animate-pulse-light hover:from-data-700 hover:to-data-500 transition-colors cursor-pointer"
                  style={{
                    height: `${height}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
