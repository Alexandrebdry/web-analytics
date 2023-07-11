import HomeView from "@/views/HomeView";
import NotFound from "@/views/errors/NotFoundViews";
import {createRoutesFromElements, Route, Routes} from "react-router";
import {Suspense} from "react";
import CompetancesView from "@/views/CompetancesView";
import ServicesView from "@/views/ServicesView";
import AProposView from "@/views/AProposView";
import ContactView from "@/views/ContactView";
import MentionLegalesView from "@/views/MentionLegalesView";
import {createBrowserRouter, ScrollRestoration} from "react-router-dom";


const useRoutes = () => {
    const routes = [
        {
            name:'home',
            path: '/',
            element:
                <HomeView/>
        },
        {
          name : 'competences',
          path : '/competences',
          element: <CompetancesView/>
        },
        {
          name: 'services',
          path: '/services',
          element: <ServicesView/>
        },
        {
          name: 'a-propos',
          path: '/a-propos',
          element: <AProposView/>
        },
        {
          name: 'contact',
          path: '/contact',
          element : <ContactView />
        },
        {
          name:'mention-legales',
          path: '/mentions-legales',
          element : <MentionLegalesView/>
        },
        {
            name:'not-found',
            path: '*',
            element:
                <NotFound/>
        }
    ] ;

    return routes.map((route) => {
        return  <Route key={route.name} {...route} /> ;
    }) ;
}

export default function Router() {
    const routes = useRoutes() ;

    return (
        <Suspense>
            <Routes onUpdate={() => window.scrollTo(0, 0)} >
                {
                    routes.map(route=>route)
                }
            </Routes>
        </Suspense>

    )
}