import IORedis from "ioredis";
import RedLock from "redlock";
import { serverConfig } from ".";


const redisClient = new IORedis(serverConfig.REDIS_SERVERURL);

const redlock = new RedLock([redisClient], {
    driftFactor: 0.01, // time in ms
    retryCount: 10,
    retryDelay: 200, // time in ms
    retryJitter: 200, // time in ms
});

export { redisClient, redlock };