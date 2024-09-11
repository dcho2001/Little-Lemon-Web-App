export const isValidDate = (date) => {
    const today = new Date();
    const inputDate = new Date(date);
    return inputDate >= today;
  };

  export const isValidGuestCount = (count) => {
    const maxGuests = 10; // Example maximum
    return count > 0 && count <= maxGuests;
  };
