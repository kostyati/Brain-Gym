import { Box, Container, Typography, Link, IconButton, Divider, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        color: "#e2e8f0",
        pt: 6,
        pb: 4,
        borderTop: "4px solid #3b82f6",
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: "400px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
                fontSize: "1.5rem",
              }}
            >
              Brain Gym
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                lineHeight: 1.7,
              }}
            >
              Master mathematics through interactive practice and personalized learning. 
              Build confidence with every problem solved.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#f1f5f9",
              }}
            >
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/about"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  transition: "all 0.3s ease",
                  position: 'relative',
                  "&:hover": { 
                    color: "#3b82f6",
                    paddingLeft: '8px',
                  },
                  "&:before": {
                    content: '"→"',
                    position: 'absolute',
                    left: -15,
                    opacity: 0,
                    transition: 'all 0.3s ease',
                  },
                  "&:hover:before": {
                    left: -5,
                    opacity: 1,
                  },
                }}
              >
                About
              </Link>
              <Link
                href="/game"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  transition: "all 0.3s ease",
                  position: 'relative',
                  "&:hover": { 
                    color: "#3b82f6",
                    paddingLeft: '8px',
                  },
                  "&:before": {
                    content: '"→"',
                    position: 'absolute',
                    left: -15,
                    opacity: 0,
                    transition: 'all 0.3s ease',
                  },
                  "&:hover:before": {
                    left: -5,
                    opacity: 1,
                  },
                }}
              >
                Practice
              </Link>
            </Stack>
          </Box>

          {/* Support Section */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#f1f5f9",
              }}
            >
              Support Us
            </Typography>
            <Box
              component="a"
              href="https://www.paypal.com/donate?hosted_button_id=DNRJD3RMZAQCQ"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-block",
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                padding: "12px 28px",
                fontSize: "14px",
                fontWeight: 600,
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
                  boxShadow: "0 6px 16px rgba(59, 130, 246, 0.5)",
                  "&:before": {
                    left: '100%',
                  },
                },
                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              Donate via PayPal
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                mt: 1,
                color: "#64748b",
              }}
            >
              Help keep Brain Gym free
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#334155", mb: 3 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "#94a3b8",
              fontSize: "0.875rem",
            }}
          >
            © {currentYear} Brain Gym. Built with{" "}
            <FavoriteIcon
              sx={{
                fontSize: 14,
                verticalAlign: "middle",
                color: "#ef4444",
                mx: 0.5,
              }}
            />{" "}
            for math learners everywhere.
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              component={Link}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub"
              sx={{
                color: "#94a3b8",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  transform: 'translateY(-3px) rotate(5deg)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:contact@plan-a.app"
              aria-label="Send us an email"
              sx={{
                color: "#94a3b8",
                transition: "all 0.3s ease",
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  transform: 'translateY(-3px) rotate(-5deg)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
