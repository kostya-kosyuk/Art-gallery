import { Box, IconButton, InputAdornment, List, ListItem, ListItemText, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <Box component='header'
            paddingX={1}
            sx={{
                position: 'sticky',
                top: 0,
                left: 0,
                width: '100vw',

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',

                "&:before": {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'block',
                    height: '64px',
                    width: '100vw',
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Box
                    paddingX={1}
                >
                    <Link to="/">
                        <img style={{
                            objectFit: 'contain',
                            height: '64px',
                        }}
                            src="./logo192.png" alt="logo" />
                    </Link>
                </Box>
                <List component="nav"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ListItem component={Link} to="/" button>
                        <ListItemText primary="Artworks" />
                    </ListItem>
                    <ListItem component={Link} to="/about" button>
                        <ListItemText primary="Artists" />
                    </ListItem>
                    <ListItem component={Link} to="/services" button>
                        <ListItemText primary="Послуги" />
                    </ListItem>
                    <ListItem component={Link} to="/contact" button>
                        <ListItemText primary="Контакти" />
                    </ListItem>
                </List>
                <TextField
                    size="small"
                    placeholder="Search..."
                    sx={{
                        height: '28px'
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <Box
                paddingX={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ListItem component={Link} to="favourites" button>
                        <ListItemText primary="Favourites" />
                    </ListItem>
                    <ListItem component={Link} to="checkout" button>
                        <ListItemText primary="Checkout" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Register" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Login" />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Header;