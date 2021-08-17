import React, { useState, useEffect } from 'react';
import './App.css';
import generator from 'generate-password';

function App() {
  const [password, setPassword] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  const inNumbers = state => {
    let newArr = [...state.split('')];
    const fakeArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    newArr.forEach(el => {
      if (fakeArr.includes(el)) return;
    });
  };

  const generatePassword = () => {
    const pwd = generator.generate({
      length: 5,
      numbers: true,
    });
    const newPwd = pwd.split('');
    const isMatch = newPwd.includes('0');
    if (isMatch) {
      console.log('Тут был 0, но мы его не показываем');
    }
    if (newPwd.reverse().join('')) {
      setIsPalindrome('palindrom');
      if (!isPalindrome) {
        console.log('not a palindrom');
      }
    }

    if (!inNumbers(password)) {
      console.log('has a letter');
    }

    setPassword(newPwd);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generatePassword();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return <div>{password}</div>;
}

export default App;
