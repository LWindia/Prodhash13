import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Define the type for the chart data
interface ChartComponentProps {
  data: number[]; // Array of values for the bar chart
  label: string;  // Label for the chart
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data, label }) => {
  // Define the chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Salary Distribution for ${label}`,
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Define the chart data
  const chartData = {
    labels: ['Range 1', 'Range 2', 'Range 3'], // Example salary ranges
    datasets: [
      {
        label: 'Salary (in Rs lakh per annum)',
        data: data, // Data passed from the parent component
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Bar color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return   <div style={{ height: '200px' }}> {/* Set custom height here */}
  <Bar data={chartData} options={options} />
</div>
};

export default ChartComponent;
