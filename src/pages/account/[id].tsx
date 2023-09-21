import {ReactNode} from "react";
import {PrismaClient} from "@prisma/client";
import MainLayout from "@/layout/main";

const prisma = new PrismaClient();

User.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}
export default function User({user}) {
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.password == null ? "password config error": user.password}</p>
        </div>
    )
}
export async function getServerSideProps({params}: {params: {id: string}}) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        }
    });
    return {
        props: {
            user
        }
    }
}

//export async function GET(request: NextRequest,{ params }: { params: { id: string } }) {