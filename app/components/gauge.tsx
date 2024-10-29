"use client";

import React, { useState, useEffect } from "react";

interface AnimatedGaugeProps {
  minValue?: number;
  maxValue?: number;
}

const AnimatedGauge = ({
  minValue = 20,
  maxValue = 90,
}: AnimatedGaugeProps) => {
  const [value, setValue] = useState<number>(
    Math.floor((minValue + maxValue) / 2)
  );

  useEffect(() => {
    const updateMetrics = () => {
      // Generate random change between -5 and +5
      const change = Math.floor(Math.random() * 11) - 5;

      // Calculate new value ensuring it stays within bounds
      const newValue = Math.min(Math.max(value + change, minValue), maxValue);

      setValue(newValue);
    };

    // Set up constant 1000ms interval
    const intervalId = setInterval(updateMetrics, 700);

    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [value, minValue, maxValue]);

  // Calculate the percentage for the gauge
  const percentage = (value / 100) * 100;

  // Calculate the color based on the value
  const getColor = () => {
    if (percentage <= 40) return "text-red-500";
    if (percentage <= 70) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className={`relative w-48 h-48 m-auto`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40">
          {/* Background circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="black"
              stroke="currentColor"
              className="text-black"
              strokeWidth="10"
            />
            {/* Foreground circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              className={`${getColor()} transition-all duration-300`}
              strokeWidth="10"
              strokeDasharray={`${percentage * 2.827}, 282.7`}
            />
          </svg>
          {/* Value display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getColor()}`}>
              {value} TPM
            </span>
            <span className="text-xs text-white">
              (Transactions Per Minute)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGauge;
