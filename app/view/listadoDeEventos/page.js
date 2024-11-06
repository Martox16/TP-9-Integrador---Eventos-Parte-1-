"use client";

import React, { useEffect, useState } from 'react';
import EventCard from '../../components/listadoDeEventos/index.js';
import styles from './listadoDeEventos.module.css';

const ListadoDeEventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Simulando una llamada a API para obtener los eventos.
    const fetchEventos = async () => {
      // Aquí iría una llamada real a la API
      const response = await fetch('/api/eventos'); // Cambiar con la URL de tu API
      const data = await response.json();
      setEventos(data);
    };

    fetchEventos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Listado de Eventos</h1>
      <div className={styles.eventsList}>
        {eventos.map((evento) => (
          <EventCard key={evento.id} event={evento} />
        ))}
      </div>
    </div>
  );
};

export default ListadoDeEventos;
