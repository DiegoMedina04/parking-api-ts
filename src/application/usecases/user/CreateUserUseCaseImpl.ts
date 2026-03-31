import { User } from '../../../domain/models/User';
import { CreateUserUseCase } from '../../../domain/ports/in/user/CreateUserUseCase';
import { UserRepositoryPort } from '../../../domain/ports/out/UserRepositoryPort';

// Note: In a real implementation, we would inject a PasswordEncoder.
// For now, we'll assume the repository or a utility handles it, or mock it.
export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(private readonly userRepositoryPort: UserRepositoryPort) {}

  async save(user: User): Promise<User> {
    // Mimicking Java's password encoding if needed
    // user.password = await bcrypt.hash(user.password, 10);
    return this.userRepositoryPort.save(user);
  }
}
