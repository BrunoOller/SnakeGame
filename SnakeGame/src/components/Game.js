import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Direction } from "../types";
import * as Haptics from "expo-haptics";

const { height } = Dimensions.get("window");
import {
    COLS,
    FOOD_START,
    HEADER_HEIGHT,
    INCREMENT,
    PIXEL,
    SNAKE_START,
    SPEED,
} from "../consts";

import Header from "./Header"
import Board from "./Board"
import Snake from "./Snake"
import Food from "./Food"

import { colors } from "../styles/theme"