import React from 'react';
import Routes from './routes'; // Импортируем маршруты

const App = () => {
  return (
    <div className="app">
      <Routes /> {/* Подключаем маршрутизацию */}
    </div>
  );
};

export default App;