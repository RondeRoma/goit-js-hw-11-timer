import './styles.css';
import './timer.js';
import CountdownTimer from './timer.js';
// Попытка 2 встроть аудио
// import './sound.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 01, 2021'),
});

// Попытка 3 встроить аудио
// function func1() { 
//   document.all.sound.src = "./music.mp3"
//   } 
//   window.onload=func1; 
