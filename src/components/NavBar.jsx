import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Game", path: "/game" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: 1,
            }}
          >
            {/* Logo/Brand */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: 'scale(1.05)',
                },
              }}
            >
              Brain Gym
              <Box
                component="span"
                sx={{
                  fontSize: "1rem",
                  background: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 400,
                }}
              >
                Math
              </Box>
            </Typography>

            {/* Desktop Navigation */}
            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: "#1e293b",
                    fontWeight: 500,
                    fontSize: "1rem",
                    px: 3,
                    py: 1,
                    borderRadius: "10px",
                    textTransform: "none",
                    position: 'relative',
                    overflow: 'hidden',
                    transition: "all 0.3s ease",
                    "&:before": {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                      transition: 'left 0.5s ease',
                    },
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      color: "#3b82f6",
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.15)',
                      "&:before": {
                        left: '100%',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              {/* Donate Button */}
              <Button
                component="a"
                href="https://www.paypal.com/donate?hosted_button_id=DNRJD3RMZAQCQ"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  ml: 2,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: "white",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  borderRadius: "10px",
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  transition: "all 0.3s ease",
                  position: 'relative',
                  overflow: 'hidden',
                  "&:before": {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    transition: 'left 0.6s ease',
                  },
                  "&:hover": {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(59, 130, 246, 0.4)",
                    "&:before": {
                      left: '100%',
                    },
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                Donate
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
                color: "#1e293b",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: '2px solid #e0e7ff' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#1e293b" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  "&:hover": {
                    backgroundColor: "#f1f5f9",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    color: "#1e293b",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          
          {/* Donate Button in Mobile Menu */}
          <ListItem sx={{ px: 2, pt: 2 }}>
            <Button
              component="a"
              href="https://www.paypal.com/donate?hosted_button_id=DNRJD3RMZAQCQ"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              sx={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: "white",
                fontWeight: 600,
                py: 1.5,
                textTransform: "none",
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
                "&:hover": {
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  boxShadow: '0 6px 16px rgba(59, 130, 246, 0.4)',
                },
              }}
            >
              Donate
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
