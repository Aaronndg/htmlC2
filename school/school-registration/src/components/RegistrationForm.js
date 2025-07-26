const RegistrationForm = () => {
    return (
        <form className="registration-form">
            <h2>Registro de Estudiantes</h2>
            <div className="form-group">
                <label htmlFor="name">Nombre Completo:</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo Electrónico:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Número de Teléfono:</label>
                <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grado:</label>
                <select id="grade" name="grade" required>
                    <option value="">Seleccione un grado</option>
                    <option value="1">1° Grado</option>
                    <option value="2">2° Grado</option>
                    <option value="3">3° Grado</option>
                    <option value="4">4° Grado</option>
                    <option value="5">5° Grado</option>
                </select>
            </div>
            <button type="submit">Registrar</button>
        </form>
    );
};

export default RegistrationForm;