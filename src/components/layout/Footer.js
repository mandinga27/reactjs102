import React from 'react'

const fecha = new Date().getFullYear();

const Footer = ({ fecha }) => {

    

    return (
        <footer>
            <p>Todos los Derechos Reservados &copy; {fecha} </p>
        </footer>
    );
}






export default Footer;