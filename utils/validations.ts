export function IsValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export function IsValidName(name: string): boolean {
  if (name.trim() !== '' && name.length >= 3) {
    return true;
  }

  return false;
}
