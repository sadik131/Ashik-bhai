import { configureStore } from "@reduxjs/toolkit";
import memberSlice from "./member/memberSlice"
import testimonialSlice from "./testimonial/testimonialSlice"
import userSlice from "./user/userSlice"

export const store = configureStore({
    reducer: {
        member: memberSlice,
        testimonial: testimonialSlice,
        user: userSlice,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;