import { Client } from '../../../domain/models/Client';
import { RetrieveClientUseCase } from '../../../domain/ports/in/client/RetrieveClientUseCase';
import { ClientRepositoryPort } from '../../../domain/ports/out/ClientRepositoryPort';

export class RetrieveClientUseCaseImpl implements RetrieveClientUseCase {
  constructor(private readonly clientRepositoryPort: ClientRepositoryPort) {}

  async findAll(): Promise<Client[]> {
    return this.clientRepositoryPort.findAll();
  }

  async findById(id: string): Promise<Client | null> {
    return this.clientRepositoryPort.findById(id);
  }
}
