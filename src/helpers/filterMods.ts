import mods from '../data/mods.json';
import cheats from '../data/cheats.json';

/**
 * @param filter
 * @param enableCheats
 * @param enablePaid
 * @returns a list of mods based on filter
 */
export const filterMods = (
  filter: string,
  enableCheats: boolean,
  enablePaid: boolean,
  discontinued: boolean
) => {
  // Filter mods by name
  const modsFiltered = mods.filter((mod) =>
    mod.name.toLowerCase().includes(filter.toLowerCase())
  );

  modsFiltered.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  // Filter mods by cheats
  const cheatsFiltered: any = enableCheats
    ? cheats.filter((cheat: any) =>
        cheat.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  cheatsFiltered.sort((a: any, b: any) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  // Filter mods by discontinued
  const discontinuedFiltered = discontinued
    ? modsFiltered
    : modsFiltered.filter((mod) => !mod.tags.includes('discontinued'));
  const discontinuedCheatsFiltered = discontinued
    ? cheatsFiltered
    : cheatsFiltered.filter(
        (cheat: any) => !cheat.tags.includes('discontinued')
      );

  // Filter mods by paid
  const paidFiltered = enablePaid
    ? discontinuedFiltered
    : discontinuedFiltered.filter((mod: any) => !mod.paid);
  const paidCheatsFiltered = enablePaid
    ? discontinuedCheatsFiltered
    : discontinuedCheatsFiltered.filter((mod: any) => !mod.paid);

  // Filters all the mods
  const allMods = paidFiltered.concat(paidCheatsFiltered).sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });

  return allMods;
};
