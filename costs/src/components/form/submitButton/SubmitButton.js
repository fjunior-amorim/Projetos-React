import styles from './submitbutton.module.css';

function SubmitButton({ text }) {
    return(
      <div>
        <button className={styles.btn_submit}>{text}</button> 
       </div>  
    )
      
}

export default SubmitButton;