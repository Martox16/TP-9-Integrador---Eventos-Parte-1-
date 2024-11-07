// app/view/listadoDeEventos/page.js
import ListadoDeEventos from '../../components/listadoDeEventos/listadoDeEventos';

const eventos = [
  { id: 1, title: 'Evento 1', description: 'Descripción 1', date: '2024-11-01' },
  { id: 2, title: 'Evento 2', description: 'Descripción 2', date: '2024-11-02' },
  { id: 3, title: 'Evento 3', description: 'Descripción 3', date: '2024-11-03' },
];

export default function Page() {
  return <ListadoDeEventos events={eventos} />;
}
