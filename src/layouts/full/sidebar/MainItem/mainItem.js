import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
  Collapse,
} from "@mui/material";
import NavItem from "../NavItem";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const MainItem = ({ item, level, pathDirect, onClick, subs }) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;
  const [open, setOpen] = React.useState(false);
  const ListItemStyled = styled(ListItemButton)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "8px 10px",
    borderRadius: "8px",
    backgroundColor: level > 1 ? "transparent !important" : "inherit",
    color: theme.palette.text.secondary,
    paddingLeft: "10px",
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    "&.Mui-selected": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
  }));
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled button onClick={handleClick}>
        <ListItemIcon
          sx={{
            minWidth: "36px",
            p: "3px 0",
            color: "inherit",
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText>
          <>{item.title}</>
        </ListItemText>

        {open ? <ExpandMore></ExpandMore> : <ExpandLess></ExpandLess>}
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subs.map((item) => {
            return (
              <ListItemStyled
                onClick={onClick}
                component={item.external ? "a" : NavLink}
                to={item.href}
                href={item.external ? item.href : ""}
                disabled={item.disabled}
                selected={pathDirect === item.href}
                target={item.external ? "_blank" : ""}
              >
                <ListItemText style={{ marginLeft: "40px" }}>
                  <>{item.title}</>
                </ListItemText>
              </ListItemStyled>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

MainItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  pathDirect: PropTypes.any,
};

export default MainItem;
