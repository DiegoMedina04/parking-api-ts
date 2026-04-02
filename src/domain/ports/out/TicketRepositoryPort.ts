import { Ticket } from '../../models/Ticket';

export interface TicketRepositoryPort {
    findAll(): Promise<Ticket[]>;
    findById(id: string): Promise<Ticket | null>;
    save(ticket: Ticket): Promise<Ticket>;
    update(ticket: Ticket): Promise<Ticket>;
    delete(id: string): Promise<void>;
    findActiveByVehicleId(vehicleId: string): Promise<Ticket | null>;
}
