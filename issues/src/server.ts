import ExpressAdapter from "./infra/api/ExpressAdapter";
import Router from "./infra/api/Router";
import PrismaAdapter from "./infra/database/PrismaAdapter";
import { IssueDatabaseRepository } from "./infra/repository/IssueDatabaseRepository";
import { UserDatabaseRepository } from "./infra/repository/UserDatabaseRepository";

const port = process.env.PORT;

export const httpServer = new ExpressAdapter();
const connection = new PrismaAdapter();
export const issuesRepository = new IssueDatabaseRepository(connection)
export const usersRepository = new UserDatabaseRepository(connection)
export const router = new Router(
  httpServer,
  issuesRepository,
  usersRepository);

router.init();
httpServer.listen(port)