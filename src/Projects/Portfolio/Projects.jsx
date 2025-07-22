const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-gray-600">A React-based e-commerce site.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="text-gray-600">A personal blog built with Next.js.</p>
        </div>
      </div>
    </section>
  );
};
export default Projects;
