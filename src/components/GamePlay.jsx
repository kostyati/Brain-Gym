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
  isCorrect,
  showKeyboardHint,
  firstAnswerSubmitted
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
      {/* Keyboard Hint Message - Positioned to the right of problem */}
      {showKeyboardHint && (
        <Box
          className="keyboard-hint"
          sx={{
            position: 'absolute',
            top: { xs: '50%', md: '50%' },
            right: { xs: '20px', md: '40px' },
            transform: { xs: 'translateY(-50%)', md: 'translateY(-50%)' },
            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            color: 'white',
            padding: { xs: '16px 24px', md: '20px 32px' },
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            fontWeight: 600,
            zIndex: 1000,
            maxWidth: { xs: '280px', md: '320px' },
            textAlign: 'center',
            animation: 'fadeIn 0.5s ease-in-out, pulse 2s ease-in-out 0.5s infinite',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: { xs: '-8px', md: '-10px' },
              transform: 'translateY(-50%)',
              borderRight: '10px solid #3b82f6',
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
            }
          }}
        >
          ⌨️ Type your answer & press Enter!
        </Box>
      )}

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
            {/* Math Problem Display with Feedback Icons */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
              flexWrap: 'wrap'
            }}>
              {/* Feedback Icon */}
              {showFeedback && (
                <Box
                  component={isCorrect ? CheckCircle : Cancel}
                  className={`game-feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`}
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                  }}
                />
              )}

              {/* Math Problem */}
              <Typography
                variant="h1"
                className="game-math-problem"
                aria-live="polite"
                aria-describedby="problem-description"
                sx={{
                  transition: 'all 0.3s ease',
                  transform: showFeedback ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
              </Typography>
            </Box>

            {/* Screen Reader Description */}
            <Box id="problem-description" className="sr-only">
              Math problem: {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} equals what?
              {showFeedback && (isCorrect ? ' Correct answer!' : ' Incorrect answer, try again.')}
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
        </CardContent>
      </Card>
    </Container>
  );
}
