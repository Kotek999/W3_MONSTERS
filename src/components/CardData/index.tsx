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
}

export const CARD_DATA: DataProps[] = [
  {
    id: 0,
    value: "Potwór 1",
    image: monster_GraveHag,
    borderColor: "#cfd8dc",
    type: "Zwyczajny",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 1,
    value: "Potwór 2",
    image: monster_Arachas,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 2,
    value: "Potwór 3",
    image: monster_Caretaker,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 3,
    value: "Potwór 4",
    image: monster_Chort,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 4,
    value: "Potwór 5",
    image: monster_Cyclops,
    borderColor: "#ab149e",
    type: "Unikat",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 5,
    value: "Potwór 6",
    image: monster_Ifrit,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 6,
    value: "Potwór 7",
    image: monster_Leshen,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 7,
    value: "Potwór 8",
    image: monster_Nekker,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 8,
    value: "Potwór 9",
    image: monster_Nightwraith,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 9,
    value: "Potwór 10",
    image: monster_Salma,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 10,
    value: "Potwór 11",
    image: monster_Werewolf,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
  {
    id: 11,
    value: "Potwór 12",
    image: monster_Wyvern,
    borderColor: "#fcc400",
    type: "Rzadki",
    color: MD3Colors.neutralVariant80,
  },
];
