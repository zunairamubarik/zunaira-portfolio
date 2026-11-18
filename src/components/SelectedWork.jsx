import React, { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    'All',
    'UI/Web',
    'Meta Ads',
    'Brand & Design',
    'Automation',
    'SEO'
  ];

  // Exact mapping for the 10 verified projects
  const filteredProjects = projectsList.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'UI/Web') {
      return project.id === 'elkhart-ophthalmology' || project.id === 'daha-fragrance';
    }
    if (activeFilter === 'Meta Ads') {
      return [
        'daha-fragrance',
        'redshift-online',
        'meqy-dispatch',
        'academy-admissions',
        'clothing-brand'
      ].includes(project.id);
    }
    if (activeFilter === 'Brand & Design') {
      return [
        'spiral-uae',
        'koh-waters',
        'elkhart-ophthalmology'
      ].includes(project.id);
    }
    if (activeFilter === 'Automation') {
      return project.id === 'moorthix-automation';
    }
    if (activeFilter === 'SEO') {
      return project.id === 'meqy-jewellers';
    }
    return true;
  });

  return (
    <section
      id="work"
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
              <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
                Portfolio Showcase
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight">
              Selected <span className="text-[#CD7E59] italic font-serif font-normal">Work</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-[#EFEADD]/80 mt-3 max-w-xl leading-relaxed">
              10 verified client projects spanning UI design in Figma, WordPress, Meta advertising campaigns, SEO, and GoHighLevel systems.
            </p>
          </div>

          <span className="text-xs font-sans text-[#7B7569] uppercase tracking-wider hidden md:block">
            Showing {filteredProjects.length} of {projectsList.length} Verified Projects
          </span>
        </div>

        {/* Filter Tabs: Horizontal scroll on mobile (without window scrolling sideways) */}
        <div className="mb-10 sm:mb-12 -mx-5 px-5 sm:mx-0 sm:px-0 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 min-w-max pb-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`min-h-[44px] px-5 py-2.5 rounded-full font-serif font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-[#CD7E59] text-[#EFEADD] shadow-md shadow-[#CD7E59]/25 scale-100'
                      : 'bg-[#142F37] text-[#EFEADD]/75 hover:text-[#EFEADD] border border-[#7B7569]/30 hover:border-[#CD7E59]/50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Bento Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Detail Modal Component */}
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
