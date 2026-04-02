import { CreateTicketUseCase } from '../../../domain/ports/in/ticket/CreateTicketUseCase';
import { Ticket } from '../../../domain/models/Ticket';
import { TicketRepositoryPort } from '../../../domain/ports/out/TicketRepositoryPort';

export class CreateTicketUseCaseImpl implements CreateTicketUseCase {
    constructor(private readonly ticketRepositoryPort: TicketRepositoryPort) {}

    async save(ticket: Ticket): Promise<Ticket> {
        return this.ticketRepositoryPort.save(ticket);
    }
}
