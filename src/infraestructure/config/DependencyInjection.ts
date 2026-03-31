import { DataSource, Repository } from 'typeorm';
import { AppDataSource } from './DatabaseConfig';

// Entities
import { UserEntity } from '../entities/UserEntity';
import { ParkingEntity } from '../entities/ParkingEntity';
import { PlanEntity } from '../entities/PlanEntity';
import { RoleEntity } from '../entities/RoleEntity';
import { SubscriptionEntity } from '../entities/SubscriptionEntity';

// Repository Adapters
import { TypeOrmUserRepositoryAdapter } from '../repositories/TypeOrmUserRepositoryAdapter';
import { TypeOrmParkingRepositoryAdapter } from '../repositories/TypeOrmParkingRepositoryAdapter';
import { TypeOrmPlanRepositoryAdapter } from '../repositories/TypeOrmPlanRepositoryAdapter';
import { TypeOrmRoleRepositoryAdapter } from '../repositories/TypeOrmRoleRepositoryAdapter';
import { TypeOrmSubscriptionRepositoryAdapter } from '../repositories/TypeOrmSubscriptionRepositoryAdapter';

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

// Services
import { UserService } from '../../application/services/UserService';
import { ParkingService } from '../../application/services/ParkingService';
import { PlanService } from '../../application/services/PlanService';
import { RoleService } from '../../application/services/RoleService';
import { SubscriptionService } from '../../application/services/SubscriptionService';

// Controllers
import { UserController } from '../controllers/UserController';
import { ParkingController } from '../controllers/ParkingController';
import { PlanController } from '../controllers/PlanController';
import { RoleController } from '../controllers/RoleController';
import { SubscriptionController } from '../controllers/SubscriptionController';
import { AuthController } from '../controllers/AuthController';

export class DependencyInjection {

  static getUserController(): UserController {
    const repo = new TypeOrmUserRepositoryAdapter(AppDataSource.getRepository(UserEntity));
    const createUC = new CreateUserUseCaseImpl(repo);
    const retrieveUC = new RetrieveUserUseCaseImpl(repo);
    const service = new UserService(retrieveUC, createUC);
    return new UserController(service);
  }

  static getParkingController(): ParkingController {
    const repo = new TypeOrmParkingRepositoryAdapter(AppDataSource.getRepository(ParkingEntity));
    const createUC = new CreateParkingUseCaseImpl(repo);
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
}
