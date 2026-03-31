import { Vehicle } from '../../../domain/models/Vehicle';

export interface RetrieveVehicleUseCase {
    findAll(): Promise<Vehicle[]>;
    findById(id: string): Promise<Vehicle | null>;
}
