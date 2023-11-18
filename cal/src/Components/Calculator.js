import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateInputs = () => {
    if (num1.trim() === '' ) {
      setError('Num1 Cannot be Emtpy');
      setSuccess('');
      return false;
    }
    if(num2.trim()=== ''){
      setError('Error!');
      setResult('Num2 Cannot be Empty');
      return false;
    }
    if (isNaN(num1)) {
      setError('Error!');
      setResult('Num1 Cannot be Empty');
      return false;
    }
    if(isNaN(num2)){
      setError('Num1 Cannot be Emtpy');
      setSuccess('');
      return false;
    }
    setError('');
    return true;
  };

  const handleAdd = () => {
    if (validateInputs()) {
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result- ${sum}`);
      setSuccess('Success!');
    }
  };

  const handleSub = () => {
    if (validateInputs()) {
      const diff = parseFloat(num1) - parseFloat(num2);
      setResult(`Result- ${diff}`);
      setSuccess('Success!');
    }
  };
  const handleMul = () => {
    if (validateInputs()) {
      const mul = parseFloat(num1) * parseFloat(num2);
      setResult(`Result- ${mul}`);
      setSuccess('Success!');
    }
  };
  const handleDiv = () => {
    if (validateInputs()) {
      const div = parseFloat(num1) / parseFloat(num2);
      setResult(`Result- ${div}`);
      setSuccess('Success!');
    }
  };
  // ...similar functions for subtraction, multiplication, and division

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
    setError('');
    setSuccess('');
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
    setError('');
    setSuccess('');
  };

  return (
    <div class="calDiv">
      <h2 class="head">React Calculator</h2>
      <input type="text"  value={num1} onChange={handleNum1Change} />
      <br/>
      <br/><input type="text" value={num2} onChange={handleNum2Change} />
      <br />
      <br />
      <div class="buttons">
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <button onClick={handleMul}>*</button>
      <button onClick={handleDiv}>/</button>

      </div>
   

      {/* Similar buttons for other operations */}
      <br />
      {error && <p style={{ color: 'red',position: 'absolute',left: '150px' ,top:'220px'}}>{error}</p>}
      {success && <p style={{ color: 'blue',position:'absolute',left:'150px',top:'220px'}}>{success}</p>}
      <p style={{position:'absolute',left:'150px',}}>{result}</p>
    </div>
  );
};

export default Calculator;
