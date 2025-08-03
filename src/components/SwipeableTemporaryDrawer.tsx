// components/SwipeableTemporaryDrawer.tsx

import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  ShoppingCart,
  Favorite,
  Person,
  Settings,
  Close,
  Home,
  Mail,
  Star,
  Inbox,
} from "@mui/icons-material";

type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  anchor?: Anchor;
}

export default function SwipeableTemporaryDrawer({
  open,
  onClose,
  onOpen,
  anchor = "right",
}: Props) {
  const mainMenuItems = [
    { text: "Shopping Cart", icon: <ShoppingCart /> },
    { text: "Favorites", icon: <Favorite /> },
    { text: "My Profile", icon: <Person /> },
    { text: "Settings", icon: <Settings /> },
  ];

  const quickLinks = [
    { text: "Home", icon: <Home /> },
    { text: "Featured Products", icon: <Star /> },
    { text: "Contact Support", icon: <Mail /> },
    { text: "All Categories", icon: <Inbox /> },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 280,
        height: "100%",
        backgroundColor: "#ffffff",
      }}
      role="presentation"
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          backgroundColor: "#f8f9fa",
          borderBottom: "1px solid #e0e0e0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#333",
          }}
        >
          Menu
        </Typography>
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: "#666",
            border: "1px solid #ddd",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>

      {/* Main Menu Items */}
      <List sx={{ pt: 2, pb: 1 }}>
        {mainMenuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                py: 1.5,
                px: 2,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#666", minWidth: 45 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "#333",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ mx: 2, borderColor: "#e0e0e0" }} />

      {/* Quick Links */}
      <List sx={{ pt: 1, pb: 2 }}>
        <ListItem sx={{ px: 2, py: 1 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#666",
              fontWeight: 600,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Quick Links
          </Typography>
        </ListItem>
        {quickLinks.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                py: 1,
                px: 2,
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#666", minWidth: 45 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiListItemText-primary": {
                    color: "#333",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      {list(anchor)}
    </SwipeableDrawer>
  );
}
