import React from "react";
import Menuitems from "./MenuItems";
import { useLocation } from "react-router";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import MainItem from "./MainItem/mainItem";

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            if (!item.sub) {
              return (
                <NavItem item={item} key={item.id} pathDirect={pathDirect} />
              );
            } else {
              return (
                <MainItem
                  item={item}
                  key={item.id}
                  pathDirect={pathDirect}
                  subs={item.sub}
                />
              );
            }
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
