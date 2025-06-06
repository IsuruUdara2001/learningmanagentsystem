import { configureStore } from "@reduxjs/toolkit";
import rootRedcuer from "./rootRedcuer";
import { authApi } from "@/features/api/authApi";
import { courseApi } from "@/features/api/courseApi";
import { purchaseApi } from "@/features/api/purchaseApi";
import { courseProgressApi } from "@/features/api/courseProgressApi";
import { cartApi } from "@/features/api/cartApi";
import { chatApi } from "@/features/api/chatService";


export const appStore = configureStore({
    reducer: rootRedcuer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware, 
            courseApi.middleware, 
            purchaseApi.middleware, 
            courseProgressApi.middleware,
            cartApi.middleware,
            chatApi.middleware 
        )
});

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({}, {forceRefetch: true}))
}
initializeApp();






