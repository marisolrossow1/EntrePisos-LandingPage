import * as React from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import logoNav from '../assets/logoNav.svg'
import logoNavMobile from '../assets/logoNavMobile.svg'

const pages = ['inicio', 'beneficios', 'testimonios', 'preguntas-frecuentes', 'comencemos', 'descargar'];

function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();

        // Función para poner en mayúscula solo la primera letra de cada palabra
        const capitalizeWords = (str) => {
            return str
                .toLowerCase()
                .replace(/\b\w/g, (char) => char.toUpperCase());  // Capitaliza la primera letra de cada palabra
        };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Desktop Logo */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logoNav} alt="EntrePisos" />
                        </a>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            sx={{ color: theme.palette.primary.main }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ color: theme.palette.text.default }}
                                >
                                    <a
                                        href={`${page.toLowerCase()}`}
                                        style={{
                                            textDecoration: 'none',
                                            textAlign: 'left',
                                            color: theme.palette.text.default,
                                            display: 'block',
                                            width: '100%',
                                        }}
                                    >
                                        <Typography variant="inherit" sx={{ color: theme.palette.text.default, textTransform: 'none' }}>
                                            {capitalizeWords(page.replace(/-/g, ' '))}
                                        </Typography>
                                    </a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <a href="/">
                            <img src={logoNavMobile} alt="EntrePisos" style={{ height: '40px', width: 'auto' }} />
                        </a>
                    </Box>

                    {/* Desktop Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page) => (
                            <a
                                href={`#${page === "Inicio" ? "inicio" : page.toLowerCase()}`}
                                style={{
                                    textDecoration: 'none',
                                    color: theme.palette.text.default,
                                }}
                            >
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        color: theme.palette.text.default,
                                        textAlign: 'center',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography variant="inherit" sx={{ color: theme.palette.text.default }}>
                                        {capitalizeWords(page.replace(/-/g, ' '))}
                                    </Typography>
                                </MenuItem>
                            </a>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navigation;