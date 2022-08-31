import {configureStore} from "@reduxjs/toolkit"
import nameTraider from "./slices/nameTraider"
export default configureStore({
    reducer: {
        nameTraider
    }
})
 