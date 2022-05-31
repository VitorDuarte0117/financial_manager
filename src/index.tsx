import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
    models: {
        transaction: Model,
    },
    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: "Website Freelancer",
                    type: "deposit",
                    category: "Dev",
                    amount: 60000,
                    createdAt: new Date("2022-02-12 09:00:00"),
                },
                {
                    id: 2,
                    title: "Rent",
                    type: "withdraw",
                    category: "Home",
                    amount: 60,
                    createdAt: new Date("2022-22-12 4:00:00"),
                },
            ],
        });
    },
    routes() {
        this.namespace = "api";

        this.get("/transactions", () => {
            return this.schema.all("transaction");
        });
        this.post("/transactions", (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.create("transaction", data);
        });
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
