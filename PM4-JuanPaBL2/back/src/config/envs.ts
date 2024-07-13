import dotenv from "dotenv";

dotenv.config();

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

export const PORT: number = Number(process.env.PORT) || 3002;
export const DB_NAME: string | undefined = process.env.DB_NAME 
export const DB_USER: string | undefined = process.env.DB_USER 
export const DB_PASSWORD: string | undefined = process.env.DB_PASSWORD
export const DB_HOST: string | undefined = process.env.DB_HOST 
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET
