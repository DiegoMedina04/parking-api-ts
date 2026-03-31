import { Client } from '../../../domain/models/Client';

export interface RetrieveClientUseCase {
    findAll(): Promise<Client[]>;
    findById(id: string): Promise<Client | null>;
}
