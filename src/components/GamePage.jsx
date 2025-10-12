import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
  Snackbar,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

export default function GamePage() {
  const [settings, setSettings] = useState({
    ADD: { min: 1, max: 10, enabled: true },
    SUB: { min: 1, max: 10, enabled: true },
    MULT: { min: 1, max: 10, enabled: true },
    DIV: { min: 1, max: 10, enabled: true },
  });

  const [gameStarted, setGameStarted] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [problemsSolved, setProblemsSolved] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const dailyGoal = 20;

  // Load saved data on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('brainGymSettings');
    const savedProgress = localStorage.getItem('brainGymProgress');
    const savedDate = localStorage.getItem('brainGymDate');
    const today = new Date().toDateString();

    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.warn('Failed to load settings from localStorage');
      }
    }

    if (savedDate === today && savedProgress) {
      try {
        const progress = parseInt(savedProgress, 10);
        setProblemsSolved(progress);
      } catch (e) {
        console.warn('Failed to load progress from localStorage');
      }
    } else {
      // Reset progress for new day
      setProblemsSolved(0);
      localStorage.setItem('brainGymProgress', '0');
      localStorage.setItem('brainGymDate', today);
    }
  }, []);

  // Save settings when changed
  useEffect(() => {
    localStorage.setItem('brainGymSettings', JSON.stringify(settings));
  }, [settings]);

  // Save progress when changed
  useEffect(() => {
    localStorage.setItem('brainGymProgress', problemsSolved.toString());
    localStorage.setItem('brainGymDate', new Date().toDateString());
  }, [problemsSolved]);

  const generateProblem = () => {
    const operations = Object.keys(settings).filter(op => settings[op].enabled);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const { min, max } = settings[operation];

    // Ensure min and max are valid
    const minVal = Math.min(Math.abs(min), Math.abs(max));
    const maxVal = Math.max(Math.abs(min), Math.abs(max));

    // Adjust ranges to avoid trivial problems
    const adjustedMin = Math.max(minVal, 2); // Minimum 2 for all operations
    const adjustedMax = Math.max(maxVal, adjustedMin + 1); // Ensure range for meaningful problems

    let num1, num2, answer;
    let attempts = 0;
    const maxAttempts = 50; // Prevent infinite loops

    do {
      num1 = Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;
      num2 = Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;

      switch (operation) {
        case 'ADD':
          answer = num1 + num2;
          // Avoid trivial addition: ensure both numbers >= 2 and sum > 4
          if (num1 >= 2 && num2 >= 2 && answer > 4) {
            return { num1, num2, operation: '+', answer, type: 'ADD' };
          }
          break;

        case 'SUB':
          // Ensure num1 >= num2 for positive results
          if (num1 < num2) [num1, num2] = [num2, num1];
          answer = num1 - num2;
          // Avoid trivial subtraction: ensure difference >= 2 and both numbers >= 3
          if (num1 >= 3 && num2 >= 2 && answer >= 2) {
            return { num1, num2, operation: '-', answer, type: 'SUB' };
          }
          break;

        case 'MULT':
          answer = num1 * num2;
          // Avoid trivial multiplication: ensure neither number is 0 or 1, and product > 4
          if (num1 >= 2 && num2 >= 2 && answer > 4 && answer <= 100) {
            return { num1, num2, operation: '×', answer, type: 'MULT' };
          }
          break;

        case 'DIV':
          // Ensure clean division with meaningful results
          if (num2 <= 1) num2 = 2; // Avoid division by 0 or 1
          answer = Math.floor(num1 / num2);
          const originalNum1 = num1;
          num1 = answer * num2; // Ensure clean division

          // Avoid trivial division: ensure quotient >= 2 and both numbers are meaningful
          if (answer >= 2 && num2 >= 2 && originalNum1 >= 4) {
            return { num1, num2, operation: '÷', answer, type: 'DIV' };
          }
          break;
      }

      attempts++;
    } while (attempts < maxAttempts);

    // Fallback to ensure we always return a problem
    switch (operation) {
      case 'ADD':
        num1 = Math.max(adjustedMin, 2);
        num2 = Math.max(adjustedMin, 2);
        answer = num1 + num2;
        return { num1, num2, operation: '+', answer, type: 'ADD' };
      case 'SUB':
        num1 = Math.max(adjustedMin, 4);
        num2 = Math.max(adjustedMin, 2);
        if (num1 < num2) [num1, num2] = [num2, num1];
        answer = num1 - num2;
        return { num1, num2, operation: '-', answer, type: 'SUB' };
      case 'MULT':
        num1 = Math.max(adjustedMin, 2);
        num2 = Math.max(adjustedMin, 2);
        answer = num1 * num2;
        return { num1, num2, operation: '×', answer, type: 'MULT' };
      case 'DIV':
        num2 = Math.max(adjustedMin, 2);
        answer = Math.max(2, Math.floor(adjustedMin / num2));
        num1 = answer * num2;
        return { num1, num2, operation: '÷', answer, type: 'DIV' };
      default:
        return null;
    }
  };

  const handleStartPractice = () => {
    const enabledOps = Object.keys(settings).filter(op => settings[op].enabled);
    if (enabledOps.length === 0) {
      alert('Please select at least one operation to practice!');
      return;
    }
    setGameStarted(true);
    setCurrentProblem(generateProblem());
    setProblemsSolved(0);
    setUserAnswer('');
  };

  const handleSettingChange = (operation, field, value) => {
    setSettings(prev => ({
      ...prev,
      [operation]: {
        ...prev[operation],
        [field]: field === 'enabled' ? value : (parseInt(value) || 0),
      },
    }));
  };

  const handleSubmitAnswer = () => {
    const answer = parseInt(userAnswer);
    
    if (answer === currentProblem.answer) {
      setIsCorrect(true);
      setShowFeedback(true);
      setProblemsSolved(prev => prev + 1);
      
      setTimeout(() => {
        setShowFeedback(false);
        if (problemsSolved + 1 >= dailyGoal) {
          setGameStarted(false);
          setCurrentProblem(null);
        } else {
          setCurrentProblem(generateProblem());
        }
        setUserAnswer('');
      }, 1500);
    } else {
      setIsCorrect(false);
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitAnswer();
    }
  };

  const progressPercentage = (problemsSolved / dailyGoal) * 100;

  if (gameStarted) {
    return (
      <Container maxWidth="lg" className="game-container">
        {/* Single Combined Card */}
        <Card elevation={3} className="game-card">
          <CardContent className="game-card-content">
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
              {/* Math Problem */}
              <Typography
                variant="h1"
                className="game-math-problem"
                aria-live="polite"
                aria-describedby="problem-description"
                sx={{ mb: 3 }}
              >
                {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
              </Typography>
              <Box id="problem-description" className="sr-only">
                Math problem: {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} equals what?
              </Box>

              {/* Answer Input */}
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
              <Box className="game-button-group" sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                <Button
                  onClick={handleSubmitAnswer}
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
                  onClick={() => {
                    setGameStarted(false);
                    setCurrentProblem(null);
                    setUserAnswer('');
                    setProblemsSolved(0);
                    setShowFeedback(false);
                    setIsCorrect(false);
                  }}
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

                <Box
                  className="game-progress-circle"
                  sx={{ mb: 2 }}
                >
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

            {/* Feedback Snackbar - Positioned at bottom to avoid covering elements */}
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

  return (
    <Container maxWidth="lg" className="game-container">
      <Typography variant="h3" className="setup-title">
        Math Practice Game
      </Typography>

      <Grid container spacing={{ xs: 1.5, sm: 3 }} className="setup-grid">
        {Object.keys(settings).map((operation) => (
          <Grid item xs={3} sm={3} md={3} key={operation}>
            <Card elevation={2} className="setup-card">
              <CardContent className="setup-card-content">
                <Box className="setup-operation-header">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={settings[operation].enabled}
                        onChange={(e) => handleSettingChange(operation, 'enabled', e.target.checked)}
                        sx={{
                          color: '#3b82f6',
                          '&.Mui-checked': { color: '#3b82f6' },
                          transform: { xs: 'scale(0.8)', md: 'scale(1)' },
                          py: { xs: 0.5, md: 1 },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: '#3b82f6',
                          fontSize: { xs: '0.9rem', md: '1.25rem' }
                        }}
                      >
                        {operation === 'ADD' ? '+' : operation === 'SUB' ? '-' : operation === 'MULT' ? '×' : '÷'}
                      </Typography>
                    }
                  />
                </Box>

                <Box className="setup-input-group">
                  <TextField
                    label="Min"
                    type="number"
                    size="small"
                    value={settings[operation].min}
                    onChange={(e) => {
                      const value = Math.min(parseInt(e.target.value) || 0, 9999);
                      handleSettingChange(operation, 'min', Math.max(0, value));
                    }}
                    disabled={!settings[operation].enabled}
                    className="setup-input-field"
                    inputProps={{
                      min: 0,
                      max: 9999,
                      style: { maxWidth: '80px' }
                    }}
                    sx={{ maxWidth: '100px' }}
                  />
                  <TextField
                    label="Max"
                    type="number"
                    size="small"
                    value={settings[operation].max}
                    onChange={(e) => {
                      const value = Math.min(parseInt(e.target.value) || 0, 9999);
                      handleSettingChange(operation, 'max', Math.max(0, value));
                    }}
                    disabled={!settings[operation].enabled}
                    className="setup-input-field"
                    inputProps={{
                      min: 0,
                      max: 9999,
                      style: { maxWidth: '80px' }
                    }}
                    sx={{ maxWidth: '100px' }}
                  />
                </Box>

                <Typography variant="caption" className="setup-range-text">
                  Range: [{settings[operation].min} - {settings[operation].max}]
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: { xs: 2, md: 6 } }}>
        <Card elevation={3} className="setup-daily-goal-card">
          <Box className="setup-goal-progress">
            <CircularProgress
              variant="determinate"
              value={progressPercentage}
              size={{ xs: 80, md: 120 }}
              thickness={5}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#1e293b',
                  fontSize: { xs: '1rem', md: '1.875rem' }
                }}
              >
                {problemsSolved}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '0.7rem', md: '1rem' }
                }}
              >
                / {dailyGoal}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6" className="setup-goal-title">
            Daily Goal
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={handleStartPractice}
            className="setup-start-button"
          >
            Start Daily Practice
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
