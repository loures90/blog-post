import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config()

const algorithm = 'aes-256-ctr';
const secretKey = process.env.SECRET_KEY;
const iv = crypto.randomBytes(16);

export const encrypt = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    return  encrypted.toString('hex')
};

export const decrypt = (hash) => {
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash, 'hex')), decipher.final()]);
        return decrpyted.toString();
};
