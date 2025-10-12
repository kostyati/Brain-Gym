import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

/**
 * GamePlay Component
 * Handles the active math problem gameplay interface
 * Displays problems, collects answers, and shows feedback
 */
export default function GamePlay({
  currentProblem,
  userAnswer,
  setUserAnswer,
  onSubmitAnswer,
  onReset,
  problemsSolved,
  dailyGoal,
  showFeedback,
  isCorrect
}) {
  /**
   * Handle keyboard input for answer submission
   * @param {KeyboardEvent} e - The keyboard event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmitAnswer();
    }
  };

  // Calculate progress percentage for visual feedback
  const progressPercentage = (problemsSolved / dailyGoal) * 100;

  return (
    <Container maxWidth="lg" className="game-container">
      <Card elevation={3} className="game-card">
        <CardContent className="game-card-content">
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center'
          }}>
            {/* Math Problem Display */}
            <Typography
              variant="h1"
              className="game-math-problem"
              aria-live="polite"
              aria-describedby="problem-description"
              sx={{ mb: 3 }}
            >
              {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
            </Typography>

            {/* Screen Reader Description */}
            <Box id="problem-description" className="sr-only">
              Math problem: {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} equals what?
            </Box>

            {/* Answer Input Section */}
            <Box className="game-input-section" sx={{ mb: 3 }}>
              <TextField
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Your answer"
                autoFocus
                key={`input-${problemsSolved}`}
                className="game-input-field"
                inputProps={{
                  'aria-label': 'Enter your answer',
                  'aria-describedby': 'input-help'
                }}
              />
              <Box id="input-help" className="sr-only">
                Input field for math problem answer. Press Enter or tap Submit button to check your answer.
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box className="game-button-group" sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              mb: 4
            }}>
              <Button
                onClick={onSubmitAnswer}
                variant="contained"
                size="large"
                className="game-submit-button"
                aria-label="Submit answer"
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={onReset}
                className="game-restart-button"
              >
                Reset
              </Button>
            </Box>

            {/* Progress Section */}
            <Box className="game-progress-section">
              <Typography variant="h6" className="game-progress-title" sx={{ mb: 2 }}>
                Daily Progress
              </Typography>

              <Box className="game-progress-circle" sx={{ mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={progressPercentage}
                  size={{ xs: 100, md: 140 }}
                  thickness={6}
                />
                <Box className="game-progress-text">
                  <Typography variant="h3" className="game-progress-number">
                    {problemsSolved}
                  </Typography>
                  <Typography variant="body2" className="game-progress-label">
                    / {dailyGoal}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" className="game-progress-status">
                {problemsSolved >= dailyGoal && '🎉 Goal completed!'}
              </Typography>
            </Box>
          </Box>

          {/* Feedback Snackbar */}
          <Snackbar
            open={showFeedback}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              severity={isCorrect ? 'success' : 'error'}
              icon={isCorrect ? <CheckCircle /> : <Cancel />}
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                minWidth: { xs: '280px', md: 'auto' }
              }}
            >
              {isCorrect ? '🎉 Correct! Great job!' : '❌ Not quite. Try again!'}
            </Alert>
          </Snackbar>
        </CardContent>
      </Card>
    </Container>
  );
}
