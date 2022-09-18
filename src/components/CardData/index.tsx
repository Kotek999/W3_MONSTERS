// @ts-ignore
import temporaryImage from "../../assets/images/temporaryImage.png";
// @ts-ignore
import temporaryImage_Two from "../../assets/images/temporaryImage_Two.png";
// @ts-ignore
import monster_GraveHag from "../../assets/monsters/monsterImage_GraveHag.png";

interface DataProps {
  id: number;
  value: string;
  image: any;
}

export const CARD_DATA: DataProps[] = [
  {
    id: 0,
    value: "Potwór 1",
    image: monster_GraveHag,
  },
  {
    id: 1,
    value: "Potwór 2",
    image: temporaryImage,
  },
  {
    id: 2,
    value: "Potwór 3",
    image: temporaryImage_Two,
  },
  {
    id: 3,
    value: "Potwór 4",
    image: temporaryImage_Two,
  },
  {
    id: 4,
    value: "Potwór 5",
    image: temporaryImage_Two,
  },
  {
    id: 5,
    value: "Potwór 6",
    image: temporaryImage,
  },
  {
    id: 6,
    value: "Potwór 7",
    image: temporaryImage,
  },
  {
    id: 7,
    value: "Potwór 8",
    image: temporaryImage,
  },
  {
    id: 8,
    value: "Potwór 9",
    image: temporaryImage,
  },
].reverse();
