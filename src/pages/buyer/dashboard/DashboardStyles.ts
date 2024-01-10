import { Button } from "@mui/material";
import { styled } from "@mui/system";

//theme usage in styled component
export const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: "white",
}));
