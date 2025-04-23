function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
    let password = "";
    for (let i = 0; i < 12; i++) {
      const random = Math.floor(Math.random() * chars.length);
      password += chars[random];
    }
    document.getElementById("password").value = password;
  }