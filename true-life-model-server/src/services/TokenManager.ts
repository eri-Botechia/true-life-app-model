import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export enum USER_ROLES{
    NORMAL="NORMAL",
    ADMIN = "ADMIN",
    BUYER="BUYER",
    EMPLOYER="EMPLOYER",
    OWNER="OWNER",
    STUDENT="STUDENT",
    INSTRUCTOR="INSTRUCTOR"
}



export interface TokenPayload {
    id: string,
    name: string,
    role: USER_ROLES
} // realocar para o arquivo da entidade User

export class TokenManager {
    public createToken = (payload: TokenPayload): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
        return token
    }

    public getPayload = (token: string): TokenPayload | null => {
        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            )

            return payload as TokenPayload
				} catch (error) {
            return null
        }
    }
}