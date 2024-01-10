import React from "react";
import styles from "./UserSwitch.module.scss";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import { styled } from "@mui/system";

const TabsContainer = styled(Tabs)({
  "--primaryPink": "#ec187b",
  "--teritaryGray1": "#383434",
  "--primaryWhite": "#fff",
  height: "22px",
  borderRadius: "4px",
  margin: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",

  "& .MuiTabList-root": {
    height: "22px",
    borderRadius: "6px",
    padding: "0",
    minWidth: "65px",
    background: "transparent",
    width: "100%",

    "& .MuiTab-root": {
      transition: "all ease 0.3s",
      minHeight: "20px",
      border: "none",
      color: "var(--teritaryGray1)",
      textAlign: "center",
      fontSize: "10px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      margin: "1px",
      flex: "1",
      borderRadius: "4px",

      "&:hover": {
        background: "var(--primaryPink)",
      },

      "&.Joy-selected": {
        background: "var(--primaryPink)",
        color: "var(--primaryWhite)",
      },
    },
  },
});
const UserSwitch = () => {
  const [index, setIndex] = React.useState(1);
  const handleTabChange = (event: any, newValue: any) => {
    setIndex(newValue);
  };
  return (
    <TabsContainer
      defaultValue={1}
      value={index}
      className={styles.userswitchContainer}
      onChange={handleTabChange}
    >
      <TabList>
        <Tab value={1}> Buyer</Tab>
        <Tab value={2}>Supplier</Tab>
      </TabList>
    </TabsContainer>
  );
};

export default UserSwitch;
