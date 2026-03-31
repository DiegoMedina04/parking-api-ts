import { Vehicle } from '../../../domain/models/Vehicle';
import { CreateVehicleUseCase } from '../../../domain/ports/in/vehicle/CreateVehicleUseCase';
import { VehicleRepositoryPort } from '../../../domain/ports/out/VehicleRepositoryPort';

export class CreateVehicleUseCaseImpl implements CreateVehicleUseCase {
  constructor(private readonly vehicleRepositoryPort: VehicleRepositoryPort) {}

  async save(vehicle: Vehicle): Promise<Vehicle> {
    if (!vehicle.registrationDate) {
        vehicle.registrationDate = new Date();
    }
    return this.vehicleRepositoryPort.save(vehicle);
  }
}
