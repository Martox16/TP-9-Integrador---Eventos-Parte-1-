import React from 'react';
import Link from 'next/link';
import styles from './eventCard.module.css';

const EventCard = ({ event }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{event.title}</h3>
      <p className={styles.date}>{new Date(event.date).toLocaleDateString()}</p>
      <p className={styles.description}>{event.description}</p>
      <Link href={`/eventos/${event.id}`} className={styles.detailsButton}>Ver detalles</Link>
    </div>
  );
};

export default EventCard;
