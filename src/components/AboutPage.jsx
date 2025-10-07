import { Container, Typography, Box, Paper } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8, animation: 'fadeIn 0.5s ease-in-out' }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6,
          borderRadius: '20px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
          border: '2px solid #e0e7ff',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            mb: 4, 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Brain Gym Math
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "#475569" }}>
          Welcome to Brain Gym Math - your interactive platform for mastering mathematics through 
          daily practice and personalized learning experiences.
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            mt: 4, 
            mb: 2, 
            fontWeight: 600, 
            color: "#3b82f6",
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          🎯 Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "#475569" }}>
          We believe that consistent practice is the key to mathematical proficiency. Our platform 
          helps students build confidence and skills through engaging, customizable practice sessions.
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            mt: 4, 
            mb: 2, 
            fontWeight: 600, 
            color: "#3b82f6",
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          ✨ Features
        </Typography>
        <Box 
          component="ul" 
          sx={{ 
            color: "#475569", 
            lineHeight: 2.5,
            listStyle: 'none',
            paddingLeft: 0,
            '& li': {
              paddingLeft: '30px',
              position: 'relative',
              transition: 'all 0.3s ease',
              '&:before': {
                content: '"✓"',
                position: 'absolute',
                left: 0,
                color: '#22c55e',
                fontWeight: 700,
                fontSize: '1.2rem',
              },
              '&:hover': {
                color: '#3b82f6',
                paddingLeft: '35px',
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
            mt: 4,
            p: 3,
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
            borderRadius: '12px',
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
            }}
          >
            🚀 Start your math journey today and watch your skills grow!
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
