export default function Weather( {city, temperature, humidity, weatherCondition} ) {
    return (
        <div className="weather">
            <h2>{city}</h2>
            <h4>Temperature: {temperature}°C</h4>
            <h4>Humidity: {humidity}%</h4>
            <h4>Weather Condition: {weatherCondition}</h4>
        </div>
    );
}
