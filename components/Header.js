import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Link,
  Container,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";

const links = [
  { href: "/#news-sites", text: "News Sites" },
  { href: "/#prices", text: "Pricing" },
  { href: "mailto:hello@enterprwise.com", text: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:950px)");

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#f5f7fa", boxShadow: 0, px: 0 }}>
      <Container
        sx={{ marginTop: "8px!important", paddingBottom: "0px!important" }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              href="/"
              component={NextLink}
              sx={{
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  color: "black",
                  fontSize: "1.5rem",
                  fontFamily: "'Merriweather Sans', sans-serif;",
                }}
                id="enterprwise-logo-header"
              >
                ENTER<span style={{ color: "red" }}>PR</span>WISE
              </Typography>
            </Link>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="black"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="top"
                open={isOpen}
                onClose={handleMenuClose}
                PaperProps={{ style: { marginTop: 64 } }}
              >
                <List>
                  {links.map((link, index) => (
                    <ListItem button key={index} onClick={handleMenuClose}>
                      <Link
                        href={link.href}
                        component={NextLink}
                        variant="header"
                        sx={{
                          whiteSpace: "nowrap",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        {link.text}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box display="flex" flexWrap="nowrap">
              {links.map((link, index) => (
                <Link
                  href={link.href}
                  component={NextLink}
                  variant="header"
                  sx={{ whiteSpace: "nowrap", ml: 2 }}
                  key={index}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
