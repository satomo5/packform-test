/** @jsxImportSource @emotion/react */
import React from "react";
import Navbar from "../organisms/Navbar";
import { Container } from "../../assets/styles/common/Layout";
import { SerializedStyles } from "@emotion/react";
import Sidebar from "../organisms/Sidebar";
import { SidebarProvider } from "../../hooks/useSidebar";
import LayoutContainer from "../atoms/LayoutContainer";

/**
 * Layout is a simple component that wraps the children with a navbar.
 * This component is used as a template for other components such as Home and NetAssets.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The children to be wrapped.
 * @param {SerializedStyles} [props.style] - Additional styling for the component.
 * @returns {JSX.Element} The layout component.
 */
function Layout({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: SerializedStyles;
}) {
  return (
    <SidebarProvider>
      <LayoutContainer>
        <Sidebar />
        {/* The navbar */}
        <Navbar />

        {/* The container for children */}
        <div css={[Container, style]}>{children}</div>
      </LayoutContainer>
    </SidebarProvider>
  );
}

export default Layout;
