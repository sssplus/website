import React from 'react';
import { CheckCircle2, Shield, FileCheck } from 'lucide-react';

const QualityAssurance = () => {
  const standards = [
    {
      icon: CheckCircle2,
      title: 'Built to IPC/WHMA-A-620 Standards',
      description: 'All assemblies manufactured in strict compliance with IPC/WHMA-A-620 workmanship standards for cable and wire harness assemblies.'
    },
    {
      icon: Shield,
      title: 'RoHS Compliant Material Sourcing',
      description: 'Environmentally responsible manufacturing with RoHS-compliant materials. Full traceability and documentation for all components.'
    },
    {
      icon: FileCheck,
      title: 'Designed for JSS-51034 Applications',
      description: 'Engineering expertise in high-reliability applications meeting JSS-51034 space-level requirements and military-grade specifications.'
    }
  ];

  return (
    <section id='quality' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#003366] mb-4'>Quality Assurance</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Uncompromising quality standards backed by rigorous testing and certification
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {standards.map((standard, index) => (
            <div key={index} className='border-l-4 border-[#FF5722] bg-gray-50 p-8'>
              <div className='flex items-start gap-4'>
                <div className='flex-shrink-0'>
                  <standard.icon className='w-12 h-12 text-[#FF5722]' />
                </div>
                <div>
                  <h3 className='text-lg font-bold text-[#003366] mb-3'>{standard.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{standard.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;