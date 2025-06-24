import { type ThingType as TT } from "@prisma/client";
import { createContext, useContext, type ReactNode } from "react";

type ThingType = TT | Lowercase<TT>;

type WikiLink = {
  name: string;
  type: ThingType;
  url: string;
  manual: boolean;
};

type WikiLinkContextType = {
  wikiLinks: WikiLink[];
  getWikiLink: (thingType: ThingType, name: string) => string | null;
};

const WikiLinkContext = createContext<WikiLinkContextType | null>(null);

type WikiLinkProviderProps = {
  children: ReactNode;
  wikiLinks: WikiLink[];
};

export function WikiLinkProvider({ children, wikiLinks }: WikiLinkProviderProps) {
  const getWikiLink = (thingType: ThingType, name: string): string | null => {
    const link = wikiLinks.find(
      (wl) => wl.type === thingType && wl.name === name
    );
    return link ? link.url : null;
  };

  return (
    <WikiLinkContext.Provider value={{ wikiLinks, getWikiLink }}>
      {children}
    </WikiLinkContext.Provider>
  );
}

export function useWikiLink(thingType: ThingType, name: string, link?: string): string | null {
  if (link) return link;
  const context = useContext(WikiLinkContext);
  if (!context) {
    throw new Error("useWikiLink must be used within a WikiLinkProvider");
  }
  return context.getWikiLink(thingType, name);
} 