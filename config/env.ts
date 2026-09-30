import dotenv from 'dotenv';

dotenv.config()

export const env = {
    baseURL: process.env.AMAZON_BASE_URL!,
    username: process.env.AMAZON_USERNAME!,
    password: process.env.AMAZON_PASSWORD!,
};

