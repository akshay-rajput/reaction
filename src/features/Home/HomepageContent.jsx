import React from "react";
import HomeCounter from "./HomeCounter";

export default function HomepageContent() {
    return (
        <div className="template-intro">
            <h2 className="text-4xl font-semibold text-gray-500 mb-4">
                Reaction
            </h2>
            <p className="text-lg text-center font-medium mb-2">
                A quick starter template for react.
            </p>
            <p className="text-md text-center font-medium mb-2">
                Includes{" "}
                <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    tailwindCSS
                </a>
                , &nbsp;
                <a
                    href="https://github.com/remix-run/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    react-router-v6
                </a>
                , &nbsp;
                <a
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    redux-toolkit
                </a>
                &nbsp;and uses&nbsp;
                <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    vite
                </a>{" "}
                as a build tool.
            </p>
        
            {/* counter */}
            <HomeCounter />
        </div>
    );
}
