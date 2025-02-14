import { Client, fetchExchange } from "@urql/core";
import { graphql } from "gql.tada";

const findDuplicates = (strings: string[]) => {
  const seen = new Set();
  const duplicates = new Set();
  for (const string of strings) {
    if (seen.has(string)) {
      duplicates.add(string);
    } else {
      seen.add(string);
    }
  }
  return duplicates;
};

const client = new Client({
  url: "https://data.loathers.net/graphql",
  exchanges: [fetchExchange],
});

const CLASH_QUERY = graphql(`
  query Clashes {
    allSkills {
      nodes {
        name
      }
    }
    allEffects {
      nodes {
        name
      }
    }
    allItems {
      nodes {
        name
      }
    }
    allFamiliars {
      nodes {
        name
      }
    }
  }
`);

const things = await client.query(CLASH_QUERY, {}).toPromise();
const thingNames = things.data
  ? Object.values(things.data)
      .flatMap((t) => t?.nodes?.map((e) => e?.name ?? null) ?? null)
      .filter((name) => name !== null)
  : [];
const clashes = findDuplicates(thingNames);
