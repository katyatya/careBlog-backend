import { PrismaClient } from '@prisma/client'

const prismaClientSindleton = () => {
	return new PrismaClient()
}
declare global {
	var prismaGlobal: undefined | ReturnType<typeof prismaClientSindleton>
}
export const prisma = globalThis.prismaGlobal ?? prismaClientSindleton()
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
