import { Request, Response } from 'express';

export class AuthController {
  constructor() {}

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    // Basic implementation for now, mirroring the Java logic
    // which was also returning "login success"
    res.status(200).send('login success');
  }
}
