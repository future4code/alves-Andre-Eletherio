import * as jwt from "jsonwebtoken"

const expiresIn: string = "1h"

export function generateToken(id: string) {
    const token = jwt.sign(
        {id},
        process.env.JWT_KEY  as string,
        {expiresIn: expiresIn}
    )
    return token;
}