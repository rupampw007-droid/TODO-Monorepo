import "dotenv/config"
import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <main>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </main>
  );
}


// export const revalidate = 60
// export const dynamic = "force-dynamic"