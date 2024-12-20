import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice"
import announcementSlice from "./announcement/announcementSlice"
import courseSlice from "./course/courseSlice"
import userSlice from "./user/userSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        announcement: announcementSlice,
        course: courseSlice,
        user: userSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;