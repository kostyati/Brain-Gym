import { Container, Typography, Box, Paper } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6, md: 8 }, animation: 'fadeIn 0.5s ease-in-out' }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4, md: 6 },
          borderRadius: { xs: '16px', md: '20px' },
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
          border: '2px solid #e0e7ff',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 3, md: 4 },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          }}
        >
          About Brain Gym Math
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: { xs: 2, md: 3 },
            lineHeight: 1.8,
            color: "#475569",
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          Welcome to Brain Gym Math - your interactive platform for mastering mathematics through
          daily practice and personalized learning experiences.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: { xs: 3, md: 4 },
            mb: { xs: 1.5, md: 2 },
            fontWeight: 600,
            color: "#3b82f6",
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
          }}
        >
          🎯 Our Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: { xs: 2, md: 3 },
            lineHeight: 1.8,
            color: "#475569",
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          We believe that consistent practice is the key to mathematical proficiency. Our platform
          helps students build confidence and skills through engaging, customizable practice sessions.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: { xs: 3, md: 4 },
            mb: { xs: 1.5, md: 2 },
            fontWeight: 600,
            color: "#3b82f6",
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
          }}
        >
          ✨ Features
        </Typography>
        <Box
          component="ul"
          sx={{
            color: "#475569",
            lineHeight: { xs: 2, md: 2.5 },
            listStyle: 'none',
            paddingLeft: 0,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            '& li': {
              paddingLeft: { xs: '25px', md: '30px' },
              position: 'relative',
              transition: 'all 0.3s ease',
              marginBottom: { xs: '8px', md: '12px' },
              '&:before': {
                content: '"✓"',
                position: 'absolute',
                left: 0,
                color: '#22c55e',
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.2rem' },
              },
              '&:hover': {
                color: '#3b82f6',
                paddingLeft: { xs: '30px', md: '35px' },
              },
            },
          }}
        >
          <li>Customizable difficulty levels for each operation</li>
          <li>Daily practice goals to build consistency</li>
          <li>Instant feedback on answers</li>
          <li>Progress tracking</li>
          <li>Free to use for everyone</li>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, md: 4 },
            p: { xs: 2, md: 3 },
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
            borderRadius: { xs: '8px', md: '12px' },
            border: '2px solid #bfdbfe',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#1e293b",
              fontWeight: 500,
              textAlign: 'center',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            🚀 Start your math journey today and watch your skills grow!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
