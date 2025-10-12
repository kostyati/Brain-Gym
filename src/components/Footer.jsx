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
        pt: 3,
        pb: 2,
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
            gap: { xs: 2, md: 3 },
            mb: { xs: 2, md: 3 },
          }}
        >
          {/* Brand Section */}
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              maxWidth: "400px",
              width: { xs: '100%', md: 'auto' },
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
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              brain CrossFit
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#94a3b8",
                lineHeight: 1.7,
                fontSize: { xs: '0.875rem', md: '1rem' },
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
                fontSize: { xs: '1rem', md: '1.125rem' },
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
                  fontSize: { xs: '0.875rem', md: '1rem' },
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
                  fontSize: { xs: '0.875rem', md: '1rem' },
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
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '280px', md: 'none' },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#f1f5f9",
                fontSize: { xs: '1rem', md: '1.125rem' },
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
                padding: { xs: "10px 20px", md: "12px 28px" },
                fontSize: { xs: "13px", md: "14px" },
                fontWeight: 600,
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: "all 0.3s ease",
                position: 'relative',
                overflow: 'hidden',
                width: { xs: '100%', md: 'auto' },
                minHeight: { xs: '44px', md: 'auto' },
                display: { xs: 'flex', md: 'inline-block' },
                alignItems: { xs: 'center', md: 'auto' },
                justifyContent: { xs: 'center', md: 'auto' },
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
                fontSize: { xs: '0.75rem', md: '0.875rem' },
              }}
            >
              Help keep Brain Gym free
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#334155", mb: 2 }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2, sm: 2 },
          }}
        >
          {/* Copyright */}
          <Typography
            variant="body2"
            sx={{
              color: "#94a3b8",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              textAlign: { xs: "center", sm: "left" },
              lineHeight: 1.5,
            }}
          >
            © {currentYear} Brain Gym. Built with{" "}
            <FavoriteIcon
              sx={{
                fontSize: { xs: 12, md: 14 },
                verticalAlign: "middle",
                color: "#ef4444",
                mx: 0.5,
              }}
            />{" "}
            for math learners everywhere.
          </Typography>

          {/* Social Links */}
          <Box sx={{ display: "flex", gap: { xs: 0.5, md: 1 }, justifyContent: { xs: "center", sm: "flex-end" } }}>
            <IconButton
              component={Link}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub"
              sx={{
                color: "#94a3b8",
                transition: "all 0.3s ease",
                minWidth: { xs: "40px", md: "auto" },
                minHeight: { xs: "40px", md: "auto" },
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  transform: 'translateY(-3px) rotate(5deg)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <GitHubIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
            </IconButton>
            <IconButton
              component={Link}
              href="mailto:contact@plan-a.app"
              aria-label="Send us an email"
              sx={{
                color: "#94a3b8",
                transition: "all 0.3s ease",
                minWidth: { xs: "40px", md: "auto" },
                minHeight: { xs: "40px", md: "auto" },
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  transform: 'translateY(-3px) rotate(-5deg)',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                },
              }}
            >
              <EmailIcon sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
