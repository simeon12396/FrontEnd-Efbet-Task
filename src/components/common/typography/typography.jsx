import "./typography.scss";

const Typography = ({variant, children}) => {
    if(variant === "title") {
        return <p className={`title`}>{children}</p>
    };

    if(variant === "primary-text") {
        return <p className={`primary-text`}>{children}</p>
    }

    if(variant === "secondary-text") {
        return <p className={`secondary-text`}>{children}</p>
    }

    if(variant === "tertiary-text") {
        return <p className={`tertiary-text`}>{children}</p>
    }

    if(variant === "alert-text") {
        return <p className={`alert-text`}>{children}</p>
    }
};

export default Typography;