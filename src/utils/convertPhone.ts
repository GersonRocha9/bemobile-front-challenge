export function formatPhoneNumber(phoneNumber: string): string {
  const countryCode = phoneNumber.slice(0, 2)
  const areaCode = phoneNumber.slice(2, 4)
  const firstPart = phoneNumber.slice(4, 9)
  const secondPart = phoneNumber.slice(9)
  return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`
}
