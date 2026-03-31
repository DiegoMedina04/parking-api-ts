import { VehicleType } from '../../../domain/models/VehicleType';

export interface RetrieveVehicleTypeUseCase {
    findAll(): Promise<VehicleType[]>;
    findById(id: string): Promise<VehicleType | null>;
}
