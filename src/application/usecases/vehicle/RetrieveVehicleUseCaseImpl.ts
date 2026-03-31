import { Vehicle } from '../../../domain/models/Vehicle';
import { RetrieveVehicleUseCase } from '../../../domain/ports/in/vehicle/RetrieveVehicleUseCase';
import { VehicleRepositoryPort } from '../../../domain/ports/out/VehicleRepositoryPort';

export class RetrieveVehicleUseCaseImpl implements RetrieveVehicleUseCase {
  constructor(private readonly vehicleRepositoryPort: VehicleRepositoryPort) {}

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepositoryPort.findAll();
  }

  async findById(id: string): Promise<Vehicle | null> {
    return this.vehicleRepositoryPort.findById(id);
  }
}
