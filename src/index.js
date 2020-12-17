import './styles.css';
import './timer.js';
import CountdownTimer from './timer.js';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 15, 2021'),
});
