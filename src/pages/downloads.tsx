import {ReactNode} from "react";
import MainLayout from "@/layout/main";

Downloads.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default function Downloads() {
    return (
        <div>
            <div>Downloads</div>
        </div>
    )
}