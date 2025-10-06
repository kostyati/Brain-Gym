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
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
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
                color: "#3b82f6",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                transition: "color 0.2s",
                "&:hover": {
                  color: "#2563eb",
                },
              }}
            >
              Brain Gym
              <Box
                component="span"
                sx={{
                  fontSize: "1rem",
                  color: "#64748b",
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
                    borderRadius: "8px",
                    textTransform: "none",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "#f1f5f9",
                      color: "#3b82f6",
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
                  backgroundColor: "#3b82f6",
                  color: "white",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  textTransform: "none",
                  borderRadius: "8px",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "#2563eb",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
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
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#3b82f6" }}>
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
                backgroundColor: "#3b82f6",
                color: "white",
                fontWeight: 600,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#2563eb",
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