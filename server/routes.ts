import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/subscribe", async (req, res) => {
    try {
      const parsed = insertSubscriberSchema.parse(req.body);

      const emailSchema = z.string().email();
      emailSchema.parse(parsed.email);

      const existing = await storage.getSubscriberByEmail(parsed.email);
      if (existing) {
        return res.status(200).json({ message: "You're already subscribed!" });
      }

      await storage.createSubscriber(parsed);
      return res.status(201).json({ message: "Welcome to The Collective Purpose." });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Please enter a valid email address." });
      }
      console.error("Subscription error:", error);
      return res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  return httpServer;
}
