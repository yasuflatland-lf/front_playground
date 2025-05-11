import "@/styles/globals.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SidebarProvider>
			<Head>
				<title>Playground</title>
			</Head>
			<AppSidebar />
			<main>
				<SidebarTrigger />
				<Component {...pageProps} />
			</main>
		</SidebarProvider>
	);
}
