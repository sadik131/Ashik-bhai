import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, deleteApi, getCourseByIdApi, getDatasApi, updateApi } from "./courseApi";
import { Course, CreateCourse } from "@/app";

// fetch all courses
export const fetchCoursetAsync = createAsyncThunk<Course[]>(
    "course/getAllDataApi",
    async (): Promise<Course[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// fetch course by id
export const fetchCourseByIdAsync = createAsyncThunk<Course, { id: string }>(
    "course/getCourseByIdApi",
    async ({ id }): Promise<Course> => {
        const response = await getCourseByIdApi(id);
        return response.data;
    }
);

// create course
export const createCourseAsync = createAsyncThunk<Course, CreateCourse>(
    "course/createCourseApi",
    async (data): Promise<Course> => {
        const response = await createApi(data);
        return response.data;
    }
);

// update course
export const updateCourseAsyncAsync = createAsyncThunk<Course, { id: string, update: CreateCourse }>(
    "course/updateCourseApi",
    async ({ update, id }): Promise<Course> => {
        const response = await updateApi({ update, id });
        return response.data;
    }
);

// delete course
export const deleteCourseAsync = createAsyncThunk<Course, { id: string }>(
    "course/deleteApi",
    async ({ id }): Promise<Course> => {
        const response = await deleteApi(id);
        return response.data;
    }
);

const courseSlice = createSlice({
    name: "course",
    initialState: {
        courses: [] as Course[], 
        course: null as Course | null, 
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all courses
            .addCase(fetchCoursetAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCoursetAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.courses = action.payload;
            })
            .addCase(fetchCoursetAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch courses";
            })
            // fetch course by id
            .addCase(fetchCourseByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCourseByIdAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.course = action.payload;
            })
            .addCase(fetchCourseByIdAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch course by ID";
            })
            // create course
            .addCase(createCourseAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createCourseAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.courses.push(action.payload);
            })
            .addCase(createCourseAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to create course";
            })
            // update course
            .addCase(updateCourseAsyncAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateCourseAsyncAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.courses.findIndex(i => i.id === action.payload.id);
                if (index !== -1) {
                    state.courses[index] = action.payload;
                }
            })
            .addCase(updateCourseAsyncAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update course";
            })
            // delete course
            .addCase(deleteCourseAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteCourseAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.courses = state.courses.filter(del => del.id !== action.payload.id);
            })
            .addCase(deleteCourseAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete course";
            });
    },
});

export default courseSlice.reducer;
