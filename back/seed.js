import fs from "fs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  try {
    const AllChampions = JSON.parse(fs.readFileSync("champions.json", "utf-8"));

    for (const champ of AllChampions) {
      await prisma.champ.create({
        data: {
          name: champ.name,
          type: champ.type
        },
      });
    }
    console.log("seeding réussi");
  } catch (error) {
    console.log("erreur lors du seeding");
  }
}
seed()
