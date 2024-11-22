import React from 'react';
import { BookOpen, Play, CheckCircle } from 'lucide-react';

const tutorials = [
  {
    title: 'Introduction to Neural Networks',
    description: 'Learn the fundamentals of neural networks and deep learning',
    duration: '2 hours',
    level: 'Beginner',
    progress: 0,
  },
  {
    title: 'Computer Vision Basics',
    description: 'Understanding image processing and recognition',
    duration: '3 hours',
    level: 'Intermediate',
    progress: 60,
  },
  {
    title: 'Natural Language Processing',
    description: 'Master text analysis and language models',
    duration: '4 hours',
    level: 'Advanced',
    progress: 100,
  },
];

export default function Tutorials() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Tutorials</h1>
          <p className="mt-4 text-xl text-gray-600">Start your AI journey with our interactive lessons</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <div key={tutorial.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.level}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Play className="h-4 w-4 mr-1" />
                  {tutorial.duration}
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-indigo-600">
                        {tutorial.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                    <div
                      style={{ width: `${tutorial.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    />
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
                  {tutorial.progress === 100 ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      {tutorial.progress === 0 ? 'Start Tutorial' : 'Continue'}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}