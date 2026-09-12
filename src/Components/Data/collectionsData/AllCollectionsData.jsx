import { dataMenCollections } from "./MenCollectionsData";
import { dataWomenCollections } from "./WomenCollectionsData";
import { dataKidsCollections } from "./KidsCollectionsData";

export const allCollectionsData = [
    ...dataWomenCollections,
    ...dataMenCollections,
    ...dataKidsCollections,
]