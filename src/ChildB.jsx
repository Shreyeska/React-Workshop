import React from 'react';
import { useFruit } from './FruitContext';

const ChildB = () => {
  const { fruitName } = useFruit();

  return (
    <div>
      <h3>Child B Component</h3>
      <p>Fruit Name: {fruitName}</p>
    </div>
  );
};

export default ChildB;