import { Dimensions } from "react-native";
import isWEB from "../Resolutions/isWEB";

export const DM_WIDTH: number = Dimensions.get("window").width;
export const DM_HEIGHT: number = Dimensions.get("window").height;

export const DM_WIDTH_MARGIN: number = DM_WIDTH - 50;
export const DM_HEIGHT_MARGIN: number = DM_HEIGHT / 1.5;

export const DM_WIDTH_MARGIN_WEB: number = isWEB() ? 500 : DM_WIDTH_MARGIN;
export const DM_WIDTH_WEB: number = isWEB() ? 500 : DM_WIDTH;
