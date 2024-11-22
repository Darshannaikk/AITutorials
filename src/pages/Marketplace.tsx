import React from 'react';
import { Download, Star, Users, Tag } from 'lucide-react';

const models = [
  {
    title: 'Image Classification Model',
    description: 'Pre-trained model for classifying images into 1000 categories',
    author: 'AI Research Team',
    downloads: 2345,
    rating: 4.8,
    price: 'Free',
    tags: ['Computer Vision', 'Classification'],
  },
  {
    title: 'Sentiment Analysis BERT',
    description: 'Fine-tuned BERT model for sentiment analysis on product reviews',
    author: 'NLP Experts',
    downloads: 1890,
    rating: 4.6,
    price: '$49',
    tags: ['NLP', 'BERT'],
  },
  {
    title: 'Object Detection YOLOv5',
    description: 'Real-time object detection model with high accuracy',
    author: 'Vision AI Labs',
    downloads: 3210,
    rating: 4.9,
    price: '$99',
    tags: ['Computer Vision', 'Detection'],
  },
];

export default function Marketplace() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">AI Model Marketplace</h1>
          <p className="mt-4 text-xl text-gray-600">Discover and share pre-trained AI models</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <div key={model.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="mr-4">{model.author}</span>
                  <Download className="h-4 w-4 mr-1" />
                  <span className="mr-4">{model.downloads}</span>
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  <span>{model.rating}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{model.price}</span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}