import type { AscensionClass, Familiar, Item, Skill } from "data-of-loathing";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import {
  classesPromise,
  familiarsPromise,
  itemsPromise,
  skillsPromise,
} from "./dolClient.js";
import type { RootState, AppDispatch } from "./store/index.js";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useClasses(): Record<number, AscensionClass> {
  const [classes, setClasses] = useState<AscensionClass[]>([]);
  useEffect(() => {
    classesPromise().then(setClasses);
  }, []);
  return useMemo(
    () => Object.fromEntries(classes.map((c) => [c.id, c])),
    [classes],
  );
}

export function useFamiliars(): Familiar[] {
  const [familiars, setFamiliars] = useState<Familiar[]>([]);
  useEffect(() => {
    familiarsPromise().then(setFamiliars);
  }, []);
  return familiars;
}

export function useItems(): Record<number, Item> {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    itemsPromise().then(setItems);
  }, []);
  return useMemo(() => Object.fromEntries(items.map((i) => [i.id, i])), [items]);
}

export function useSkills(): Skill[] {
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    skillsPromise().then(setSkills);
  }, []);
  return skills;
}

export function useSkillsById(): Record<number, Skill> {
  const skills = useSkills();
  return useMemo(
    () => Object.fromEntries(skills.map((s) => [s.id, s])),
    [skills],
  );
}
