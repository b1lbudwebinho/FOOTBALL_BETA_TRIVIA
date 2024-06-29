import React, { useState, useEffect } from 'react';

interface ComparisonBarProps {
  percentageA: number;
  percentageB: number;
  optionA: string; // Added option labels for display
  optionB: string;
}

export default function ComparisonBar({ percentageA, percentageB, optionA, optionB }: ComparisonBarProps) {
  const [barWidthA, setBarWidthA] = useState(0);
  const [barWidthB, setBarWidthB] = useState(0);

  useEffect(() => {
    setBarWidthA(percentageA);
    setBarWidthB(percentageB);
  }, [percentageA, percentageB]);

  return (
    <div className="comparison-bar">
      <div className="bar-segment bar-a" style={{ width: `${barWidthA}%` }}>
        <span className="bar-label">{optionA}: {percentageA}%</span>
      </div>
      <div className="bar-segment bar-b" style={{ width: `${barWidthB}%` }}>
        <span className="bar-label">{optionB}: {percentageB}%</span>
      </div>
    </div>
  );
}
