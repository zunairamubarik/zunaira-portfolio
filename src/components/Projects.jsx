import React, { useState } from 'react';
import { Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import ProjectPlaceholderCard from './ProjectPlaceholderCard';
import ProjectModal from './ProjectModal';

const filterCategories = [
  'All',
  'UI/UX & Web',
  'Graphic Design',
  'Branding',
  'Digital Marketing',
  'SEO',
  'Automation'
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projectsList
    : projectsList.filter(p => p.filterCategory === activeFilter || p.category === activeFilter);

  return (
    <section id="work" className="py-24 bg-obsidian text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-500/30">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Verified client projects spanning visual design, website creation, performance marketing, and workflow automation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-brand-600 text-white shadow-glow-sm scale-105'
                  : 'bg-obsidian-surface text-slate-300 hover:text-white hover:bg-obsidian-card border border-brand-900/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-obsidian-surface rounded-3xl border border-brand-900/40 hover:border-brand-500/50 overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Graphic Card Top */}
              <div className="p-4 bg-obsidian-card/50">
                <ProjectPlaceholderCard project={project} />
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-brand-950 border border-brand-900">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-brand-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Services Provided */}
                <div className="space-y-3 pt-3 border-t border-brand-900/30">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Services Delivered:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.services.slice(0, 3).map((service, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-obsidian border border-brand-900/40 text-slate-300"
                        >
                          {service}
                        </span>
                      ))}
                      {project.services.length > 3 && (
                        <span className="text-[10px] text-brand-300 font-semibold px-1.5 py-0.5">
                          +{project.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Case Study Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-950/80 hover:bg-brand-600 text-brand-200 hover:text-white font-semibold text-xs border border-brand-500/30 hover:border-brand-500 transition-all shadow-glow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
