// app/layout.js
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
      setUser(usuario);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Image src="/img/logo.png" alt="Logo del sitio" width={150} height={50} />
            </div>
            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/contacto">Contacto</Link>
              {user && (
                <div className={styles.userInfo}>
                  <span>Hola, {user.nombre}</span>
                  <button onClick={() => {
                    localStorage.removeItem('usuario');
                    setUser(null);
                  }}>Cerrar sesión</button>
                </div>
              )}
            </nav>
          </header>
          <main>{children}</main>
          <footer className={styles.footer}>© Sitio De Eventos</footer> {/* Cambié el selector global a la clase */}
        </div>
      </body>
    </html>
  );
};

export default Layout;
