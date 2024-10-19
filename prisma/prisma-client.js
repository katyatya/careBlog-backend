import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
	return new PrismaClient()
}

let prisma

if (process.env.NODE_ENV !== 'production') {
	prisma = prismaClientSingleton()
} else {
	if (!global.prismaGlobal) {
		global.prismaGlobal = prismaClientSingleton()
	}
	prisma = global.prismaGlobal
}

module.exports = prisma
