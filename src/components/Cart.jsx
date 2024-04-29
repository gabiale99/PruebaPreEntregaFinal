import Container from 'react-bootstrap/Container';
import { useContext, useState } from 'react';

import { CartContext } from '../contexts/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const initialValue = {
  name: '',
  phone: '',
  email: '',
};

export const Cart = () => {
  const [values, setValues] = useState(initialValue);
  const { clear, items } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, 'orders');

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert('Su orden: ' + id + ' ha sido completada');
        }
      })
      .finally(() => {
        clear();
        setValues(initialValue);
      });
  };

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.title}>
            <li>Prod: {i.title}</li>
            <li>Cant: {i.price}</li>
            <li>$ {i.quantity}</li>
          </ul>
        );
      })}
      <div>Total: {total()}</div>
      {items?.length > 0 && (
        <font>
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Enviar
          </button>
        </font>
      )}
    </Container>
  );
};
