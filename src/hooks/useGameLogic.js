import { useState, useEffect } from 'react';

/**
 * Custom hook for managing math game logic
 * Handles problem generation, answer validation, progress tracking, and localStorage persistence
 */
export function useGameLogic() {
  // Game settings state - configuration for each math operation
  const [settings, setSettings] = useState({
    ADD: { min: 1, max: 10, enabled: true },
    SUB: { min: 1, max: 10, enabled: true },
    MULT: { min: 1, max: 10, enabled: true },
    DIV: { min: 1, max: 10, enabled: true },
  });

  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [problemsSolved, setProblemsSolved] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showKeyboardHint, setShowKeyboardHint] = useState(false);
  const [firstAnswerSubmitted, setFirstAnswerSubmitted] = useState(false);

  // Game constants
  const dailyGoal = 20;

  /**
   * Load saved data from localStorage on component mount
   */
  useEffect(() => {
    const savedSettings = localStorage.getItem('brainGymSettings');
    const savedProgress = localStorage.getItem('brainGymProgress');
    const savedDate = localStorage.getItem('brainGymDate');
    const today = new Date().toDateString();

    // Load settings if available
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.warn('Failed to load settings from localStorage');
      }
    }

    // Load or reset daily progress
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

  /**
   * Save settings to localStorage when they change
   */
  useEffect(() => {
    localStorage.setItem('brainGymSettings', JSON.stringify(settings));
  }, [settings]);

  /**
   * Save progress to localStorage when it changes
   */
  useEffect(() => {
    localStorage.setItem('brainGymProgress', problemsSolved.toString());
    localStorage.setItem('brainGymDate', new Date().toDateString());
  }, [problemsSolved]);

  /**
   * Generate a random math problem based on current settings
   * @returns {Object|null} Problem object with num1, num2, operation, answer, and type
   */
  const generateProblem = () => {
    const operations = Object.keys(settings).filter(op => settings[op].enabled);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const { min, max } = settings[operation];

    // Ensure valid range
    const minVal = Math.min(Math.abs(min), Math.abs(max));
    const maxVal = Math.max(Math.abs(min), Math.abs(max));
    const adjustedMin = Math.max(minVal, 2);
    const adjustedMax = Math.max(maxVal, adjustedMin + 1);

    let num1, num2, answer;
    let attempts = 0;
    const maxAttempts = 50;

    // Try to generate a meaningful problem
    do {
      num1 = Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;
      num2 = Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;

      switch (operation) {
        case 'ADD':
          answer = num1 + num2;
          if (num1 >= 2 && num2 >= 2 && answer > 4) {
            return { num1, num2, operation: '+', answer, type: 'ADD' };
          }
          break;

        case 'SUB':
          if (num1 < num2) [num1, num2] = [num2, num1];
          answer = num1 - num2;
          if (num1 >= 3 && num2 >= 2 && answer >= 2) {
            return { num1, num2, operation: '-', answer, type: 'SUB' };
          }
          break;

        case 'MULT':
          answer = num1 * num2;
          if (num1 >= 2 && num2 >= 2 && answer > 4 && answer <= 100) {
            return { num1, num2, operation: '×', answer, type: 'MULT' };
          }
          break;

        case 'DIV':
          if (num2 <= 1) num2 = 2;
          answer = Math.floor(num1 / num2);
          const originalNum1 = num1;
          num1 = answer * num2;
          if (answer >= 2 && num2 >= 2 && originalNum1 >= 4) {
            return { num1, num2, operation: '÷', answer, type: 'DIV' };
          }
          break;
      }

      attempts++;
    } while (attempts < maxAttempts);

    // Fallback problem generation
    return generateFallbackProblem(operation, adjustedMin, adjustedMax);
  };

  /**
   * Generate a fallback problem when normal generation fails
   * @param {string} operation - The math operation
   * @param {number} minVal - Minimum value for the range
   * @param {number} maxVal - Maximum value for the range
   * @returns {Object} Problem object
   */
  const generateFallbackProblem = (operation, minVal, maxVal) => {
    switch (operation) {
      case 'ADD':
        const num1 = Math.max(minVal, 2);
        const num2 = Math.max(minVal, 2);
        return { num1, num2, operation: '+', answer: num1 + num2, type: 'ADD' };
      case 'SUB':
        let n1 = Math.max(minVal, 4);
        let n2 = Math.max(minVal, 2);
        if (n1 < n2) [n1, n2] = [n2, n1];
        return { num1: n1, num2: n2, operation: '-', answer: n1 - n2, type: 'SUB' };
      case 'MULT':
        const m1 = Math.max(minVal, 2);
        const m2 = Math.max(minVal, 2);
        return { num1: m1, num2: m2, operation: '×', answer: m1 * m2, type: 'MULT' };
      case 'DIV':
        const divisor = Math.max(minVal, 2);
        const quotient = Math.max(2, Math.floor(minVal / divisor));
        const dividend = quotient * divisor;
        return { num1: dividend, num2: divisor, operation: '÷', answer: quotient, type: 'DIV' };
      default:
        return null;
    }
  };

  /**
   * Start a new practice session
   */
  const startPractice = () => {
    const enabledOps = Object.keys(settings).filter(op => settings[op].enabled);
    if (enabledOps.length === 0) {
      alert('Please select at least one operation to practice!');
      return;
    }
    setGameStarted(true);
    setCurrentProblem(generateProblem());
    setProblemsSolved(0);
    setUserAnswer('');
    setFirstAnswerSubmitted(false);
    // Show keyboard hint for first-time users
    setShowKeyboardHint(true);
  };

  /**
   * Submit and validate the user's answer
   */
  const submitAnswer = () => {
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
      // Clear the incorrect answer so user can immediately type a new one
      setUserAnswer('');
      setTimeout(() => setShowFeedback(false), 2000);
    }

    // Hide keyboard hint after first answer is submitted
    if (!firstAnswerSubmitted) {
      setFirstAnswerSubmitted(true);
      setShowKeyboardHint(false);
    }
  };

  /**
   * Reset the game to initial state
   */
  const resetGame = () => {
    setGameStarted(false);
    setCurrentProblem(null);
    setUserAnswer('');
    setProblemsSolved(0);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  return {
    // State
    settings,
    setSettings,
    gameStarted,
    currentProblem,
    userAnswer,
    setUserAnswer,
    problemsSolved,
    showFeedback,
    isCorrect,
    showKeyboardHint,
    firstAnswerSubmitted,

    // Constants
    dailyGoal,

    // Actions
    startPractice,
    submitAnswer,
    resetGame,
  };
}
