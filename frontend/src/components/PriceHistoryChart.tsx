import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';

const priceData = [
  { date: '2024-08', price: 70000 },
  { date: '2024-09', price: 68000 },
  { date: '2024-10', price: 65000 },
  { date: '2024-11', price: 52000 },
  { date: '2024-12', price: 48000 },
  { date: '2025-01', price: 35100, isLowest: true }, // Lowest point
  { date: '2025-02', price: 42000 },
];

// Custom dot for the lowest price point
const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  
  if (payload.isLowest) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#beee11" stroke="#4c6b22" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={3} fill="#4c6b22" />
      </g>
    );
  }
  
  return <circle cx={cx} cy={cy} r={3} fill="#66c0f4" />;
};

// Custom tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#16202d] border border-[#2a475e] rounded px-3 py-2 shadow-lg">
        <p className="text-[#c6d4df] text-xs mb-1">{data.date}</p>
        <p className="text-[#beee11] font-bold">
          {data.price.toLocaleString()}₩
        </p>
        {data.isLowest && (
          <p className="text-[#beee11] text-xs mt-1 font-medium">역대 최저가</p>
        )}
      </div>
    );
  }
  return null;
};

export function PriceHistoryChart() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={priceData}
          margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2a475e" opacity={0.3} />
          <XAxis
            dataKey="date"
            stroke="#c6d4df"
            tick={{ fill: '#c6d4df', fontSize: 12 }}
            label={{ value: '날짜', position: 'insideBottom', offset: -10, fill: '#c6d4df' }}
          />
          <YAxis
            stroke="#c6d4df"
            tick={{ fill: '#c6d4df', fontSize: 12 }}
            label={{ value: '가격(₩)', angle: -90, position: 'insideLeft', fill: '#c6d4df' }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#66c0f4"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 6, fill: '#66c0f4' }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Legend for Lowest Price */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="flex items-center gap-2 bg-[#1b2838] px-3 py-2 rounded">
          <div className="w-3 h-3 rounded-full bg-[#beee11] border-2 border-[#4c6b22]" />
          <span className="text-[#c6d4df] text-xs">역대 최저가</span>
        </div>
      </div>
    </div>
  );
}
