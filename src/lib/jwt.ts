import jwt, { JwtPayload } from 'jsonwebtoken'

interface SignOption {
  expiresIn?: string | number
}

const defaultSignOption: SignOption = {
  expiresIn: '1h',
}

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = defaultSignOption
) {
  const secretKey = process.env.JWT_ACCESS_TOKEN_SECRET
  return jwt.sign(payload, secretKey as string, options)
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.JWT_ACCESS_TOKEN_SECRET
    const decoded = jwt.verify(token, secretKey as string)
    return decoded as JwtPayload
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return null
  }
}
