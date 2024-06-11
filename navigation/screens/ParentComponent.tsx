import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const [childData, setChildData] = useState<string>('');

  const handleDataFromChild = (data: string) => {
    setChildData(data);
    console.log('Data received from child:', data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      <ChildComponent sendDataToParent={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
