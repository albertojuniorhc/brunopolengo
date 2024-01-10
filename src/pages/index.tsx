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
      <main className="flex min-h-screen flex-col items-center justify-center bg-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Coming soon...
          </h1>
          <p className="text-2xl text-cyan-50">
            <a href="mailto:contato@brunopolengo.com.br">
              contato@brunopolengo.com.br
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
