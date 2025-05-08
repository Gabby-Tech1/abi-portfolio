import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FileText, Database, BarChart2, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis Project",
      description: "Conducted a comprehensive analysis of data imported using SQL, Python, and web scraping to derive actionable insights.",
      technologies: ["SQL", "Python", "Web Scraping"],
      icon: <FileText className="h-10 w-10 text-data-600" />
    },
    {
      title: "Web Development Project",
      description: "Developed a responsive website for Missing Grade Report System, utilizing HTML, CSS, and JavaScript to enhance user experience and functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      icon: <Code className="h-10 w-10 text-data-600" />
    },
    {
      title: "Data Visualization Project",
      description: "Created interactive dashboards using Tableau to visualize data trends for data manipulation techniques, enabling stakeholders to make informed decisions.",
      technologies: ["Tableau", "Data Manipulation"],
      icon: <BarChart2 className="h-10 w-10 text-data-600" />
    },
    {
      title: "Database Management System",
      description: "Developed a database management system for Front-end Grading Report using ReactNative, MySQL focusing on data organization, retrieval, and security measures.",
      technologies: ["ReactNative", "MySQL"],
      icon: <Database className="h-10 w-10 text-data-600" />
    }
  ];
  
  return (
    <section id="projects" className="section-container bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="data-card overflow-hidden group">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-data-400 to-accent1-500"></div>
              <CardHeader className="flex flex-row items-start space-y-0 gap-4 pb-2">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {project.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl text-slate-800">
                    {project.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-slate-600">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
