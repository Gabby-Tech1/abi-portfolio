import Me from '@/assets/me.jpg'

const About = () => {
  return (
    <section id="about" className="section-container bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center">About Me</h2>
<div className="bg-white rounded-2xl shadow-md p-8 border border-slate-100 animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-data-200 overflow-hidden bg-data-100 flex items-center justify-center">
                {/* Placeholder for profile picture */}
                <img src={Me} alt="me" className='w-full h-full' />
          </div>
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <h3 className="text-2xl font-bold text-slate-800">Abigail Afful</h3>
              <p className="text-slate-600">
                Aspiring Data Analyst with a strong interest in transforming data into actionable 
                insights. Currently pursuing a Bachelor of Science in Information Technology at 
                the University of Ghana, with an expected graduation in August 2026.
            </p>
            <p className="text-slate-600">
                Recently completed foundational training in data analytics concepts and tools, 
                including the Google Data Analytics Certificate with hands-on experience in Linux, 
                MySQL, and Python. Eager to apply my analytical skills to real-world data challenges
                and committed to continuous learning in the rapidly evolving field of data science.
            </p>
            <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-data-50 border border-data-100 rounded-lg">
                  <span className="font-medium text-data-700">Based in:</span>
                  <span className="text-slate-700">Accra, Greater Accra Region, Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
