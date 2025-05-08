
const Skills = () => {
  const skillCategories = [
    {
      category: "Data Analysis",
      skills: ["Python", "R", "SQL", "Excel", "Tableau", "Power BI"]
    },
    {
      category: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "NLP", "Computer Vision"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Azure", "Jupyter", "Spark"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-data-600 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
