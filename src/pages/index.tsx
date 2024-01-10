import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Bruno Polengo</title>
        <meta name="description" content="Bruno Polengo WebSite" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black font-mono text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="animate-pulse text-5xl font-extrabold text-white sm:text-[5rem]">
            Coming soon...
          </h1>
          <a href="mailto:contato@brunopolengo.com.br">
            contato@brunopolengo.com.br
          </a>
        </div>
      </main>
    </>
  );
}
