import { FaPhoneAlt, FaPaperPlane, FaRegEnvelope, FaMapMarkerAlt, FaFax } from "react-icons/fa";
import InputComponent from '..//..//form/input/InputComponent';
import styles from'./contact.module.css';

function Contact() {
    return(
        <div className={styles.container}>
            <div className={styles.container_cards}>
                <div className={styles.card}>
                    <FaMapMarkerAlt />
                    <h4>Escritório</h4>
                    <p>SoHo 94 bradway st New York, NY 1001</p>
                </div>
                <div className={styles.card}>
                    <FaPhoneAlt />
                    <h4>Número de telefone</h4>
                    <p>215 - 21543 - 5544- 4 (Ligação gratuita)</p>
                    
                </div>
                <div className={styles.card}>
                    <FaFax />
                    <h4>FAX</h4>
                    <p>1-1001-567-8955</p>
                </div>
                <div className={styles.card}>
                    <FaRegEnvelope />
                    <h4>Email</h4>
                    <p>PorjectReact@dev.com</p>
                </div>
            </div>
            <div className={styles.contactContainer}>
                <h1>Entre em contato <span>conosco</span> </h1>
                <InputComponent
                type="text" 
                text="Nome"
                name="name"
                placeholder="digite seu nome"
                />
                <InputComponent
                type="email" 
                text="Email"
                name="email"
                placeholder="digite seu email"
                />
                <textarea 
                className={styles.textarea}
                name="textArea" 
                rows="5" 
                cols="55">
                </textarea>
                <button>Enviar <FaPaperPlane /></button>
            </div>
        </div>
    )
}

export default Contact;