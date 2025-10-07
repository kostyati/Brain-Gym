import { useState } from 'react';
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

  const generateProblem = () => {
    const operations = Object.keys(settings).filter(op => settings[op].enabled);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const { min, max } = settings[operation];

    // Ensure min and max are valid
    const minVal = Math.min(Math.abs(min), Math.abs(max));
    const maxVal = Math.max(Math.abs(min), Math.abs(max));

    let num1 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    let num2 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    let answer;

    switch (operation) {
      case 'ADD':
        answer = num1 + num2;
        return { num1, num2, operation: '+', answer, type: 'ADD' };
      case 'SUB':
        // Ensure num1 >= num2 for positive results
        if (num1 < num2) [num1, num2] = [num2, num1];
        answer = num1 - num2;
        return { num1, num2, operation: '-', answer, type: 'SUB' };
      case 'MULT':
        answer = num1 * num2;
        return { num1, num2, operation: '×', answer, type: 'MULT' };
      case 'DIV':
        // Ensure clean division: answer is num1/num2, so we multiply answer by num2 to get num1
        // Avoid division by zero
        if (num2 === 0) num2 = 1;
        answer = num1;
        num1 = num1 * num2;
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
      <Container maxWidth="lg" sx={{ py: 6, minHeight: 'calc(100vh - 200px)', animation: 'fadeIn 0.5s ease-in-out' }}>
        <Grid container spacing={4}>
          {/* Problem Area */}
          <Grid item xs={12} md={8}>
            <Card
              elevation={3}
              sx={{
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
                borderRadius: '20px',
                border: '2px solid #e0e7ff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', width: '100%', p: 6 }}>
                <Typography variant="h3" sx={{ mb: 6, color: '#1e293b', fontWeight: 600 }}>
                  Problem #{problemsSolved + 1}
                </Typography>
                
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 4,
                    animation: 'scaleIn 0.5s ease-out',
                  }}
                >
                  {currentProblem.num1} {currentProblem.operation} {currentProblem.num2} = ?
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <TextField
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Your answer"
                    autoFocus
                    key={`input-${problemsSolved}`}
                    sx={{
                      width: '300px',
                      '& .MuiOutlinedInput-root': {
                        fontSize: '2rem',
                        borderRadius: '12px',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease',
                        '& input': {
                          textAlign: 'center',
                          fontWeight: 600,
                        },
                        '&:hover': {
                          borderColor: '#3b82f6',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
                        },
                        '&.Mui-focused': {
                          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                        },
                      },
                    }}
                  />
                  <Button
                    onClick={handleSubmitAnswer}
                    variant="contained"
                    size="large"
                    sx={{
                      display: 'block',
                      mx: 'auto',
                      mt: 3,
                      px: 6,
                      py: 2,
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)',
                      },
                      '&:active': {
                        transform: 'translateY(0)',
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>

                <Snackbar
                  open={showFeedback}
                  anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Alert
                    severity={isCorrect ? 'success' : 'error'}
                    icon={isCorrect ? <CheckCircle /> : <Cancel />}
                    sx={{ fontSize: '1.2rem' }}
                  >
                    {isCorrect ? '🎉 Correct! Great job!' : '❌ Not quite. Try again!'}
                  </Alert>
                </Snackbar>
              </CardContent>
            </Card>
          </Grid>

          {/* Progress Bar */}
          <Grid item xs={12} md={4}>
            <Card 
              elevation={3} 
              sx={{ 
                position: 'sticky', 
                top: 20,
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)',
                border: '2px solid #fde68a',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)',
                },
              }}
            >
              <CardContent sx={{ textAlign: 'center', p: 4 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: '#1e293b' }}>
                  Daily Progress
                </Typography>
                
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
                  <CircularProgress
                    variant="determinate"
                    value={progressPercentage}
                    size={150}
                    thickness={5}
                    sx={{
                      color: progressPercentage === 100 ? '#22c55e' : '#3b82f6',
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                      transition: 'all 0.5s ease',
                    }}
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
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b' }}>
                      {problemsSolved}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b' }}>
                      / {dailyGoal}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ color: '#64748b', mb: 2 }}>
                  {problemsSolved === 0 && 'Let\'s get started!'}
                  {problemsSolved > 0 && problemsSolved < dailyGoal && 'Keep going!'}
                  {problemsSolved >= dailyGoal && '🎉 Goal completed!'}
                </Typography>

                {problemsSolved >= dailyGoal && (
                  <Button
                    variant="outlined"
                    onClick={() => setGameStarted(false)}
                    sx={{ mt: 2 }}
                  >
                    Back to Settings
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6, minHeight: 'calc(100vh - 200px)', animation: 'fadeIn 0.5s ease-in-out' }}>
      <Typography 
        variant="h3" 
        sx={{ 
          mb: 4, 
          fontWeight: 700, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Math Practice Game
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.keys(settings).map((operation) => (
          <Grid item xs={12} sm={6} md={3} key={operation}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 24px rgba(59, 130, 246, 0.2)',
                  borderColor: '#3b82f6',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={settings[operation].enabled}
                        onChange={(e) => handleSettingChange(operation, 'enabled', e.target.checked)}
                        sx={{
                          color: '#3b82f6',
                          '&.Mui-checked': { color: '#3b82f6' },
                        }}
                      />
                    }
                    label={
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, color: '#3b82f6' }}
                      >
                        {operation}
                      </Typography>
                    }
                  />
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <TextField
                    label="Min"
                    type="number"
                    size="small"
                    value={settings[operation].min}
                    onChange={(e) => handleSettingChange(operation, 'min', e.target.value)}
                    disabled={!settings[operation].enabled}
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    label="Max"
                    type="number"
                    size="small"
                    value={settings[operation].max}
                    onChange={(e) => handleSettingChange(operation, 'max', e.target.value)}
                    disabled={!settings[operation].enabled}
                    sx={{ flex: 1 }}
                  />
                </Box>
                
                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#64748b', textAlign: 'center' }}>
                  Range: [{settings[operation].min} - {settings[operation].max}]
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Card
          elevation={3}
          sx={{
            display: 'inline-block',
            p: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #dbeafe 100%)',
            borderRadius: '20px',
            border: '2px solid #bfdbfe',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Box sx={{ mb: 3, position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant="determinate"
              value={progressPercentage}
              size={120}
              thickness={5}
              sx={{ color: '#3b82f6' }}
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
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#1e293b' }}>
                {problemsSolved}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b' }}>
                / {dailyGoal}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6" sx={{ mb: 3, color: '#64748b' }}>
            Daily Goal
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={handleStartPractice}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              borderRadius: '12px',
              boxShadow: '0 8px 16px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': { 
                background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 24px rgba(59, 130, 246, 0.4)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            Start Daily Practice
          </Button>
        </Card>
      </Box>
    </Container>
  );
}
