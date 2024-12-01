import { cva } from "class-variance-authority";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

const classes = cva(
  "px-6 h-11 rounded-xl gap-1 flex items-center font-medium text-sm",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-text-whitePrimary",
        secondary: "bg-secondary-50 text-text-blackPrimary",
        tertiary: "bg-tertiary-700 text-text-whitePrimary",
      },
      size: {
        sm: "h-10",
      },
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary" | "tertiary";
    size?: "sm";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    variant,
    className,
    size,
    icon,
    children,
    iconPosition = "left",
    ...otherProps
  } = props;
  return (
    <button className={classes({ variant, size, className })} {...otherProps}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}