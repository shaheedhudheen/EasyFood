import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header.js";
import { store } from "../../utils/store.js";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
