// app/components/login/LoginForm/index.js
"use client";
import React, { useState } from 'react';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Inicio de sesión exitoso!');
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles['form-group']}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className={styles['login-button']}>Ingresar</button>
    </form>
  );
};

export default LoginForm;
