import { Client } from '../../models/Client';

export interface ClientRepositoryPort {
    findAll(): Promise<Client[]>;
    findById(id: string): Promise<Client | null>;
    save(client: Client): Promise<Client>;
    update(client: Client): Promise<Client>;
    delete(id: string): Promise<void>;
}
