import ExpressAdapter from "./infra/api/ExpressAdapter";
import IssueRouter from "./infra/api/routers/IssueRouter";
import UserRouter from "./infra/api/routers/UserRouter";
import PrismaAdapter from "./infra/database/PrismaAdapter";
import { IssueDatabaseRepository } from "./infra/repository/IssueDatabaseRepository";
import { UserDatabaseRepository } from "./infra/repository/UserDatabaseRepository";

const port = process.env.PORT;

export const httpServer = new ExpressAdapter();
const connection = new PrismaAdapter();

export const issuesRepository = new IssueDatabaseRepository(connection)
export const usersRepository = new UserDatabaseRepository(connection)

export const issueRouter = new IssueRouter(
  httpServer,
  issuesRepository
)
export const userRouter = new UserRouter(
  httpServer,
  usersRepository
)

issueRouter.init();
userRouter.init();

httpServer.listen(port)