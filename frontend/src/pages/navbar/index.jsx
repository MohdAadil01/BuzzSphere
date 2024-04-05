import React from "react";
import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  getFormControlLabelUtilityClasses,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMobileMenuToggled, setIsMobileMenutoggled] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width: 100px)");

  const theme = useTheme();
  const neutralLight = theme.palette.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  // const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"1rem 6%"}
      backgroundColor={alt}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"1.75rem"}
      >
        <Typography fontWeight={"bold"} fontSize={"clamp(1rem, 2rem, 2.25rem)"}>
          BuzzSphere
        </Typography>
      </Box>
    </Box>
  );
}
export default Navbar;
