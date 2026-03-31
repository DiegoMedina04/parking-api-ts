import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from './DatabaseConfig';

// Entities
import { UserEntity } from '../entities/UserEntity';
import { ParkingEntity } from '../entities/ParkingEntity';
import { PlanEntity } from '../entities/PlanEntity';
import { RoleEntity } from '../entities/RoleEntity';
import { SubscriptionEntity } from '../entities/SubscriptionEntity';
import { ClientEntity } from '../entities/ClientEntity';
import { VehicleEntity } from '../entities/VehicleEntity';
import { VehicleTypeEntity } from '../entities/VehicleTypeEntity';

// Repository Adapters
import { TypeOrmUserRepositoryAdapter } from '../repositories/TypeOrmUserRepositoryAdapter';
import { TypeOrmParkingRepositoryAdapter } from '../repositories/TypeOrmParkingRepositoryAdapter';
import { TypeOrmPlanRepositoryAdapter } from '../repositories/TypeOrmPlanRepositoryAdapter';
import { TypeOrmRoleRepositoryAdapter } from '../repositories/TypeOrmRoleRepositoryAdapter';
import { TypeOrmSubscriptionRepositoryAdapter } from '../repositories/TypeOrmSubscriptionRepositoryAdapter';
import { TypeOrmClientRepositoryAdapter } from '../repositories/TypeOrmClientRepositoryAdapter';
import { TypeOrmVehicleRepositoryAdapter } from '../repositories/TypeOrmVehicleRepositoryAdapter';
import { TypeOrmVehicleTypeRepositoryAdapter } from '../repositories/TypeOrmVehicleTypeRepositoryAdapter';

// Use Case Implementations
import { CreateUserUseCaseImpl } from '../../application/usecases/user/CreateUserUseCaseImpl';
import { RetrieveUserUseCaseImpl } from '../../application/usecases/user/RetrieveUserUseCaseImpl';
import { CreateParkingUseCaseImpl } from '../../application/usecases/parking/CreateParkingUseCaseImpl';
import { RetrieveParkingUseCaseImpl } from '../../application/usecases/parking/RetrieveParkingUseCaseImpl';
import { CreatePlanUseCaseImpl } from '../../application/usecases/plan/CreatePlanUseCaseImpl';
import { RetrievePlanUseCaseImpl } from '../../application/usecases/plan/RetrievePlanUseCaseImpl';
import { CreateRoleUseCaseImpl } from '../../application/usecases/role/CreateRoleUseCaseImpl';
import { RetrieveRoleUseCaseImpl } from '../../application/usecases/role/RetrieveRoleUseCaseImpl';
import { CreateSubscriptionUseCaseImpl } from '../../application/usecases/subscription/CreateSubscriptionUseCaseImpl';
import { RetrieveSubscriptionUseCaseImpl } from '../../application/usecases/subscription/RetrieveSubscriptionUseCaseImpl';
import { CreateClientUseCaseImpl } from '../../application/usecases/client/CreateClientUseCaseImpl';
import { RetrieveClientUseCaseImpl } from '../../application/usecases/client/RetrieveClientUseCaseImpl';
import { CreateVehicleUseCaseImpl } from '../../application/usecases/vehicle/CreateVehicleUseCaseImpl';
import { RetrieveVehicleUseCaseImpl } from '../../application/usecases/vehicle/RetrieveVehicleUseCaseImpl';
import { CreateVehicleTypeUseCaseImpl } from '../../application/usecases/vehicleType/CreateVehicleTypeUseCaseImpl';
import { RetrieveVehicleTypeUseCaseImpl } from '../../application/usecases/vehicleType/RetrieveVehicleTypeUseCaseImpl';

// Services
import { UserService } from '../../application/services/UserService';
import { ParkingService } from '../../application/services/ParkingService';
import { PlanService } from '../../application/services/PlanService';
import { RoleService } from '../../application/services/RoleService';
import { SubscriptionService } from '../../application/services/SubscriptionService';
import { ClientService } from '../../application/services/ClientService';
import { VehicleService } from '../../application/services/VehicleService';
import { VehicleTypeService } from '../../application/services/VehicleTypeService';

