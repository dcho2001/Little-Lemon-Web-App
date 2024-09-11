import { isValidDate, isValidGuestCount } from './ValidationFunctions';

describe('Validation Functions', () => {
  describe('isValidDate', () => {
    it('should return true for dates in the future', () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isValidDate(futureDate.toISOString().substring(0, 10))).toBe(true);
    });

    it('should return false for dates in the past', () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isValidDate(pastDate.toISOString().substring(0, 10))).toBe(false);
    });
  });

  describe('isValidGuestCount', () => {
    it('should return true for valid guest counts', () => {
      expect(isValidGuestCount(5)).toBe(true);
    });

    it('should return false for zero or negative guests', () => {
      expect(isValidGuestCount(0)).toBe(false);
      expect(isValidGuestCount(-1)).toBe(false);
    });

    it('should return false for guests exceeding the limit', () => {
      expect(isValidGuestCount(11)).toBe(false);
    });
  });
});
