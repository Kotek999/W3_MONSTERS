// @ts-ignore
import temporaryImage from "../../assets/images/temporaryImage.png";
// @ts-ignore
import temporaryImage_Two from "../../assets/images/temporaryImage_Two.png";
// // @ts-ignore
// import monster_GraveHag from "../../assets/monsters/monsterImage_GraveHag.png";

const monster_GraveHag = require("../../assets/monsters/monsterImage_GraveHag.png");
const monster_Arachas = require("../../assets/monsters/monsterImage_Arachas.png");
const monster_Caretaker = require("../../assets/monsters/monsterImage_Caretaker.png");
const monster_Chort = require("../../assets/monsters/monsterImage_Chort.png");
const monster_Cyclops = require("../../assets/monsters/monsterImage_Cyclops.png");
const monster_Ifrit = require("../../assets/monsters/monsterImage_Ifrit.png");
const monster_Leshen = require("../../assets/monsters/monsterImage_Leshen.png");
const monster_Nekker = require("../../assets/monsters/monsterImage_Nekker.png");
const monster_Nightwraith = require("../../assets/monsters/monsterImage_Nightwraith.png");
const monster_Salma = require("../../assets/monsters/monsterImage_Salma.png");
const monster_Werewolf = require("../../assets/monsters/monsterImage_Werewolf.png");
const monster_Wyvern = require("../../assets/monsters/monsterImage_Wyvern.png");

import { MD3Colors } from "react-native-paper";

interface DataProps {
  id: number;
  value: string;
  image: any;
  borderColor: string;
  type: string;
  color?: string | undefined;
  typeColor: string;
  place: string;
  loot_first: string;
  loot_second: string;
  loot_third: string;
}

export const CARD_DATA: DataProps[] = [
  {
    id: 0,
    value: "Cmentarnica",
    image: monster_GraveHag,
    borderColor: "#cfd8dc",
    type: "Zwyczajny",
    color: MD3Colors.neutralVariant80,
    typeColor: "#cfd8dc",
    place: "Cmentarze lub pola bitewne",
    loot_first: "Jęzor potwora",
    loot_second: "Miecz Addan Deith",
    loot_third: "Większy kamień runiczny Trygław",
  },
  {
    id: 1,
    value: "Krabopająk",
    image: monster_Arachas,
    borderColor: "#cfd8dc",
    type: "Zwyczajny",
    color: MD3Colors.neutralVariant80,
    typeColor: "#cfd8dc",
    place: "Lasy",
    loot_first: "Pancerz krabopająka",
    loot_second: "Ametystowy pył",
    loot_third: "Diamentowy pył",
  },
  {
    id: 2,
    value: "Klucznik",
    image: monster_Caretaker,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
    typeColor: "#ab149e",
    place: "Rezydencja von Evereców",
    loot_first: "Łopata Klucznika",
    loot_second: "Ubranie",
    loot_third: "Większy kamień runiczny Trygław",
  },
  {
    id: 3,
    value: "Czart",
    image: monster_Chort,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Lasy Kontynentu i Wysp Skellige",
    loot_first: "Surowe mięso",
    loot_second: "Mutagen z czarta",
    loot_third: "Skóra czarta",
  },
  {
    id: 4,
    value: "Cyklop",
    image: monster_Cyclops,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Zrujnowane ruiny",
    loot_first: "Oko cyklopa",
    loot_second: "Diamentowy pył",
    loot_third: "Większy kamień runiczny Trygław",
  },
  {
    id: 5,
    value: "Ifrit",
    image: monster_Ifrit,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Wymiar Ognia",
    loot_first: "Piryty ",
    loot_second: "Kula ognia",
    loot_third: "Ektoplazma",
  },
  {
    id: 6,
    value: "Leszy",
    image: monster_Leshen,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
    typeColor: "#ab149e",
    place: "Niedostępne lasy, puszcze i bory",
    loot_first: "Kość potwora",
    loot_second: "Sproszkowana tkanka potwora",
    loot_third: "Trofea z Leszego",
  },
  {
    id: 7,
    value: "Nekker",
    image: monster_Nekker,
    borderColor: "#cfd8dc",
    type: "Zwyczajny",
    color: MD3Colors.neutralVariant80,
    typeColor: "#cfd8dc",
    place: "Jaskinie, otwarte przestrzenie",
    loot_first: "Krew Nekkera",
    loot_second: "Pazur Nekkera",
    loot_third: "Serce Nekkera",
  },
  {
    id: 8,
    value: "Północnica",
    image: monster_Nightwraith,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Miejsce swojej śmierci lub mogiły",
    loot_first: "Cienisty Pył",
    loot_second: "Pył Śmierc",
    loot_third: "Włosy Północnicy",
  },
  {
    id: 9,
    value: "Salma",
    image: monster_Salma,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
    typeColor: "#ab149e",
    place: "Różne mieszkania",
    loot_first: "Szpon potwora",
    loot_second: "Trofeum z sukkuba",
    loot_third: "Mutagen z sukkuba",
  },
  {
    id: 10,
    value: "Wilkołak",
    image: monster_Werewolf,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Velen, Wyspy Skellige",
    loot_first: "Szpon potwora",
    loot_second: "Krew potwora",
    loot_third: "Mutagen z wilkołaka",
  },
  {
    id: 11,
    value: "Wywerna",
    image: monster_Wyvern,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
    typeColor: "#fcc400",
    place: "Tereny górskie i skaliste",
    loot_first: "Jajo wywerny",
    loot_second: "Mięso wywerny",
    loot_third: "Błona lotna",
  },
];
