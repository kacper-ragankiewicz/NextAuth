import styles from './Login.module.scss';

export default function login() {
    return(
        <div className={styles.form}>
            <form action="/api" method="post">
                    <label for='login'>Login:</label>
                    <input type="text" id="login" name="login"/>
                    <label for='pass'>Password:</label>
                    <input type="text" id="pass" name="pass" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}