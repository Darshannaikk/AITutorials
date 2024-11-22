import React, { useState, useEffect } from 'react';
import { Play, RefreshCcw } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DataPoint {
  x: number;
  y: number;
  label: number;
}

export default function Playground() {
  const [learningRate, setLearningRate] = useState(0.1);
  const [epochs, setEpochs] = useState(50);
  const [isTraining, setIsTraining] = useState(false);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [accuracy, setAccuracy] = useState<number[]>([]);
  const [loss, setLoss] = useState<number[]>([]);
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);

  // Generate random data points
  const generateData = () => {
    const newPoints: DataPoint[] = [];
    // Generate two clusters of points
    for (let i = 0; i < 100; i++) {
      if (i < 50) {
        // Cluster 1
        newPoints.push({
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
          label: 0
        });
      } else {
        // Cluster 2
        newPoints.push({
          x: Math.random() * 2 + 1,
          y: Math.random() * 2 + 1,
          label: 1
        });
      }
    }
    setDataPoints(newPoints);
  };

  useEffect(() => {
    generateData();
  }, []);

  const trainModel = async () => {
    setIsTraining(true);
    setCurrentEpoch(0);
    setAccuracy([]);
    setLoss([]);

    // Simulated training loop
    for (let epoch = 0; epoch < epochs; epoch++) {
      await new Promise(resolve => setTimeout(resolve, 100)); // Simulate training delay

      // Simulate accuracy and loss values
      const newAccuracy = Math.min(0.5 + (epoch / epochs) * 0.45 + Math.random() * 0.05, 1);
      const newLoss = Math.max(0.5 - (epoch / epochs) * 0.45 + Math.random() * 0.05, 0);

      setCurrentEpoch(epoch + 1);
      setAccuracy(prev => [...prev, newAccuracy]);
      setLoss(prev => [...prev, newLoss]);
    }

    setIsTraining(false);
  };

  const chartData = {
    labels: Array.from({ length: accuracy.length }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Accuracy',
        data: accuracy,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
      },
      {
        label: 'Loss',
        data: loss,
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Training Progress',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 1,
      }
    }
  };

  return (
    <div id="playground" className="bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Playground</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience AI in action
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <div className="h-96 bg-white rounded-lg">
                {accuracy.length > 0 && (
                  <Line options={chartOptions} data={chartData} />
                )}
              </div>
              <div className="mt-4 text-center">
                {isTraining && (
                  <p className="text-indigo-600">
                    Training Progress: {currentEpoch}/{epochs} epochs
                  </p>
                )}
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neural Network Training</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Learning Rate: {learningRate}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="1"
                    step="0.01"
                    value={learningRate}
                    onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Epochs: {epochs}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="10"
                    value={epochs}
                    onChange={(e) => setEpochs(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={trainModel}
                    disabled={isTraining}
                    className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    {isTraining ? 'Training...' : 'Train Model'}
                  </button>

                  <button
                    onClick={generateData}
                    disabled={isTraining}
                    className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RefreshCcw className="h-5 w-5 mr-2" />
                    New Data
                  </button>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <h4 className="font-semibold mb-2">Current Configuration:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Model: Simple Neural Network</li>
                    <li>• Hidden Layers: 2</li>
                    <li>• Neurons per layer: [64, 32]</li>
                    <li>• Activation: ReLU, Sigmoid</li>
                    <li>• Learning Rate: {learningRate}</li>
                    <li>• Epochs: {epochs}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}