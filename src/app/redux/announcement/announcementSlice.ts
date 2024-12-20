import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, deleteApi, getDataByIdApi, getDatasApi, updateApi } from "./announcementApi";
import { AnnouncementData } from "@/app";
import toast from "react-hot-toast";

// fetch all announcements
export const fetchAnnouncementAsync = createAsyncThunk<AnnouncementData[]>(
    "announcement/getAllDataApi",
    async (): Promise<AnnouncementData[]> => {
        const response = await getDatasApi();
        return response.data;
    }
);

// fetch announcement by id
export const fetchAnnouncementByIdAsync = createAsyncThunk<AnnouncementData, { id: string }>(
    "announcement/getDataByIdApi",
    async ({ id }): Promise<AnnouncementData> => {
        const response = await getDataByIdApi(id);
        return response.data;
    }
);

// create announcement
export const createAnnouncementAsync = createAsyncThunk<AnnouncementData, AnnouncementData>(
    "announcement/createAnnouncementApi",
    async (data): Promise<AnnouncementData> => {
        const response = await createApi(data);
    //    toast.success("Create..")
        return response.data;
    }
);

// update announcement
export const updateAnnouncementAsyncAsync = createAsyncThunk<AnnouncementData, { id: string, update: AnnouncementData }>(
    "announcement/updateAnnouncementApi",
    async ({ update, id }): Promise<AnnouncementData> => {
        const response = await updateApi({ update, id });
        return response.data;
    }
);

// delete announcement
export const deleteAnnouncementAsync = createAsyncThunk<AnnouncementData, { id: string }>(
    "announcement/deleteApi",
    async ({ id }): Promise<AnnouncementData> => {
        const response = await deleteApi(id);
        return response.data;
    }
);

const announcementSlice = createSlice({
    name: "announcement",
    initialState: {
        announcements: [] as AnnouncementData[], // All announcements
        announcement: null as AnnouncementData | null, // Single announcement by ID
        status: "idle" as "idle" | "loading" | "success" | "failed",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetch all announcements
            .addCase(fetchAnnouncementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAnnouncementAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.announcements = action.payload;
            })
            .addCase(fetchAnnouncementAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch announcements";
            })
            // fetch announcement by id
            .addCase(fetchAnnouncementByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAnnouncementByIdAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.announcement = action.payload;
            })
            .addCase(fetchAnnouncementByIdAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to fetch announcement by ID";
            })
            // create announcement
            .addCase(createAnnouncementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createAnnouncementAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.announcements.push(action.payload);
            })
            .addCase(createAnnouncementAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to create announcement";
            })
            // update announcement
            .addCase(updateAnnouncementAsyncAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateAnnouncementAsyncAsync.fulfilled, (state, action) => {
                state.status = 'success';
                const index = state.announcements.findIndex(i => i.id === action.payload.id);
                if (index !== -1) {
                    state.announcements[index] = action.payload;
                }
            })
            .addCase(updateAnnouncementAsyncAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to update announcement";
            })
            // delete announcement
            .addCase(deleteAnnouncementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAnnouncementAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.announcements = state.announcements.filter(del => del.id !== action.payload.id);
            })
            .addCase(deleteAnnouncementAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Failed to delete announcement";
            });
    },
});

export default announcementSlice.reducer;
