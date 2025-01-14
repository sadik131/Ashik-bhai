import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, deleteApi, getDatasApi, updateApi } from "./testimonialApi";
import { CreateTestimonial, TestimonialProp } from "@/app";

// fetch all Testimonials
export const fetchTestimonialstAsync = createAsyncThunk<TestimonialProp[]>(
    "testimonial/getDatasApi",
    async (): Promise<TestimonialProp[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// create testimonials
export const createTestimonialsAsync = createAsyncThunk<TestimonialProp, CreateTestimonial>(
    "testimonial/createApi",
    async (data): Promise<TestimonialProp> => {
        const response = await createApi(data);
        return response.data;
    }
);

// update testimonials
export const updateTestimonialsAsync = createAsyncThunk<TestimonialProp, { update: TestimonialProp; id: string }>(
    "testimonial/updateApi",
    async ({ update, id }): Promise<TestimonialProp> => {
        const response = await updateApi({ update, id });
        return response.data;
    }
);

// delete testimonials
export const deleteTestimonialsAsync = createAsyncThunk<TestimonialProp, { id: string }>(
    "testimonial/deleteApi",
    async ({ id }): Promise<TestimonialProp> => {
        const response = await deleteApi(id);
        return response.data;
    }
);

const testimoniallice = createSlice({
    name: "testimonial",
    initialState: {
        Testimonials: [] as TestimonialProp[], 
        // course: null as Course | null, 
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all testimonial
            .addCase(fetchTestimonialstAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTestimonialstAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Testimonials = action.payload;
            })
            .addCase(fetchTestimonialstAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch testimonial";
            })

            // create testimonial
            .addCase(createTestimonialsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createTestimonialsAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Testimonials.push(action.payload);
            })
            .addCase(createTestimonialsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to create course";
            })

            // update testimonial
            .addCase(updateTestimonialsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateTestimonialsAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.Testimonials.findIndex(i => i._id === action.payload._id);
                if (index !== -1) {
                    state.Testimonials[index] = action.payload;
                }
            })
            .addCase(updateTestimonialsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update course";
            })
            
            // delete testimonial
            .addCase(deleteTestimonialsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteTestimonialsAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Testimonials = state.Testimonials.filter(del => del._id !== action.payload._id);
            })
            .addCase(deleteTestimonialsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete course";
            });
    },
});

export default testimoniallice.reducer;
