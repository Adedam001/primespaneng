import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";
import { AboutPage } from "@/pages/AboutPage";
import { CaseStudyDetailPage } from "@/pages/CaseStudyDetailPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ServiceDetailPage } from "@/pages/ServiceDetailPage";
import { ServicesHubPage } from "@/pages/ServicesHubPage";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Layout />
      <Toaster position="bottom-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesHubPage,
});
const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$id",
  component: ServiceDetailPage,
});
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});
const caseStudyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio/$id",
  component: CaseStudyDetailPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  serviceDetailRoute,
  portfolioRoute,
  caseStudyRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
