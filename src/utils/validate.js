export const checkValidData = (email, phone) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  if (!isValidEmail) return "Email address is not correct";

  // Phone is optional - only validate if it has a value
  if (phone && phone.trim() !== "") {
    const isValidPhone = /^\d{10}$/.test(phone);
    if (!isValidPhone) return "Phone number is not correct";
  }

  return null;
};
