import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import Styles from "./SideNav.module.scss";
import avatarImg from "../../../assets/images/avatar.png";
import logo from "../../../assets/images/Logo.svg";
import dashboardIcon from "../../../assets/images/dashboard.svg";
import ordersIcon from "../../../assets/images/orders.svg";
import catalogueIcon from "../../../assets/images/catalogue.svg";
import notificationIcon from "../../../assets/images/notification.svg";
import preferencesIcon from "../../../assets/images/preferences.svg";
import accountDetailsIcon from "../../../assets/images/account-details.svg";
import myProfileIcon from "../../../assets/images/profile.svg";
import referAFriendIcon from "../../../assets/images/refer-a-friend.svg";
import logoutIcon from "../../../assets/images/logout.svg";
import helpIcon from "../../../assets/images/help.svg";
import selectedDashboardIcon from "../../../assets/images/selected-dashboard.svg";
import selectedOrdersIcon from "../../../assets/images/selected-order.svg";
import selectedCatalogueIcon from "../../../assets/images/selected-catalogue.svg";
import selectedNotificationIcon from "../../../assets/images/select-notification.svg";
import selectedPreferencesIcon from "../../../assets/images/select-preferences.svg";
import selectedAccountDetailsIcon from "../../../assets/images/select-account-details.svg";
import selectedMyProfileIcon from "../../../assets/images/select-profile.svg";
import selectedReferAFriendIcon from "../../../assets/images/select-refer-friend.svg";
import selectedLogoutIcon from "../../../assets/images/select-logout.svg";
import selectedHelpIcon from "../../../assets/images/select-help.svg";
import marketplaceIcon from "../../../assets/images/marketplace.svg";
import selectedMarketplaceIcon from "../../../assets/images/selected-marketplace.svg";
import invoiceIcon from "../../../assets/images/invoice.svg";
import selectedInvoiceIcon from "../../../assets/images/selected-invoice.svg";
import supplierIcon from "../../../assets/images/suppliers.svg";
import selectedSupplierIcon from "../../../assets/images/selected-suppliers.svg";
import moreIcon from "../../../assets/images/more.svg";
import selectedMoreIcon from "../../../assets/images/selected-more.svg";
import moreMyProfileIcon from "../../../assets/images/more-my-profile.svg";
import moreReferAFriendIcon from "../../../assets/images/more-refer-a-friend.svg";
import moreLogoutIcon from "../../../assets/images/more-logout.svg";
import moreHelpIcon from "../../../assets/images/more-help-circle.svg";
import moreAccountDetailsIcon from "../../../assets/images/more-acc-details.svg";
import morePreferencesIcon from "../../../assets/images/more-preferences.svg";
import { Avatar, Badge, Divider } from "@mui/material";
import { NavLink } from "../../../models/ISideNav";
import UserSwitch from "../userSwitch/UserSwitch";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "&.MuiTooltip-popper": {
    left: "168px !important",
    top: "-133px !important",
    maxWidth: "251px",
    width: "251px",
    "& .MuiTooltip-tooltip": {
      width: "100%",
      padding: "12px 0 20px !important",
      background: "#fff !important",
      boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 0.15)",
      borderRadius: "6px",
      border: "none !important",
    },
    "& .MuiTooltip-arrow": {
      width: "3.6em !important",
      height: "1.29em !important",
      left: "-49.9% !important",
      top: "33% !important",
      transform: "translate3d(98.5px, 0px, 0px) rotate(270deg) !important",
      "&:before": {
        background: "#fff !important",
      },
    },
  },
}));

const BadgeNotifications = styled(Badge)`
  .MuiBadge-badge {
    min-width: 5px;
    border-radius: 50%;
    background: #fff;
    color: #ec187b;
    font-size: 8px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    height: 16px;
    margin: 5px;
  }
`;

const AvatarContainer = styled("div")`
  position: relative;
  padding: 0 20px;
  z-index: 1;
  & .MuiAvatar-root {
    height: 53px;
    width: 53px;
    background: #4c862e;
  }
  .userName {
    color: #fff;
    font-family: "UrbanistLight";
    font-size: 16px;
    line-height: normal;
    margin-top: 16px;
    text-align: left;
  }
`;

