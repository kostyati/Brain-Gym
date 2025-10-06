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
        backgroundColor: "#1e293b",
        color: "#e2e8f0",
        pt: 6,
        pb: 4,
        borderTop: "4px solid #3b82f6",
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
                color: "#3b82f6",
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
                  transition: "color 0.2s",
                  "&:hover": { color: "#3b82f6" },
                }}
              >
                About
              </Link>
              <Link
                href="/game"
                underline="hover"
                sx={{
                  color: "#94a3b8",
                  transition: "color 0.2s",
                  "&:hover": { color: "#3b82f6" },
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
                backgroundColor: "#3b82f6",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                padding: "10px 24px",
                fontSize: "14px",
                fontWeight: 600,
                transition: "all 0.2s",
                "&:hover": {
                  backgroundColor: "#2563eb",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
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
                transition: "all 0.2s",
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
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
                transition: "all 0.2s",
                "&:hover": {
                  color: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
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