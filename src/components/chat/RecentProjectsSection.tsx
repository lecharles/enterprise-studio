
interface RecentProjectsSectionProps {}

export function RecentProjectsSection({}: RecentProjectsSectionProps) {
  const recentProjects = [
    { 
      title: "Solar Energy Solutions", 
      type: "Agent",
      image: "/lovable-uploads/2162f0b6-fcc0-45e1-b6ce-a8b133f9d3ce.png"
    },
    { 
      title: "Hotel Energy Management", 
      type: "App",
      image: "/lovable-uploads/b272c7bb-790e-481a-b619-94f5d7673f8c.png"
    },
    { 
      title: "Infrastructure Renewal", 
      type: "Automation",
      image: "/lovable-uploads/93d7e55c-295e-485a-bc93-1bf69f1b4f3d.png"
    },
    { 
      title: "Smart Grid Technology", 
      type: "Analytics",
      image: "/lovable-uploads/aad527f7-4c32-4b4e-89b8-a07d64574f75.png"
    },
  ];

  return (
    <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-medium text-gray-900 mb-6 text-center">Recent Projects</h2>
        <div className="grid grid-cols-4 gap-6">
          {recentProjects.map((project, index) => (
            <button
              key={index}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-4 text-left">
                <div className="text-sm font-medium text-gray-900 mb-1">{project.title}</div>
                <div className="text-xs text-gray-500">{project.type}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
