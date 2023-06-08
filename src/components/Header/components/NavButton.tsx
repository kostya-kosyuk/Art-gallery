import { ListItem, Theme, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledNavButton = styled(ListItem)(({ theme }: { theme: Theme }) => ({
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

type Props = {
    linkTo: string,
    title: string,
};

const CustomNavButton = ({linkTo, title}: Props) => {
    return (
        <StyledNavButton>
            <Link to={linkTo}>
                {title}
            </Link>
        </StyledNavButton>
    );
};

export default CustomNavButton;