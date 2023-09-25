import { useMediaQuery } from "./useMediaQuery";

export default function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 35.9375em)");
}
