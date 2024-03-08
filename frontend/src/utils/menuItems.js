import { dashboard, expenses, transactions, trend } from "../utils/Icons";
export const menuItems = [
  {
    id: 1,
    title: "About Us",
    icon: <i class="fa-solid fa-info"></i>,
    link: "/aboutus",
  },
  {
    id: 2,
    title: "Dashboard",
    icon: dashboard,
    link: "/dashboard",
  },
  {
    id: 3,
    title: "View Transactions",
    icon: transactions,
    link: "/dashboard",
  },
  {
    id: 4,
    title: "Incomes",
    icon: trend,
    link: "/dashboard",
  },
  {
    id: 5,
    title: "Expenses",
    icon: expenses,
    link: "/expense",
  },
  {
    id: 6,
    title: "Blogs",
    icon: <i class="fa-solid fa-blog"></i>,
    link: "/blogs",
  },
  {
    id: 7,
    title: "Write Blog",
    icon: <i class="fa-solid fa-pen"></i>,
    link: "/write-blog",
  },
];
