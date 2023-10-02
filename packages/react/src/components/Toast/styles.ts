import { keyframes } from "@stitches/react";
import { styled } from "../../styles";
import * as Toast from "@radix-ui/react-toast";


const VIEWPORT_PADDING = 25;

const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
  });
  
  const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    to: { transform: 'translateX(0)' },
  });
  
  const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  });



export const ToastContainer = styled(Toast.Provider, {});

export const ToastViewport = styled(Toast.Viewport, {
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: VIEWPORT_PADDING,
    gap: 10,
    width: "24,375rem",
    height: "$20",
    maxWidth: '100vw',
    margin: 0,
    listStyle: 'none',
    zIndex: 2147483647,
    outline: 'none',
});


export const ToastRoot = styled(Toast.Root, {
  backgroundColor: "$gray600",
  width: "320px",
  height: "82px",
  padding: "12px 20px",
  border: "1px solid $gray500",
  borderRadius: "$md",

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

export const ToastTitle = styled(Toast.Title, {
  color: "$white",
  fontSize: "$lg",
  fontWeight: "$bold",
  fontFamily: "$default",
});

export const ToastDescription = styled(Toast.Description, {
  color: "$gray200",
  fontSize: "$md",
  fontWeight: "$regular",
  fontFamily: "$default",
});

export const ToastAction = styled(Toast.Action, {});

export const ToastClose = styled(Toast.Close, {
  backgroundColor: "transparent",
  border: "none",
  color: "$gray200",
  fontSize: "$xl",

  "&:hover": {
    cursor: "pointer",
    color: "$gray100",
  },
});


export const TitleWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between'
})
