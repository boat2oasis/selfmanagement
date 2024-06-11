import React, { useState } from 'react';

interface ChildComponentProps {
  sendDataToParent: (data: string) => void;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ sendDataToParent }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    sendDataToParent(inputValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
