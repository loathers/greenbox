import {
  AscensionClass,
  Familiar,
  Item,
  Skill,
  createClient,
} from "data-of-loathing";

export const client = createClient();
export const dbReady = client.load();

let _classes: Promise<AscensionClass[]> | null = null;
let _familiars: Promise<Familiar[]> | null = null;
let _items: Promise<Item[]> | null = null;
let _skills: Promise<Skill[]> | null = null;

export const classesPromise = () =>
  (_classes ??= dbReady.then(() =>
    client.query.findAll(AscensionClass, { orderBy: { id: "ASC" } }),
  ));

export const familiarsPromise = () =>
  (_familiars ??= dbReady.then(() =>
    client.query.findAll(Familiar, { orderBy: { id: "ASC" } }),
  ));

export const itemsPromise = () =>
  (_items ??= dbReady.then(() =>
    client.query.findAll(Item, { orderBy: { id: "ASC" } }),
  ));

export const skillsPromise = () =>
  (_skills ??= dbReady.then(() =>
    client.query.findAll(Skill, { orderBy: { id: "ASC" } }),
  ));
