export default function getLocations(city: string) {
  const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL_V1}/locations?name=${city}&locale=en-gb`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    },
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => {
      return error
    });
}
