export default function getLocations(city: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/locations?name=${city}&locale=en-gb`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
    },
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });
}
