interface Params {
  dest_id: string;
  filter_by_currency: string;
  room_number: string;
  adults_number: string;
  checkin_date: string;
  checkout_date: string;
  [key: string]: string;
}
const validate = (arg: Params) => {
  let error = "";
  for (const i in arg) {
    if (arg[i].trim().length < 1) {
      error = "Fill out the fields.";
      return error;
    } else if (arg[i] === "Select") {
      error = "Select currency.";
      return error;
    }
  }
  if (Number(arg.adults_number) < 1 || Number(arg.room_number) < 1) {
    error = "Invalid room or adult numbers.";
    return error;
  }
  const today = new Date().setHours(0, 0, 0, 0);
  const start = new Date(arg.checkin_date).getTime();
  const end = new Date(arg.checkout_date).getTime();
  if (start < today) {
    error = "Invalid check in date.";
    return error;
  }
  if (start > end || start === end) {
    error = "Invalid check out date.";
    return error;
  }
  return true;
};
export default validate;
