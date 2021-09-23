import classes from './Button.module.css';

const Button = ({ className, type = 'button', onClick, children }) => (
    <button className={`${classes.button} ${className}`} type={type} onClick={onClick}>
        {children}
    </button>
);

export default Button;
