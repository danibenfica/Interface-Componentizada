import React from 'react';
import { ResetCss } from "./global/resetcss";
import GithubProvider from "./providers/github-provider";

import App from "./App";

function Providers() {
    return ( 
        <main>
         <GithubProvider>
            <ResetCss />
            <App />
         </GithubProvider>
        </main>
         );
};

export default Providers;
