import React from 'react';

interface AdPlaceholderProps {
  width: string;
  height: string;
  text: string;
  label: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ width, height, text, label }) => {
  const classNames = `flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-400 text-gray-500 text-sm ${width} ${height}`;
  return (
    <div className="flex flex-col items-center space-y-1">
        <p className="text-xs text-gray-400">{label}</p>
        <div className={classNames}>
            <span>{text}</span>
        </div>
    </div>
  );
};

export default AdPlaceholder;