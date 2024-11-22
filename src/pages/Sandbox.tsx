import React, { useState } from 'react';
import { Play, Save, Download, Upload } from 'lucide-react';

export default function Sandbox() {
  const [selectedModel, setSelectedModel] = useState('neural-network');
  const [code, setCode] = useState(`// Example Neural Network Configuration
const model = {
  layers: [
    { type: 'input', size: 784 },
    { type: 'dense', size: 128, activation: 'relu' },
    { type: 'dense', size: 10, activation: 'softmax' }
  ],
  optimizer: 'adam',
  loss: 'categorical_crossentropy'
};`);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Sandbox</h1>
          <p className="mt-4 text-xl text-gray-600">Build and experiment with AI models in real-time</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Code Editor</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <Save className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-indigo-600">
                    <Upload className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-96 p-4 font-mono text-sm bg-gray-50 rounded-lg border focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Model Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Model Type
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="neural-network">Neural Network</option>
                    <option value="cnn">Convolutional Neural Network</option>
                    <option value="rnn">Recurrent Neural Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Learning Rate
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Batch Size
                  </label>
                  <input
                    type="number"
                    className="w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue={32}
                  />
                </div>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center">
              <Play className="h-5 w-5 mr-2" />
              Run Model
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}