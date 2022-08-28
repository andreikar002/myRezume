export const state = () => ({
    mode: "dark",
})

export const mutations = {
    darkMode(state) {
        state.mode = "dark"
    },
    lightMode(state) {
        state.mode = "light"
    },
}