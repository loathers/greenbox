import { type KnownProperty } from "libram";

export interface Bindable {
  id: number;
  type: string;
  year: number;
}

export interface BindableCampground extends Bindable {
  type: "campground";
  /**
   * This can cover gardens, worksheds and items that install directly to the campground.
   * If no item is supplied, the Mr Store item is checked directly.
   */
  item?: string;
}

export interface BindableCustom extends Bindable {
  type: "custom";
}

export interface BindableEudora extends Bindable {
  type: "eudora";
  /**
   * The id of the correspondent
   */
  eudoraId: number;
}

export interface BindableFamiliar extends Bindable {
  type: "familiar";
  /**
   * Familiar name to check. If an array is provided, checks for any of those familiars
   */
  familiar: string | string[];
}

export interface BindableItem extends Bindable {
  type: "item";
  /**
   * Item name to check. If an array is provided, checks for any of those items.
   * If the item provided is part of a fold group, any of those items will match.
   */
  item: string | string[];
}

export interface BindablePreference extends Bindable {
  type: "preference";
  /**
   * Preference to check. If it contains "true" the IotY will be considered owned.
   */
  preference: KnownProperty;
}

export interface BindableSkill extends Bindable {
  type: "skill";
  /**
   * Skill name to check.
   */
  skill: string;
}

export interface BindableVIP extends Bindable {
  type: "vip";
}

export type BindableDef =
  | BindableCampground
  | BindableCustom
  | BindableEudora
  | BindableFamiliar
  | BindableItem
  | BindablePreference
  | BindableSkill
  | BindableVIP;
