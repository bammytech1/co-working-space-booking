
import './App.css'
import Desk from './components/Desk';

const App = () => {
  return (
    <div className="app">
      <h1>Co-working Space Booking System</h1>
      <Desk />
      <div id="booking-info">
        <p>Total Charge: <span id="total-charge">$0.00</span></p>
      </div>
    </div>
  );
};

export default App
