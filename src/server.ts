import dotenv from "dotenv";
import http, { Server } from "http";
import app from "./app";

dotenv.config();

let server: Server | null = null;

async function startServer() {
  try {
    server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log("Server is Running on port:", process.env.PORT);
    });

    handleProcessEvents();
  } catch (err) {
    console.log("Error during server setup:", err);
    process.exit(1);
  }
}

async function gracefulShutdown(signal: string) {
  console.warn(`🔄 Received ${signal}, shutting down gracefully...`);
  if (server) {
    server.close(async () => {
      console.log("HTTP server closed.");

      try {
        console.log("Server shutdown complete.");
      } catch (error) {
        console.error("Error during shutdown:", error);
      }
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
}

//handle system signals and unepected errors.
function handleProcessEvents() {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
  process.on("uncaughtException", (error) => {
    console.error("💥 Uncaught Exception:", error);
    gracefulShutdown("uncaughtException");
  });

  process.on("unhandledRejection", (reason) => {
    console.error("💥 Unhandled Rejection:", reason);
    gracefulShutdown("unhandledRejection");
  });
}

startServer();
