import { Item, print, toInt } from "kolmafia";
import { IOTM, MrStoreMonthly } from "./iotms";

// Exporting constants for months and years. 0 is for special casing.
const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const years = [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

for (const y of years) {
    for (const m of months) {
        var currIotm = MrStoreMonthly[y][m] as [Item, IOTM] | undefined;

        if (currIotm != undefined) {
            print("{ id: \"" + toInt(currIotm[1].storeItem) + "\", mmyyyy: \""+ String(m).padStart(2,"0") + String(y) +"\" }, // " + currIotm[1].storeItem.name)
        }
        
    }
}
