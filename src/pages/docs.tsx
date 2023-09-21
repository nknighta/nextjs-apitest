import {ReactNode } from "react";
import MainLayout from "@/layout/main";

Docs.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}
export default function Docs() {
    return (
        <>
            <h1>Docs</h1>
            <p>Docs</p>
        </>
    );
};