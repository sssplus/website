import React from 'react';
import { Cable, Cog, Cpu } from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: Cable,
      title: 'Custom Wire Harnessing',
      description: 'Precision-engineered wire harnesses tailored to your exact specifications. From simple point-to-point connections to complex multi-branch assemblies with overmolding and shielding options.'
    },
    {
      icon: Cog,
      title: 'Robotic Drag Chain Assembly',
      description: 'High-flex cable assemblies designed for continuous motion applications. Engineered for durability in automated systems, robotics, and CNC machinery with strain relief optimization.'
    },
    {
      icon: Cpu,
      title: 'Electromechanical Integration',
      description: 'Complete box build and system integration services. We combine electrical assemblies with mechanical components, sensors, and control systems for turnkey solutions.'
    }
  ];

  return (
    <section id='capabilities' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#003366] mb-4'>Our Capabilities</h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            End-to-end manufacturing services for mission-critical interconnect solutions
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {capabilities.map((capability, index) => (
            <div key={index} className='bg-white border-2 border-gray-200 p-8 hover:border-[#FF5722] transition-colors'>
              <div className='w-16 h-16 bg-[#003366] flex items-center justify-center mb-6'>
                <capability.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-bold text-[#003366] mb-4'>{capability.title}</h3>
              <p className='text-gray-600 leading-relaxed'>{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;