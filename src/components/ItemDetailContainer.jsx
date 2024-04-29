import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

import { getFirestore, getDoc, doc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, 'items', id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  if (!product) return <div>Cargando</div>;

  return (
    <Container className="mt-4">
      <h1>{product.title}</h1>
      <img src={product.pictureUrl} />
      <p>{product.description}</p>
      <div>{`Stock ${product.stock}`}</div>
      <div>{`Precio ${product.price}`}</div>
    </Container>
  );
};
