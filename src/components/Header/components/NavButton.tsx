import { Link } from "react-router-dom";

type Props = {
    linkTo: string,
    title: string,
};

const CustomNavButton = ({linkTo, title}: Props) => {
    return (
        <div>
            <Link to={linkTo}>
                {title}
            </Link>
        </div>
    );
};

export default CustomNavButton;