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
          About brain CrossFit 
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
          Welcome to Brain Corossfit! Sharpen your arithmetic skills with our interactive practice platform.
          Whether you're a student looking to build confidence, a parent helping with homework, or someone who wants to keep their mind agile.
          Our adaptive math exercises make learning engaging for all ages.
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
          🎯 Why Practice Matters
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
          Mathematics is like a muscle—it grows stronger with regular exercise. Daily practice improves number sense,
          mental calculation speed, and mathematical fluency. Research shows that students who practice consistently perform better in math overall.
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
          ✨ Key Features
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
          <li><strong>Addition, Subtraction, Multiplication & Division:</strong> Practice all four operations</li>
          <li><strong>Customizable Ranges:</strong> Set difficulty levels from 1-100 or higher</li>
          <li><strong>Daily Goal Tracking:</strong> Complete 20 problems daily to build consistency</li>
          <li><strong>Instant Feedback:</strong> Immediate correction with positive reinforcement</li>
          <li><strong>Progress Persistence:</strong> Your settings and daily progress are saved automatically</li>
          <li><strong>Mobile Optimized:</strong> Practice comfortably on phones, tablets, and computers</li>
          <li><strong>Keyboard or Touch:</strong> Use Enter key or tap Submit for quick answering</li>
        </Box>

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
          📱 How to Use Brain Gym
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
          <strong>1. Customize:</strong> Choose which operations to practice and set difficulty ranges.<br />
          <strong>2. Start Practicing:</strong> Click "Start Daily Practice" to begin.<br />
          <strong>3. Solve Problems:</strong> Work through the math problems that appear.<br />
          <strong>4. Get Feedback:</strong> See immediate feedback (✓ for correct, ✗ for try again).<br />
          <strong>5. Track Progress:</strong> Monitor your daily goal completion on the progress circle.<br />
          <strong>6. Restart Anytime:</strong> Use the Restart button to reset the session.
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
          🎓 Educational Benefits
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
                content: '"🎓"',
                position: 'absolute',
                left: 0,
                fontSize: { xs: '1rem', md: '1.2rem' },
              },
              '&:hover': {
                color: '#3b82f6',
                paddingLeft: { xs: '30px', md: '35px' },
              },
            },
          }}
        >
          <li>Improve calculation speed and accuracy</li>
          <li>Build mental math abilities</li>
          <li>Develop number sense and pattern recognition</li>
          <li>Strengthen confidence with regular practice</li>
          <li>Prepare for standardized tests and math competitions</li>
          <li>Support homework and classroom learning</li>
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
