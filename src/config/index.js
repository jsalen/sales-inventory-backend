require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProduction: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3005,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  mailAddress: process.env.MAIL_ADDRESS,
  mailPassword: process.env.MAIL_PASSWORD,
}

module.exports = { config }
