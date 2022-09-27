import styles from './Form.module.scss';

import { Link } from "components";
import { Layout } from "components/account";

export default Login;

function FormGen({ name, nameInt,register, errors, type }) {

    return (
        <>
            <label>{name}</label>
            <input name={nameInt ? nameInt : 'filed'} type={type ? type : 'text'} {...register} className={`form-control ${errors? 'is-invalid' : ''}`} />
            <div className="invalid-feedback">{errors}</div>
        </>
    )
}

function Login({
    url,
    header,
    items,
    urlName,
    handleSubmit,
    formState,
}) {

    const formElements = items?.map(items => <FormGen key={items.id} {...items} /> )

    return (
        <Layout>
            <div className={styles.form}>
                <h4 className={styles.header}>{header}</h4>
                    <form onSubmit={handleSubmit}>
                        {formElements}
                        <button disabled={formState}>
                            {formState && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Login
                        </button>
                        {  url && <Link href={url}>{urlName}</Link> }
                    </form>
            </div>
        </Layout>
    );
}