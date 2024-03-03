export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_DATABASE_NAME,
    synchronize: 'true' === process.env.DB_SYNCHRONIZE,
    useSSL: 'true' === process.env.DB_USE_SSL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
});
