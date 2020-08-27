import React from "react";
import './Footer.css';

const Header = () => {
  return (
    <footer className='d-flex justify-content-between'>
      <div className='footer-nav'>
        <div className='item'>© Domestika 2020 </div>
        <div className='item'><a href='/terms'>Condiciones de Uso</a></div>
        <div className='item'><a  href='/policy'>Política de privacidad</a></div>
        <div className='item'><a  href='/cookies'>Política de cookies</a></div>
      </div>
      <div className='footer-nav'>
        <div className='item'>Consultas Whatsapp</div>
        <div className='item'>
          <a href='https://wa.me/34932209092?text=Consulta Neoasimilación'>+34932209092</a>
        </div>
      </div>
    </footer>
  );
};

export default Header;