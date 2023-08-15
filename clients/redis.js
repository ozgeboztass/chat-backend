const redis = require("redis");

const getClient = () => {
  const redisUrl = "rediss://default:...";
  return redis.createClient(redisUrl, {
    tls: {
      rejectUnauthorized: false, // Bu satırı ekleyin, gerekirse
    },
    db: 1,
  });
};

module.exports.getClient = getClient;
