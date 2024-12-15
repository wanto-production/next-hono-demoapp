import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "login",
};

export default async function RootLayout({
    form
}:{
    form:ReactNode
}) {

    return(
        <main className=" w-full h-screen flex justify-center items-center">
            {form}
        </main>
    )
}