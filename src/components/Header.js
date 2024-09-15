import styles from "../styles/header.module.css";

const Header =(props)=>{
    const parargaphStyling = {
        backgroundColor: "red",
        color:"#kkkk",
    };
    return (
        <>
        <h1 style={{color:"green", backgroundColor:"pink"}} >Welcome {props.fullName} </h1>
        <p style={parargaphStyling}>age is {props.Age}</p>
        <p className={styles.paragraph}>styling</p>
        </>

    )
};
export default Header; 