import React from 'react';
import { Brain, Code, PlayCircle, Trophy, Share2, Database } from 'lucide-react';

const features = [
  {
    name: 'Interactive Tutorials',
    description: 'Step-by-step lessons with visual aids and real-time feedback',
    icon: Brain,
  },
  {
    name: 'AI Sandbox',
    description: 'Build and train AI models with our no-code interface',
    icon: Code,
  },
  {
    name: 'Simulation Playground',
    description: 'Test your models in real-world scenarios',
    icon: PlayCircle,
  },
  {
    name: 'Gamified Learning',
    description: 'Earn certificates and compete on leaderboards',
    icon: Trophy,
  },
  {
    name: 'AI Marketplace',
    description: 'Share and discover pre-trained models',
    icon: Share2,
  },
  {
    name: 'Custom Datasets',
    description: 'Train models with your own data',
    icon: Database,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to master AI
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines theory with practice, allowing you to learn AI concepts through hands-on experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flow-root bg-white px-6 pb-8 rounded-lg border border-gray-100 hover:border-indigo-500 transition-all duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}