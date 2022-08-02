import ExpressAdapter from "./infra/api/ExpressAdapter";
import Router from "./infra/api/Router";
import PrismaAdapter from "./infra/database/PrismaAdapter";
import { IssueDatabaseRepository } from "./infra/repository/IssueDatabaseRepository";

const port = process.env.PORT || 3002;

const httpServer = new ExpressAdapter();
const connection = new PrismaAdapter();
export const issuesRepository = new IssueDatabaseRepository(connection)
const router = new Router(httpServer, issuesRepository);

router.init();
httpServer.listen(3002)