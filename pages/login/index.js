import styles from './Login.module.scss';

export default function login() {
    return(
            <div className={styles.form}>
                <form action="/api/form" method="post">
                        <label htmlFor='login'>Login:</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                        />
                        <label htmlFor='pass'>Password:</label>
                        <input
                            type="text"
                            id="pass"
                            name="pass"
                            required
                            minLength="8"
                            maxLength="20"
                        />
                    <button type="submit">Submit</button>
                </form>
            </div>
    )
}