const SideNav: React.FC<{ userType: string }> = ({ userType }) => {
  const [selected, setSelected] = useState("dashboard");
  const [open, setOpen] = useState(false);
  const navLinksSupplier: NavLink[] = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      selectedIcon: selectedDashboardIcon,
      link: "/",
      id: "dashboard",
    },
    {
      name: "Orders",
      icon: ordersIcon,
      selectedIcon: selectedOrdersIcon,
      link: "/orders",
      id: "orders",
    },
    {
      name: "Catalogue",
      icon: catalogueIcon,
      selectedIcon: selectedCatalogueIcon,
      link: "/catalogue",
      id: "catalogue",
    },
    {
      name: "Notification",
      icon: notificationIcon,
      selectedIcon: selectedNotificationIcon,
      link: "/notification",
      id: "notification",
    },
    {
      name: "Preferences",
      icon: preferencesIcon,
      selectedIcon: selectedPreferencesIcon,
      link: "/preferences",
      id: "preferences",
    },
    {
      name: "Account details",
      icon: accountDetailsIcon,
      selectedIcon: selectedAccountDetailsIcon,
      link: "/account-details",
      id: "account-details",
    },
    {
      name: "My profile",
      icon: myProfileIcon,
      selectedIcon: selectedMyProfileIcon,
      link: "/my-profile",
      id: "my-profile",
    },
    {
      name: "Refer a friend",
      icon: referAFriendIcon,
      selectedIcon: selectedReferAFriendIcon,
      link: "/refer-a-friend",
      id: "refer-a-friend",
    },
    {
      name: "Help & support",
      icon: helpIcon,
      selectedIcon: selectedHelpIcon,
      link: "/help-support",
      id: "help-support",
    },
    {
      name: "Logout",
      icon: logoutIcon,
      selectedIcon: selectedLogoutIcon,
      link: "/logout",
      id: "logout",
    },
  ];
  const navLinksBuyer: NavLink[] = [
    {
      name: "Dashboard",
      icon: dashboardIcon,
      selectedIcon: selectedDashboardIcon,
      link: "/",
      id: "dashboard",
    },
    {
      name: "Marketplace",
      icon: marketplaceIcon,
      selectedIcon: selectedMarketplaceIcon,
      link: "/marketplace",
      id: "marketplace",
    },
    {
      name: "Orders",
      icon: ordersIcon,
      selectedIcon: selectedOrdersIcon,
      link: "/orders",
      id: "orders",
    },
    {
      name: "Invoices",
      icon: invoiceIcon,
      selectedIcon: selectedInvoiceIcon,
      link: "/invoices",
      id: "invoices",
    },
    {
      name: "Suppliers",
      icon: supplierIcon,
      selectedIcon: selectedSupplierIcon,
      link: "/suppliers",
      id: "suppliers",
    },
    {
      name: "Notifications",
      icon: notificationIcon,
      selectedIcon: selectedNotificationIcon,
      link: "/notifications",
      id: "notifications",
    },
    {
      name: "More",
      icon: moreIcon,
      selectedIcon: selectedMoreIcon,
      link: "/more",
      id: "more",
    },
  ];
  const moreBuyerLinks: NavLink[] = [
    {
      name: "View profile",
      link: "/view-profile",
      id: "view-profile",
      icon: moreMyProfileIcon,
    },
    {
      name: "Preferences",
      link: "/preferences",
      id: "preferences",
      icon: morePreferencesIcon,
    },
    {
      name: "Refer a Friend",
      link: "/refer-a-friend",
      id: "refer-a-friend",
      icon: moreReferAFriendIcon,
    },
    {
      name: "Account details",
      link: "/account-details",
      id: "account-details",
      icon: moreAccountDetailsIcon,
    },
    {
      name: "Help & support",
      link: "/help-support",
      id: "help-support",
      icon: moreHelpIcon,
    },
    {
      name: "Logout",
      link: "/logout",
      id: "logout",
      icon: moreLogoutIcon,
    },
  ];

  const handleLinkClick = (id: string) => {
    setSelected(id);
  };

  const getNameInitials = (name: string) => {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return initials.substring(0, 2);
  };

  const username = "Aadila Hussain";
  const avatarInitials = getNameInitials(username);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const tooltipRef = useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        handleTooltipClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className={Styles.sidenavContainer}>
      <div className={Styles.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <AvatarContainer className={Styles.avatarContainer}>
        {avatarImg ? (
          <Avatar alt="user-name" src={avatarImg} data-testid="avatar" />
        ) : (
          <Avatar data-testid="avatar-initials">{avatarInitials}</Avatar>
        )}
        <div className="userName">{username}</div>
      </AvatarContainer>
      <UserSwitch data-testid="user-switch" />
      <Divider className={Styles.divider} />
      <div className={Styles.navLinks}>
        {(userType === "buyer" ? navLinksBuyer : navLinksSupplier).map(
          (eachLink) => (
            <>
              {eachLink.id === "notifications" ? (
                <div
                  className={`${Styles.link} ${
                    selected === eachLink.id ? Styles.selected : ""
                  }`}
                  key={eachLink.id}
                  onClick={() => handleLinkClick(eachLink.id)}
                  ref={tooltipRef}
                  data-testid={`nav-link-${eachLink.id}`}
                >
                  <BadgeNotifications
                    badgeContent={4}
                    data-testid="badge-notifications"
                  >
                    <img
                      src={
                        selected === eachLink.id
                          ? eachLink.selectedIcon
                          : eachLink.icon
                      }
                      alt={eachLink.name}
                    />
                  </BadgeNotifications>
                  <p>{eachLink.name}</p>
                </div>
              ) : (
                <div
                  className={`${Styles.link} ${
                    selected === eachLink.id ? Styles.selected : ""
                  }`}
                  key={eachLink.id}
                  onClick={() => handleLinkClick(eachLink.id)}
                  data-testid={`nav-link-${eachLink.id}`}
                >
                  <img
                    src={
                      selected === eachLink.id
                        ? eachLink.selectedIcon
                        : eachLink.icon
                    }
                    alt={eachLink.name}
                  />
                  <p>{eachLink.name}</p>
                  {eachLink.id === "more" && (
                    <HtmlTooltip
                      data-testid="more-tooltip"
                      arrow
                      className={Styles.moreTooltip}
                      title={
                        <>
                          {moreBuyerLinks.map((eachLink) => (
                            <div
                              data-testid={`more-link-${eachLink.id}`}
                              className={Styles.moreLink}
                              key={eachLink.id}
                              onClick={() => handleLinkClick(eachLink.id)}
                            >
                              <img src={eachLink.icon} alt={eachLink.name} />
                              <div>{eachLink.name}</div>
                            </div>
                          ))}
                        </>
                      }
                      open={open}
                    >
                      <button
                        data-testid="more-btn"
                        className={Styles.tooltipBtn}
                        onClick={handleTooltipOpen}
                        ref={tooltipRef}
                      >
                        {eachLink.name}
                      </button>
                    </HtmlTooltip>
                  )}
                </div>
              )}
              {eachLink.id === "my-profile" && (
                <Divider className={Styles.divider} />
              )}
            </>
          )
        )}
      </div>
    </div>
  );
};

export default SideNav;
