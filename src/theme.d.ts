import { ThemeOptions } from "@mui/material/styles"

declare module "@mui/material/styles" {
    interface ThemeOptions{
        status:{
        customColor: React.CSSProperties["color"]
        }
    }
}