import { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';

/**
 * GameSettings Component
 * Handles the configuration of math operations and difficulty levels
 * Provides UI for customizing addition, subtraction, multiplication, and division settings
 */
export default function GameSettings({ settings, onSettingsChange, onStartPractice, problemsSolved, dailyGoal }) {
  /**
   * Handle changes to operation settings (enabled state, min/max values)
   * @param {string} operation - The math operation (ADD, SUB, MULT, DIV)
   * @param {string} field - The field being changed ('enabled', 'min', or 'max')
   * @param {boolean|number} value - The new value
   */
  const handleSettingChange = (operation, field, value) => {
    onSettingsChange(prev => ({
      ...prev,
      [operation]: {
        ...prev[operation],
        [field]: field === 'enabled' ? value : (parseInt(value) || 0),
      },
    }));
  };

  /**
   * Validate that at least one operation is enabled before starting practice
   */
  const handleStartPractice = () => {
    const enabledOps = Object.keys(settings).filter(op => settings[op].enabled);
    if (enabledOps.length === 0) {
      alert('Please select at least one operation to practice!');
      return;
    }
    onStartPractice();
  };

  // Calculate progress percentage for the daily goal
  const progressPercentage = (problemsSolved / dailyGoal) * 100;

  return (
    <Container maxWidth="lg" className="game-container">
      {/* Page Title */}
      <Typography variant="h3" className="setup-title">
        Math Practice Game
      </Typography>

      {/* Operation Settings Grid */}
      <Grid container spacing={{ xs: 1.5, sm: 3 }} className="setup-grid">
        {Object.keys(settings).map((operation) => (
          <Grid item xs={3} sm={3} md={3} key={operation}>
            <Card elevation={2} className="setup-card">
              <CardContent className="setup-card-content">
                {/* Operation Toggle with Checkbox */}
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

                {/* Min/Max Value Inputs */}
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

                {/* Display Current Range */}
                <Typography variant="caption" className="setup-range-text">
                  Range: [{settings[operation].min} - {settings[operation].max}]
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Daily Goal Progress and Start Button */}
      <Box sx={{ textAlign: 'center', mt: { xs: 2, md: 6 } }}>
        <Card elevation={3} className="setup-daily-goal-card">
          {/* Progress Circle */}
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

          {/* Goal Title and Start Button */}
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
