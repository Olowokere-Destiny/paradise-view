export default function getMoreHotels(body: string) {
  const url = `${process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL_V2}/search${body}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY as string,
    },
  };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
