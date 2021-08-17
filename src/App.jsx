import React, { useState, useEffect } from 'react';
import './App.scss';
import generator from 'generate-password';

function App() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const generatePassword = () => {
    const pwd = generator.generate({
      length: 5,
      numbers: true,
    });
    const newPwd = pwd.split('');

    // let user = users.find(item => item.id == 1);

    const isMatch = newPwd.includes('0');

    if (isMatch) {
      setError(isMatch);
    }

    setPassword(newPwd);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generatePassword();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="app">
        {password ? <p>{password}</p> : <p>{` Пароль содержит 0 :${error}`}</p>}
      </div>
    </div>
  );
}

export default App;
