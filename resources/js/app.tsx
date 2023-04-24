import "./bootstrap";
import "../css/app.css";

import { hydrateRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from "@inertiajs/progress";
import React from "react";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title: string) => `${title} - ${appName}`,
    resolve: (name: string) => {
        const lastIndex = name.lastIndexOf("/");
        const dir = name.substring(0, lastIndex);
        const file = name.substring(lastIndex + 1);

        return lastIndex === -1
            ? import(`./Pages/${name}.tsx`)
            : import(`./Pages/${dir}/${file}.tsx`);
    },
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />);
    },
});

InertiaProgress.init({ color: "#4B5563" });
