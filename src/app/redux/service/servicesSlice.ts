import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, deleteApi, getDatasApi, updateApi } from "./servicesApi";
import { CreateServiceData, ServiceData } from "@/app";

// fetch all services
export const fetchServicestAsync = createAsyncThunk<ServiceData[]>(
    "testimonial/getDatasApi",
    async (): Promise<ServiceData[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// create services
export const createServicesAsync = createAsyncThunk<ServiceData, CreateServiceData>(
    "services/createApi",
    async (data): Promise<ServiceData> => {
        const response = await createApi(data);
        return response.data;
    }
);

// update services
export const updateServicesAsync = createAsyncThunk<ServiceData, { update: ServiceData }>(
    "services/updateApi",
    async (update): Promise<ServiceData> => {
        const response = await updateApi(update);
        return response.data;
    }
);

// delete services
export const deleteServicesAsync = createAsyncThunk<ServiceData, { id: string }>(
    "services/deleteApi",
    async ({ id }): Promise<ServiceData> => {
        const response = await deleteApi(id);
        return response.data;
    }
);

const testimoniallice = createSlice({
    name: "services",
    initialState: {
        Services: [] as ServiceData[],
        // course: null as Course | null, 
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all testimonial
            .addCase(fetchServicestAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchServicestAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Services = action.payload;
            })
            .addCase(fetchServicestAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch testimonial";
            })

            // create testimonial
            .addCase(createServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Services.push(action.payload);
            })
            .addCase(createServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to create course";
            })

            // update testimonial
            .addCase(updateServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.Services.findIndex(i => i.id === action.payload.id);
                if (index !== -1) {
                    state.Services[index] = action.payload;
                }
            })
            .addCase(updateServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update course";
            })

            // delete testimonial
            .addCase(deleteServicesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteServicesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.Services = state.Services.filter(del => del.id !== action.payload.id);
            })
            .addCase(deleteServicesAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete course";
            });
    },
});

export default testimoniallice.reducer;
