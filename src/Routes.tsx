// src/routes.tsx
import React, { lazy } from 'react';
import { RouteObject } from 'react-router';

// Charge automatiquement toutes les pages du dossier /pages
const pages = import.meta.glob('./pages/*.tsx');

const routes: RouteObject[] = Object.keys(pages)
  .map((filePath) => {
    const match = filePath.match(/\.\/pages\/(.*)\.tsx$/);
    if (!match) return null;
    const pageName = match[1];

    // Définir le chemin : "Home" devient la racine, les autres en minuscule
    const path = pageName.toLowerCase() === 'home' ? '/' : `/${pageName.toLowerCase()}`;

    return {
      path,
      // Utilisation du lazy pour le chargement dynamique
      element: React.createElement(
        lazy(pages[filePath] as () => Promise<{ default: React.ComponentType<unknown> }>)
      ),
    } as RouteObject;
  })
  .filter((route): route is RouteObject => route !== null);

// Ajout de la route 404 (catch-all)
// Crée ou importe une page NotFound dans ton dossier /pages
const NotFound = lazy(() => import('./pages/NotFound'));

routes.push({
  path: '*',
  element: <NotFound />,
});

export default routes;
