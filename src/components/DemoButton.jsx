import './DemoButton.css';

const DemoButton = () => {
    return (
        <div className="demo-button-container">
            <button className="demo-button" onClick={() => {}}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@idok.pe" target="_blank" rel="noopener noreferrer" >
                    Solicita una demo
                </a>
            </button>
        </div>
);
};

export default DemoButton;