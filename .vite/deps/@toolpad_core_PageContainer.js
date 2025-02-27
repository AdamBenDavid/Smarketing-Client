import {
  Link,
  getItemPath,
  getItemTitle,
  matchPath
} from "./chunk-3D5G2EDW.js";
import {
  NavigationContext,
  RouterContext,
  useSlotProps_default
} from "./chunk-GYDUGOEP.js";
import {
  Box_default,
  Breadcrumbs_default,
  Container_default,
  Link_default,
  Stack_default,
  Typography_default
} from "./chunk-EJXXTTNW.js";
import "./chunk-W7URMTKP.js";
import "./chunk-UP6LQVYV.js";
import "./chunk-24UIFBOL.js";
import {
  styled_default
} from "./chunk-LQOHNGHB.js";
import {
  require_prop_types
} from "./chunk-R2LMYVXF.js";
import {
  require_jsx_runtime
} from "./chunk-RZSASJON.js";
import "./chunk-2KHBIA62.js";
import "./chunk-XWXVP6GN.js";
import "./chunk-Q6DFBYTI.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import "./chunk-IYOPMW3U.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@toolpad/core/PageContainer/PageContainer.js
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@toolpad/core/PageContainer/PageHeader.js
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@toolpad/core/useActivePage/useActivePage.js
var React = __toESM(require_react());
function useActivePage() {
  const navigationContext = React.useContext(NavigationContext);
  const routerContext = React.useContext(RouterContext);
  const pathname = (routerContext == null ? void 0 : routerContext.pathname) ?? "/";
  const activeItem = matchPath(navigationContext, pathname);
  const rootItem = matchPath(navigationContext, "/");
  return React.useMemo(() => {
    if (!activeItem) {
      return null;
    }
    const breadcrumbs = [];
    if (rootItem) {
      breadcrumbs.push({
        title: getItemTitle(rootItem),
        path: "/"
      });
    }
    const segments = pathname.split("/").filter(Boolean);
    let prefix = "";
    for (const segment of segments) {
      const path = `${prefix}/${segment}`;
      prefix = path;
      const item = matchPath(navigationContext, path);
      if (!item) {
        continue;
      }
      const itemPath = getItemPath(navigationContext, item);
      const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
      if ((lastCrumb == null ? void 0 : lastCrumb.path) !== itemPath) {
        breadcrumbs.push({
          title: getItemTitle(item),
          path: itemPath
        });
      }
    }
    return {
      title: getItemTitle(activeItem),
      path: getItemPath(navigationContext, activeItem),
      breadcrumbs
    };
  }, [activeItem, rootItem, pathname, navigationContext]);
}

// node_modules/@toolpad/core/PageContainer/PageHeaderToolbar.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var PageHeaderToolbarRoot = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  // Ensure the toolbar is always on the right side, even after wrapping
  marginLeft: "auto"
}));
function PageHeaderToolbar(props) {
  return (0, import_jsx_runtime.jsx)(PageHeaderToolbarRoot, {
    ...props
  });
}
true ? PageHeaderToolbar.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node
} : void 0;

