import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { data } = req.body
        try {
            const result = await prisma.user.create({
                data: {
                    name: data.name,
                    password: data.password,
                }
            })
            res.json(result)
        } catch (error) {
            res.json(error)
        }
    }
}
