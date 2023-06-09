// import CustomNavButton from "./components/NavButton";
// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <div component='header'
//             paddingX={1}
//             sx={{
//                 position: 'sticky',
//                 top: 0,
//                 left: 0,
//                 width: '100vw',

//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: 'white',

//                 "&:before": {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     display: 'block',
//                     height: '64px',
//                     width: '100vw',
//                 }
//             }}
//         >
//             <div
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <div
//                     paddingX={1}
//                 >
//                     <Link to="/">
//                         <img style={{
//                             objectFit: 'contain',
//                             height: '64px',
//                         }}
//                             src="./logo192.png" alt="logo" />
//                     </Link>
//                 </div>
//                 <ul component="nav"
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <CustomNavButton
//                         linkTo="/"
//                         title={'Artworks'}
//                     />
//                     <CustomNavButton
//                         linkTo="/about"
//                         title={'Artists'}
//                     />
//                     <CustomNavButton
//                         linkTo="/services"
//                         title={'Послуги'}
//                     />
//                     <CustomNavButton
//                         linkTo="/contact"
//                         title={'Контакти'}
//                     />
//                 </ul>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     InputProps={{
//                         startAdornment: (
//                             <InputAdornment position="start">
//                                 <IconButton>
//                                     <SearchIcon />
//                                 </IconButton>
//                             </InputAdornment>
//                         )
//                     }}
//                 />
//             </div>
//             <Box
//                 paddingX={2}
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <List
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <CustomNavButton
//                         linkTo="favourites"
//                         title={'Favourites'}
//                     />
//                     <CustomNavButton
//                         linkTo="checkout"
//                         title={'Checkout'}
//                     />
//                     <ListItem button>
//                         <ListItemText primary="Register" />
//                     </ListItem>
//                     <ListItem button>
//                         <ListItemText primary="Login" />
//                     </ListItem>
//                 </List>
//             </Box>
//         </div>
//     );
// };

// export default Header;