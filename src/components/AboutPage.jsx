import { Container, Typography, Box, Paper } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 6 }}>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: "#1e293b" }}>
          About Brain Gym Math
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "#475569" }}>
          Welcome to Brain Gym Math - your interactive platform for mastering mathematics through 
          daily practice and personalized learning experiences.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600, color: "#3b82f6" }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: "#475569" }}>
          We believe that consistent practice is the key to mathematical proficiency. Our platform 
          helps students build confidence and skills through engaging, customizable practice sessions.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 600, color: "#3b82f6" }}>
          Features
        </Typography>
        <Box component="ul" sx={{ color: "#475569", lineHeight: 2 }}>
          <li>Customizable difficulty levels for each operation</li>
          <li>Daily practice goals to build consistency</li>
          <li>Instant feedback on answers</li>
          <li>Progress tracking</li>
          <li>Free to use for everyone</li>
        </Box>

        <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.8, color: "#475569" }}>
          Start your math journey today and watch your skills grow!
        </Typography>
      </Paper>
    </Container>
  );
}