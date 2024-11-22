const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt
        const hashedPassword = await bcrypt.hash(plainPassword, salt); // Hash the password
        console.log("Hashed Password:", hashedPassword); // Output the hashed password
    } catch (error) {
        console.error("Error hashing password:", error);
    }
}

// Replace 'yourPlainPassword' with the password you want to hash
hashPassword("yourPlainPassword");
