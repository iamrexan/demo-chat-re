import { Home, Chat } from "../pages";

const routes = [
  {
    exact: true,
    path: "/",
    name: "home",
    component: Home,
  },
  {
    exact: true,
    path: "/chat",
    name: "chat",
    component: Chat,
    innerRoute: [
      {
        exact: true,
        path: ":contactId",
        name: "Message",
        component: Chat,
      },
      {
        exact: true,
        path: "contact/add",
        name: "add contact",
        component: Chat,
      },
      {
        exact: true,
        path: "contact/edit/:contactId",
        name: "edit contact",
        component: Chat,
      },
    ],
  },
];

export default routes;
