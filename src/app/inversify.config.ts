import { Container } from "inversify";
import { Katana, Ninja, Shuriken } from "./entities/entities";
import { ThrowableWeapon, Warrior, Weapon } from "./interfaces/interfaces";
import { TYPES } from "./types/types";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