// Controllers
import { UserController } from '../controllers/UserController';
import { ParkingController } from '../controllers/ParkingController';
import { PlanController } from '../controllers/PlanController';
import { RoleController } from '../controllers/RoleController';
import { SubscriptionController } from '../controllers/SubscriptionController';
import { AuthController } from '../controllers/AuthController';
import { ClientController } from '../controllers/ClientController';
import { VehicleController } from '../controllers/VehicleController';
import { VehicleTypeController } from '../controllers/VehicleTypeController';

export class DependencyInjection {

  static getUserController(): UserController {
    const repo = new TypeOrmUserRepositoryAdapter(AppDataSource.getRepository(UserEntity));
    const roleRepo = new TypeOrmRoleRepositoryAdapter(AppDataSource.getRepository(RoleEntity));
    const createUC = new CreateUserUseCaseImpl(repo, roleRepo);
    const retrieveUC = new RetrieveUserUseCaseImpl(repo);
    const service = new UserService(retrieveUC, createUC);
    return new UserController(service);
  }

  static getParkingController(): ParkingController {
    const repo = new TypeOrmParkingRepositoryAdapter(AppDataSource.getRepository(ParkingEntity));
    const userRepo = new TypeOrmUserRepositoryAdapter(AppDataSource.getRepository(UserEntity));
    const createUC = new CreateParkingUseCaseImpl(repo, userRepo);
    const retrieveUC = new RetrieveParkingUseCaseImpl(repo);
    const service = new ParkingService(retrieveUC, createUC);
    return new ParkingController(service);
  }

  static getPlanController(): PlanController {
    const repo = new TypeOrmPlanRepositoryAdapter(AppDataSource.getRepository(PlanEntity));
    const createUC = new CreatePlanUseCaseImpl(repo);
    const retrieveUC = new RetrievePlanUseCaseImpl(repo);
    const service = new PlanService(retrieveUC, createUC);
    return new PlanController(service);
  }

  static getRoleController(): RoleController {
    const repo = new TypeOrmRoleRepositoryAdapter(AppDataSource.getRepository(RoleEntity));
    const createUC = new CreateRoleUseCaseImpl(repo);
    const retrieveUC = new RetrieveRoleUseCaseImpl(repo);
    const service = new RoleService(retrieveUC, createUC);
    return new RoleController(createUC, retrieveUC);
  }

  static getSubscriptionController(): SubscriptionController {
    const repo = new TypeOrmSubscriptionRepositoryAdapter(AppDataSource.getRepository(SubscriptionEntity));
    const createUC = new CreateSubscriptionUseCaseImpl(repo);
    const retrieveUC = new RetrieveSubscriptionUseCaseImpl(repo);
    const service = new SubscriptionService(retrieveUC, createUC);
    return new SubscriptionController(service);
  }

  static getAuthController(): AuthController {
    return new AuthController();
  }

  static getClientController(): ClientController {
    const repo = new TypeOrmClientRepositoryAdapter(AppDataSource.getRepository(ClientEntity));
    const createUC = new CreateClientUseCaseImpl(repo);
    const retrieveUC = new RetrieveClientUseCaseImpl(repo);
    const service = new ClientService(retrieveUC, createUC);
    return new ClientController(service);
  }

  static getVehicleController(): VehicleController {
    const repo = new TypeOrmVehicleRepositoryAdapter(AppDataSource.getRepository(VehicleEntity));
    const typeRepo = new TypeOrmVehicleTypeRepositoryAdapter(AppDataSource.getRepository(VehicleTypeEntity));
    const clientRepo = new TypeOrmClientRepositoryAdapter(AppDataSource.getRepository(ClientEntity));
    const createUC = new CreateVehicleUseCaseImpl(repo, typeRepo, clientRepo);
    const retrieveUC = new RetrieveVehicleUseCaseImpl(repo);
    const service = new VehicleService(retrieveUC, createUC);
    return new VehicleController(service);
  }

  static getVehicleTypeController(): VehicleTypeController {
    const repo = new TypeOrmVehicleTypeRepositoryAdapter(AppDataSource.getRepository(VehicleTypeEntity));
    const createUC = new CreateVehicleTypeUseCaseImpl(repo);
    const retrieveUC = new RetrieveVehicleTypeUseCaseImpl(repo);
    const service = new VehicleTypeService(retrieveUC, createUC);
    return new VehicleTypeController(service);
  }
}
