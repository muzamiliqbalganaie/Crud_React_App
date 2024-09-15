import styles from "../styles/footer.module.css";

const Footer =(props) => {
    let  number = null;
    return (
    <> 
     the number is {number !== null ? number :0}
    <h2>Copywright &copy; 2023</h2>
    <p className={styles.paragraph}>BYE BYE {props.fullName} </p>
    <p>Age is {props.Age}</p>
    </> 
       
    );
    
};
export default Footer;