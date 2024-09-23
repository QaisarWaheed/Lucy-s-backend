import { Request, Response, Router } from "express";

import { AppDataSource } from "../DB/data.source";
import Admin from "../entities/admin";

const router = Router();
const adminRepo = AppDataSource.manager.getRepository(Admin);

router.get("/", async function (req: Request, res: Response) {
  const AllAdmins = await adminRepo.find();
  res.send(AllAdmins);
});

router.post("/addAdmin", async function (req: Request, res: Response) {
  const data = req.body;
  const found = await adminRepo.findOneBy({ name: data.name });
  if (found) {
    res.send(`admin with name ${data.name} already exist`);
  } else {
    const newAdmin = adminRepo.create({
      name: data.name,
      password: data.password,
    });
    await adminRepo.save(newAdmin);
    res.status(201).send(newAdmin);
  }
});

router.post("/login", async function (req: Request, res: Response) {
  const data = req.body;
  const found = await adminRepo.findOneBy({
    name: data.name,
    password: data.password,
  });
  if (found) {
    res.status(200).send("Login succesfull!");
  } else {
    res.status(400).send("username or Password is incorrect");
  }
});
export default router;
