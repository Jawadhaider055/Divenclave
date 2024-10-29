import { PrismaClient } from '@prisma/client';

let prisma;

// Use global object to prevent the creation of multiple Prisma instances in development
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // Use a single PrismaClient instance in production
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient(); // Create a new PrismaClient instance if it doesn't exist in global
  }
  prisma = global.prisma; // Reuse PrismaClient instance across hot reloads
}

export default prisma;
