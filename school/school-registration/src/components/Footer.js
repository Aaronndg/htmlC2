const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Escuela de Registro. Todos los derechos reservados.</p>
            <nav>
                <a href="#about" style={{ margin: '0 10px' }}>Acerca de</a>
                <a href="#contact" style={{ margin: '0 10px' }}>Contacto</a>
                <a href="#privacy" style={{ margin: '0 10px' }}>Política de Privacidad</a>
            </nav>
        </footer>
    );
};

export default Footer;