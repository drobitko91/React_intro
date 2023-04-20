
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
            <h1 className='header'>CSS Weather Forecast <i className="wi wi-sunrise"></i></h1>
            <section>
                <ul className="list-weather">
                    <li className="list-item lisbon">
                        <span>Lisbon</span>
                        21°C
                        <i className="wi wi-day-sunny"></i>
                    </li>
                    <li className="list-item paris">
                        <span>Paris</span>
                        11°C
                        <i className="wi wi-day-sleet"></i>
                    </li>
                    <li className="list-item bel">
                        <span>Belgrade</span>
                        15°C
                        <i className="wi wi-day-cloudy"></i>
                    </li>
                    <li className="list-item venice">
                        <span>Venice</span>
                        21°C
                        <i className="wi wi-day-cloudy-high"></i>
                    </li>
                    <li className="list-item tel">
                        <span>Tel-Avive</span>
                        32°C
                        <i className="wi wi-hot"></i>
                    </li>
                    <li className="list-item cair">
                        <span>Cair</span>
                        21°C
                        <i className="wi wi-day-sunny"></i>
                    </li>
                    <li className="list-item new-york">
                        <span>New-York</span>
                        17°C
                        <i className="wi wi-day-sleet-storm"></i>
                    </li>
                    <li className="list-item new-d">
                        <span>New-Delhi</span>
                        17°C
                        <i className="wi wi-day-rain-wind"></i>
                    </li>
                    <li className="list-item san-f">
                        <span>San-Francisco</span>
                        15°C
                        <i className="wi wi-day-sunny-overcast"></i>
                    </li>
                    <li className="list-item tokyo">
                        <span>Tokyo</span>
                        8°C
                        <i className="wi wi-night-clear"></i>
                    </li>
                    <li className="list-item sydney">
                        <span>Sydney</span>
                        25°C
                        <i className="wi wi-night-partly-cloudy"></i>
                    </li>
                </ul>
                <p>Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
            </section>
        </div>
    </div>
  );
}

export default App;
