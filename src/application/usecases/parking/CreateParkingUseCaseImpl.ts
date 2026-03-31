import { Parking } from '../../../domain/models/Parking';
import { CreateParkingUseCase } from '../../../domain/ports/in/parking/CreateParkingUseCase';
import { ParkingRepositoryPort } from '../../../domain/ports/out/ParkingRepositoryPort';

export class CreateParkingUseCaseImpl implements CreateParkingUseCase {
  constructor(private readonly parkingRepositoryPort: ParkingRepositoryPort) {}

  async save(parking: Parking): Promise<Parking> {
    return this.parkingRepositoryPort.save(parking);
  }
}
