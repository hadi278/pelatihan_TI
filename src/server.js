require("dotenv").config();
const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: () => ({
      name: "Hadi Rachmaat Supindar",
    }),
  });

  await server.start();
  console.log(`server running at ${server.info.uri}`);
};

init();
