const getUserCountry = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching IP data:", error);
    return null;
  }
};

export default getUserCountry;