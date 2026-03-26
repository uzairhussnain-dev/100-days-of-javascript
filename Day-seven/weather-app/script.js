const apiKey = "5187c05b9f02128ab4bf976e15962e04";

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value;

  if (!city) return;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await res.json();

    if (data.cod !== 200) {
      document.getElementById("weatherResult").textContent = "City not found";
      return;
    }

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>🌥️ ${data.weather[0].description}</p>
    `;
  } catch (err) {
    console.log(err);
  }
});