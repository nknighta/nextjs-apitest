import React,{ReactNode} from 'react'
import MainLayout from "@/layout/main";
export default function Test() {
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}

Test.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}