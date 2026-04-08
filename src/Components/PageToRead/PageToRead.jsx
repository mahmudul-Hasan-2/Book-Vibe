import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF5252",
  "#9C27B0",
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
  const books = useLoaderData();

  return (
    <div className="w-full min-h-[500px] flex flex-col items-center justify-center p-2 md:p-10">
      <div className="w-full max-w-6xl h-[400px] md:h-[600px] bg-[#13131308] rounded-3xl p-2 md:p-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={books}
            margin={{
              top: 30,
              right: 10,
              left: -20, // বামে জায়গা বাঁচাতে নেগেটিভ মার্জিন
              bottom: 20,
            }}
            barCategoryGap={window.innerWidth < 768 ? "10%" : "20%"} // মোবাইলে গ্যাপ কমানো
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="bookName"
              axisLine={false}
              tickLine={false}
              interval={0}
              // নাম ছোট করে দেখানোর জন্য tickFormatter ব্যবহার
              tickFormatter={(value) =>
                value.length > 10 ? `${value.substring(0, 10)}...` : value
              }
              tick={{
                fill: "#13131380",
                fontSize: window.innerWidth < 768 ? 9 : 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#13131380", fontSize: 12 }}
            />

            <Bar dataKey="totalPages" shape={<TriangleBar />}>
              {books.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}

              <LabelList
                dataKey="totalPages"
                position="top"
                content={(props) => {
                  const { x, y, width, value, index } = props;
                  return (
                    <text
                      x={x + width / 2}
                      y={y - 10}
                      fill={colors[index % colors.length]}
                      textAnchor="middle"
                      fontSize={window.innerWidth < 768 ? 10 : 14}
                      fontWeight="bold"
                    >
                      {value}
                    </text>
                  );
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageToRead;
