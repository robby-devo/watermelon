import React from "react";
import Modal, { ModalProps, modalClasses } from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";

export interface DrawerProps extends Omit<ModalProps, "children"> {
  children: React.ReactNode;
  title: string;
  size?: number | string;
  position?: "left" | "right" | "top" | "bottom";
  width?: number | string;
}

export default function Drawer({
  children,
  title,
  position = "left",
  size = "clamp(256px, 30vw, 169px)",
  sx,
  width,
  ...props
}: DrawerProps) {
  return (
    <Modal
      data-testid="drawer"
      keepMounted
      sx={[
        {
          transitionProperty: "visibility",
          transitionDelay: props.open ? "0s" : "300ms",
          [`& .${modalClasses.backdrop}`]: {
            opacity: props.open ? 1 : 0,
            transition: "opacity 0.3s ease",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Sheet
        sx={{
          width: `${width}px !important`,
          padding: "0",
          boxSizing: "border-box",
          position: "fixed",
          overflow: "auto",
          ...(position === "left" && {
            left: 0,
            transform: props.open ? "translateX(0)" : "translateX(-100%)",
          }),
          ...(position === "right" && {
            right: 0,
            transform: props.open ? "translateX(0)" : "translateX(100%)",
          }),
          ...(position === "top" && {
            top: 0,
            transform: props.open ? "translateY(0)" : "translateY(-100%)",
          }),
          ...(position === "bottom" && {
            bottom: 0,
            transform: props.open ? "translateY(0)" : "translateY(100%)",
          }),
          height: position.match(/(left|right)/) ? "100%" : size,
          boxShadow: "md",
          transition: "transform 0.3s ease",
        }}
      >
        {children}
      </Sheet>
    </Modal>
  );
}
