
interface RecentProjectsSectionProps {}

export function RecentProjectsSection({}: RecentProjectsSectionProps) {
  const recentProjects = [
    { 
      title: "Solar Energy Solutions", 
      type: "Agent",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Hotel Energy Management", 
      type: "App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Infrastructure Renewal", 
      type: "Automation",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&crop=center"
    },
    { 
      title: "Smart Grid Technology", 
      type: "Analytics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&crop=center"
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
