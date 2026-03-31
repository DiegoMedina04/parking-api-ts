import { VehicleType } from '../../../domain/models/VehicleType';
import { RetrieveVehicleTypeUseCase } from '../../../domain/ports/in/vehicleType/RetrieveVehicleTypeUseCase';
import { VehicleTypeRepositoryPort } from '../../../domain/ports/out/VehicleTypeRepositoryPort';

export class RetrieveVehicleTypeUseCaseImpl implements RetrieveVehicleTypeUseCase {
  constructor(private readonly vehicleTypeRepositoryPort: VehicleTypeRepositoryPort) {}

  async findAll(): Promise<VehicleType[]> {
    return this.vehicleTypeRepositoryPort.findAll();
  }

  async findById(id: string): Promise<VehicleType | null> {
    return this.vehicleTypeRepositoryPort.findById(id);
  }
}
