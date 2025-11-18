import React from 'react';

interface AdPlaceholderProps {
  height: string;
  text: string;
  label: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ height, text, label }) => {
  const classNames = `flex items-center justify-center bg-gray-100 rounded-lg text-gray-400 text-sm w-full ${height}`;
  return (
    <div className="relative">
      <div className={classNames}>
          <span>{text}</span>
      </div>
      <p className="absolute top-1 right-2 text-xs text-gray-400">{label}</p>
    </div>
  );
};

export default AdPlaceholder;