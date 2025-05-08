import { GraduationCap, School } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Education = () => {
  return (
    <section id="education" className="section-container bg-gradient-to-br from-data-50/30 to-accent1-50/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* University Education */}
          <Card className="group hover:shadow-xl transition-shadow backdrop-blur-sm bg-white/80 border-data-200 animate-fade-in">
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2 text-data-600 mb-2">
                <GraduationCap size={24} className="animate-pulse" />
                <span className="text-sm font-medium">2022 - 2026</span>
              </div>
              <CardTitle className="text-xl font-bold text-slate-800">Bachelor of Science in Information Technology</CardTitle>
              <div className="text-accent1-600 font-medium">University of Ghana</div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-600">
                <p>• Expected Graduation: August, 2026</p>
                <p>• Focus on data analytics and information systems</p>
              </div>
            </CardContent>
          </Card>

          {/* Google Certification */}
          <Card className="group hover:shadow-xl transition-shadow backdrop-blur-sm bg-white/80 border-accent1-200 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="space-y-1">
              <div className="flex items-center gap-2 text-accent1-600 mb-2">
                <School size={24} className="animate-pulse" />
                <span className="text-sm font-medium">Certification</span>
              </div>
              <CardTitle className="text-xl font-bold text-slate-800">Google Data Analytics Certificate</CardTitle>
              <div className="text-data-600 font-medium">Professional Certification</div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-600 space-y-2">
                <p>Comprehensive training in:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Linux Systems</li>
                  <li>MySQL Database Management</li>
                  <li>Python Programming</li>
                  <li>Data Analysis & Visualization</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Training Section */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/80 border-data-100 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">Professional Development</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-data-400 mt-2"></div>
                  <p>Engaged in mentorship programs to enhance skills and gain insights from experienced professionals</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent1-400 mt-2"></div>
                  <p>Active participation in workshops and seminars for industry networking</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
