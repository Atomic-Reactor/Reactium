/** generated by createManifest.js **/
module.exports = {
    get: () => {
        return {
            allActions: {
                Test: require("components/Test/actions").default,
                Router: require("reactium-core/components/Router/actions")
                    .default,
                Toolkit: require("reactium-core/components/Toolkit/actions")
                    .default
            },
            allActionTypes: {
                Test: require("components/Test/actionTypes").default,
                Router: require("reactium-core/components/Router/actionTypes")
                    .default,
                Toolkit: require("reactium-core/components/Toolkit/actionTypes")
                    .default
            },
            allReducers: {
                Test: require("components/Test/reducers").default,
                Router: require("reactium-core/components/Router/reducers")
                    .default,
                Toolkit: require("reactium-core/components/Toolkit/reducers")
                    .default
            },
            allInitialStates: {
                Test: require("components/Test/state").default,
                Router: require("reactium-core/components/Router/state")
                    .default,
                Toolkit: require("reactium-core/components/Toolkit/state")
                    .default
            },
            allRoutes: {
                About: require("components/Demo/Site/Pages/About/route")
                    .default,
                Catering: require("components/Demo/Site/Pages/Catering/route")
                    .default,
                Contact: require("components/Demo/Site/Pages/Contact/route")
                    .default,
                Home: require("components/Demo/Site/Pages/Home/route").default,
                Menu: require("components/Demo/Site/Pages/Menu/route").default,
                Test: require("components/Test/route").default,
                Toolkit: require("reactium-core/components/Toolkit/route")
                    .default
            },
            allServices: {
                Test: require("components/Test/services").default,
                Toolkit: require("reactium-core/components/Toolkit/services")
                    .default
            }
        };
    },
    list: () => {
        return {
            allActions: {
                type: "actions",
                imports: [
                    "components/Test/actions",
                    "reactium-core/components/Router/actions",
                    "reactium-core/components/Toolkit/actions"
                ]
            },
            allActionTypes: {
                type: "actionTypes",
                imports: [
                    "components/Test/actionTypes",
                    "reactium-core/components/Router/actionTypes",
                    "reactium-core/components/Toolkit/actionTypes"
                ]
            },
            allReducers: {
                type: "reducers",
                imports: [
                    "components/Test/reducers",
                    "reactium-core/components/Router/reducers",
                    "reactium-core/components/Toolkit/reducers"
                ]
            },
            allInitialStates: {
                type: "state",
                imports: [
                    "components/Test/state",
                    "reactium-core/components/Router/state",
                    "reactium-core/components/Toolkit/state"
                ]
            },
            allRoutes: {
                type: "route",
                imports: [
                    "components/Demo/Site/Pages/About/route",
                    "components/Demo/Site/Pages/Catering/route",
                    "components/Demo/Site/Pages/Contact/route",
                    "components/Demo/Site/Pages/Home/route",
                    "components/Demo/Site/Pages/Menu/route",
                    "components/Test/route",
                    "reactium-core/components/Toolkit/route"
                ]
            },
            allServices: {
                type: "services",
                imports: [
                    "components/Test/services",
                    "reactium-core/components/Toolkit/services"
                ]
            }
        };
    }
};
