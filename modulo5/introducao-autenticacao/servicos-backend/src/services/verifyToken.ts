import * as jwt from 'jsonwebtoken';

export function verifyToken(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
        id: payload.id
    };
    return result;
};