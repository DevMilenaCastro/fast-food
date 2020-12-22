import React from 'react';
import '../../assets/styles/components/shop/_shop.scss';
import prueba from '../../assets/images/gettyimages-945092130.jpg';

function Shop() {
  return (
    <section className="section-completa">
      <div>
        <h2 className="title_prueba">Esto es un ejemplo para todos</h2>
        <img className="img_prueba" src={prueba} alt="Esto es un ejemplo" />
      </div>

      <div>
        <p className="parrafo_prueba">
          Espero que les quede claro con estos ejemplos
        </p>
      </div>
    </section>
  );
}

export default Shop;
