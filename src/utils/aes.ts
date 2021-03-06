import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const algorithm = "aes-256-cbc";
const key = Buffer.from(process.env.AES_KEY as string, "hex");
const iv = Buffer.from(process.env.AES_IV as string, "hex");

/**
 * Generate a random Key
 * @returns {string}
 */
export const generateKey = () => {
    return crypto.randomBytes(32).toString("hex");
}

/**
 * Generate a random IV
 * @returns {string}
 */
export const generateIV = () => {
    return crypto.randomBytes(16).toString("hex");
}

/**
 * AES encrypt
 * @param text {string}
 * @returns {string}
 */
export const aesEncrypter = (text: string) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
};

/**
 * AES decrypt
 * @param text {string}
 * @returns {string}
 */
export const aesDecrypter = (text: string) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(text, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}