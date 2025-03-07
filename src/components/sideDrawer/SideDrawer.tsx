import React, { useEffect } from "react";
import { extendTheme } from "@mui/material/styles";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ChatList } from "../Chat/ChatList";
import logo from "../../assets/Smarketing.png";
import FeedPage from "../../pages/feedPage/Feed";
import { MyPosts } from "../../pages/userProfileScreen/MyPosts";
import { AccountSettings } from "../../pages/userProfileScreen/AccountSettings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../context/AuthContext";

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window ? window() : undefined;
  const { logout } = useAuth();

  useEffect(() => {
    if (router.pathname === "/logout") {
      logout();
    }
  }, [router.pathname, logout]);

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Blog",
    },
    {
      segment: "feed",
      title: "תוכן",
      icon: <HomeOutlinedIcon />,
    },
    {
      segment: "chats",
      title: "צאטים",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Settings",
    },
    {
      segment: "settings",
      title: "הגדרות",
      icon: <MenuOutlinedIcon />,
      children: [
        {
          segment: "my-posts",
          title: "הפוסטים שלי",
          icon: <PersonOutlinedIcon />,
        },
        {
          segment: "account",
          title: "הגדרות חשבון",
          icon: <ContactsOutlinedIcon />,
        },
      ],
    },
    {
      kind: "divider",
    },
    {
      segment: "logout",
      title: "התנתקות",
      icon: <LogoutIcon />,
    },
  ];

  const demoTheme = extendTheme({
    colorSchemes: { light: true, dark: true },
    colorSchemeSelector: "class",
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
      return {
        pathname,
        searchParams: new URLSearchParams(),
        navigate: (path: string | URL) => setPathname(String(path)),
      };
    }, [pathname]);

    return router;
  }

  // Update the route mapping
  const routeComponents: { [key: string]: React.ReactNode } = {
    "/settings/my-posts": <MyPosts />,
    "/settings/account": <AccountSettings />,
    "/feed": <FeedPage posts={[]} />,
    "/chats": <ChatList currentUserId="Adam" onSelectUser={() => {}} />,
  };

  const CurrentComponent = routeComponents[router.pathname];

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={null}
    >
      <DashboardLayout
        branding={null}
        slots={{
          appTitle: () => (
            <div>
              <img src={logo} alt="App Logo" style={{ height: "40px" }} />
            </div>
          ),
        }}
      >
        <PageContainer>{CurrentComponent}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
