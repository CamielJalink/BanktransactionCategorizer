import React from 'react';
import './App.scss';
import CategoryPicker from './Components/CategoryPicker';

const App: React.FC = () => {
  return (
    <div className="App">
      <CategoryPicker></CategoryPicker>
    </div>
  );
}

export default App;
