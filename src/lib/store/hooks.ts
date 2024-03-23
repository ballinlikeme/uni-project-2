import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, AppStore } from "./store";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
