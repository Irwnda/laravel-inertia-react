import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import React from "react";

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            const lastIndex = name.lastIndexOf("/");
            const dir = name.substring(0, lastIndex);
            const file = name.substring(lastIndex + 1);

            return lastIndex === -1
                ? import(`./Pages/${name}.tsx`)
                : import(`./Pages/${dir}/${file}.tsx`);
        },
        setup: ({ App, props }) => <App {...props} />,
    })
);
