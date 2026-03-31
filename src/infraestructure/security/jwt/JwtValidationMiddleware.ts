import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken'; // Assuming jsonwebtoken will be available
import { TokenJwtConfig } from '../../config/TokenJwtConfig';

// Mocking JWT verification if library not present, or use standard jwt.verify
const jwtVerify = (token: string, secret: string): any => {
  // This is a placeholder for jwt.verify(token, secret)
  // In a real scenario, we'd use 'jsonwebtoken'
  return { subject: 'user@example.com' }; 
};

export const jwtValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.header(TokenJwtConfig.HEADER_AUTHORIZATION);

  if (!header || !header.startsWith(TokenJwtConfig.PREFIX_TOKEN)) {
    return next();
  }

  const token = header.replace(TokenJwtConfig.PREFIX_TOKEN, '');

  try {
    // const payload = jwt.verify(token, TokenJwtConfig.SECRET_KEY);
    const payload = jwtVerify(token, TokenJwtConfig.SECRET_KEY);
    (req as any).user = payload;
    next();
  } catch (error) {
    res.status(403).json({
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'el token no es valido!',
    });
  }
};
