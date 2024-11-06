// app/components/registro/RegistroForm/index.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';  // Importa Link de Next.js
import styles from './registroForm.module.css';

const RegistroForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { nombre, email, password };
    localStorage.setItem('usuario', JSON.stringify(user));

    setNombre('');
    setEmail('');
    setPassword('');
    alert('Usuario registrado exitosamente!');
  };

  return (
    <form className={styles['registro-form']} onSubmit={handleSubmit}>
      <div className={styles['form-group']}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit" className={styles['registro-button']}>Registrar</button>
      
      {/* Enlace para ir a la página de login */}
      <p className={styles['login-link']}>
        ¿Ya tienes una cuenta? <Link href="/view/login">Inicia sesión</Link>
      </p>
    </form>
  );
};

export default RegistroForm;