// node_modules/@toolpad/core/PageContainer/PageHeader.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var PageContentHeader = styled_default("div")(({
  theme
}) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(2)
}));
function PageHeader(props) {
  var _a, _b;
  const {
    breadcrumbs,
    title
  } = props;
  const activePage = useActivePage();
  const resolvedBreadcrumbs = breadcrumbs ?? (activePage == null ? void 0 : activePage.breadcrumbs) ?? [];
  const resolvedTitle = title ?? (activePage == null ? void 0 : activePage.title) ?? "";
  const ToolbarComponent = ((_a = props == null ? void 0 : props.slots) == null ? void 0 : _a.toolbar) ?? PageHeaderToolbar;
  const toolbarSlotProps = useSlotProps_default({
    elementType: ToolbarComponent,
    ownerState: props,
    externalSlotProps: (_b = props == null ? void 0 : props.slotProps) == null ? void 0 : _b.toolbar,
    additionalProps: {}
  });
  return (0, import_jsx_runtime2.jsxs)(Stack_default, {
    children: [(0, import_jsx_runtime2.jsx)(Breadcrumbs_default, {
      "aria-label": "breadcrumb",
      children: resolvedBreadcrumbs ? resolvedBreadcrumbs.map((item, index) => {
        return item.path ? (0, import_jsx_runtime2.jsx)(Link_default, {
          component: Link,
          underline: "hover",
          color: "inherit",
          href: item.path,
          children: getItemTitle(item)
        }, index) : (0, import_jsx_runtime2.jsx)(Typography_default, {
          color: "text.primary",
          children: getItemTitle(item)
        }, index);
      }) : null
    }), (0, import_jsx_runtime2.jsxs)(PageContentHeader, {
      children: [resolvedTitle ? (0, import_jsx_runtime2.jsx)(Typography_default, {
        variant: "h4",
        children: resolvedTitle
      }) : null, (0, import_jsx_runtime2.jsx)(ToolbarComponent, {
        ...toolbarSlotProps
      })]
    })]
  });
}
true ? PageHeader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The breadcrumbs of the page. Leave blank to use the active page breadcrumbs.
   */
  breadcrumbs: import_prop_types2.default.arrayOf(import_prop_types2.default.shape({
    path: import_prop_types2.default.string,
    title: import_prop_types2.default.string.isRequired
  })),
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types2.default.shape({
    toolbar: import_prop_types2.default.shape({
      children: import_prop_types2.default.node
    }).isRequired
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types2.default.shape({
    toolbar: import_prop_types2.default.elementType
  }),
  /**
   * The title of the page. Leave blank to use the active page title.
   */
  title: import_prop_types2.default.string
} : void 0;

// node_modules/@toolpad/core/PageContainer/PageContainer.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function PageContainer(props) {
  const {
    children,
    breadcrumbs,
    slots,
    slotProps,
    title,
    ...rest
  } = props;
  const PageHeaderSlot = (slots == null ? void 0 : slots.header) ?? PageHeader;
  return (0, import_jsx_runtime3.jsx)(Container_default, {
    ...rest,
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      ...rest.sx
    },
    children: (0, import_jsx_runtime3.jsxs)(Stack_default, {
      sx: {
        flex: 1,
        my: 2
      },
      spacing: 2,
      children: [(0, import_jsx_runtime3.jsx)(PageHeaderSlot, {
        title,
        breadcrumbs,
        ...slotProps == null ? void 0 : slotProps.header
      }), (0, import_jsx_runtime3.jsx)(Box_default, {
        sx: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        },
        children
      })]
    })
  });
}
true ? PageContainer.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The breadcrumbs of the page. Leave blank to use the active page breadcrumbs.
   */
  breadcrumbs: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
    path: import_prop_types3.default.string,
    title: import_prop_types3.default.string.isRequired
  })),
  /**
   * @ignore
   */
  children: import_prop_types3.default.node,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types3.default.shape({
    header: import_prop_types3.default.shape({
      breadcrumbs: import_prop_types3.default.arrayOf(import_prop_types3.default.shape({
        path: import_prop_types3.default.string,
        title: import_prop_types3.default.string.isRequired
      })),
      slotProps: import_prop_types3.default.shape({
        toolbar: import_prop_types3.default.object.isRequired
      }),
      slots: import_prop_types3.default.shape({
        toolbar: import_prop_types3.default.elementType
      }),
      title: import_prop_types3.default.string
    }).isRequired
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types3.default.shape({
    header: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object]),
  /**
   * The title of the page. Leave blank to use the active page title.
   */
  title: import_prop_types3.default.string
} : void 0;
export {
  PageContainer,
  PageHeader,
  PageHeaderToolbar
};
//# sourceMappingURL=@toolpad_core_PageContainer.js.map
