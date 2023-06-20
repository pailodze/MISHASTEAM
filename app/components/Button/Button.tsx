<<<<<<< HEAD
import styles from './Button.module.scss'

type Props = {
    title: string;
    className?: string;
    disabled?: boolean;
    mode?: 'fill' | 'outline';
=======

type Props = {
    title: string;
    onClick?: () => void;
>>>>>>> 6d37d4b (displayname)
}

export default (props: Props) => {

<<<<<<< HEAD
    const classes = [styles.container, props.className]
    if(props.mode == 'outline') classes.push(styles.outline)
    else classes.push(styles.fill)

    return (
        <button disabled={props.disabled} 
                className={classes.join(' ').trim()}
        >
            {props.title}
        </button>
=======
    return (
        <div onClick={props.onClick}>
            {props.title}
        </div>
>>>>>>> 6d37d4b (displayname)
    )
}