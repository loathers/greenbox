import iotms from "../data/iotms";

export enum IotmStatus {
    NONE = 0,
    BOXED = 1,
    BOUND = 2,
  }

export type IotmDef = {
  id: number;
  month: number;
  year: number;
};

const parseIOTM = (iotmParts: string[]): IotmDef => ({
    id: Number(iotmParts[0]),
    month: Number(iotmParts[1].substring(0,2)),
    year: Number(iotmParts[1].substring(3)),
})

export function loadIotms(lastKnownSize = 0) {
  const iotmCount = JSON.stringify(iotms).length;

  if (iotmCount === lastKnownSize) return null;

  return {
    data: iotms.map((i) => parseIOTM([i.id, i.mmyyyy]) ),
    size: iotmCount,
  };
}

export type RawIOTM = readonly [id: number, status: IotmStatus];

export const compressIotms = (iotmList: RawIOTM[]) =>
    iotmList
      .sort((a,b) => a[0] - b[0]) //sorts by itemID?
      .reduce((r, iotm) => `${r}${iotm[1]}`, "") // concats owned status to the resulting object
      .replace(/0+$/, ""); // removes trailing zeroes to lower string size

export const expandIotms = (iotmString = "") => {
    let result = [] as RawIOTM[]; 
    let referencePoint = 0;

    // We need to snag all the IDs to expand out our compression
    const iotmsByNumber = iotms.map((i) => Number(i.id));

    // Do we want to grab this from load somehow? IDK
    const iotmSize = JSON.stringify(iotms).length;

    // Add back trailing zeroes 
    if (iotmString.length < iotmSize) {
        iotmString = iotmString.padEnd(iotmSize, "0");
    }

    // Every character of the string is just the status of X item.
    for (const iotmStatus of iotmString) {
        result.push([iotmsByNumber[++referencePoint], Number(iotmStatus) as IotmStatus])
    }

    return result;

}