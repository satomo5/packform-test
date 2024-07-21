import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import useBreakpoint from "./useBreakpoint";

// Define the context type
interface SidebarContextType {
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the ThemeContext with default values
export const SidebarContext = createContext<SidebarContextType | null>(null);

// Sidebar component
interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    if (breakpoint === "xl") {
      setToggleSidebar(true);
    } else {
      setToggleSidebar(false);
    }
  }, [breakpoint]);

  return (
    <SidebarContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use the ThemeContext
// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useTheme must be used within a SidebarProvider");
  }
  return context;
};
