import { clerkPlugin, getAuth } from "@clerk/fastify";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.register(clerkPlugin);

fastify.get("/health", async (request, reply) => {
  return reply.status(200).send("I'm Alive!");
});

// Run the server!
async function start() {
  try {
    await fastify.listen({ port: 8080 });
  } catch (err) {
    fastify.log.error(err);
  }
}

start();
