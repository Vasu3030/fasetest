import React from "react";
import Svg, { Path } from "react-native-svg";

export const BookmarkIcon = ({ width = 24, height = 24, fill = "none", stroke = "currentColor", strokeWidth = 2 }) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
    <Path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);