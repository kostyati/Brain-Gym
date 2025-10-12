import React from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import GameSettings from './GameSettings';
import GamePlay from './GamePlay';

/**
 * GamePage Component
 * Main game component that orchestrates between settings and gameplay
 * Uses custom hook for game logic and separate components for UI sections
 */
export default function GamePage() {
  // Use custom hook for all game logic and state management
  const gameLogic = useGameLogic();

  /**
   * Render settings screen when game hasn't started
   * Render gameplay screen when game is active
   */
  return gameLogic.gameStarted ? (
    <GamePlay
      currentProblem={gameLogic.currentProblem}
      userAnswer={gameLogic.userAnswer}
      setUserAnswer={gameLogic.setUserAnswer}
      onSubmitAnswer={gameLogic.submitAnswer}
      onReset={gameLogic.resetGame}
      problemsSolved={gameLogic.problemsSolved}
      dailyGoal={gameLogic.dailyGoal}
      showFeedback={gameLogic.showFeedback}
      isCorrect={gameLogic.isCorrect}
    />
  ) : (
    <GameSettings
      settings={gameLogic.settings}
      onSettingsChange={gameLogic.setSettings}
      onStartPractice={gameLogic.startPractice}
      problemsSolved={gameLogic.problemsSolved}
      dailyGoal={gameLogic.dailyGoal}
    />
  );
}
