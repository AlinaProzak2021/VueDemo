import {
    createStore
} from 'vuex'
import componentNames from "./data/components/componentNames.json"
import themes from "./data/components/themes.json"
import fonts from "./data/components/fonts.json"
import fontSizes from "./data/components/fontsizes.json"

const store = createStore({
    state() {
        return {
            componentNames, 
            currentLeftComponent: componentNames.StartLeftApplications,
            currentRightComponent: componentNames.StartConfiguration,
            dinamicLeftComponent: componentNames.applications.ComputedVue,
            themes, 
            currentTheme: themes.LightTheme,
            fonts, 
            currentAppFont: fonts.Times,
            fontSizes, 
            currentFontSize: fontSizes.averageFont
        }
    },
    mutations: {
        setCurrentRightComponent(state,currentRightComponent){
            state.currentRightComponent = currentRightComponent
        },
        setCurrentLeftComponent(state, currentLeftComponent){
            state.currentLeftComponent = currentLeftComponent
        },
        setDinamicLeftComponent(state, dinamicLeftComponent){
            state.dinamicLeftComponent = dinamicLeftComponent
        },
        setCurrentTheme(state, currentTheme){
            state.currentTheme = currentTheme
        }, 
        setCurrentAppFont(state, currentAppFont){
            state.currentAppFont = currentAppFont
        }, 
        setCurrentFontSize(state, currentFontSize){
            state.currentFontSize = currentFontSize
        }
    },
    getters:{
        getApplicationList(state){
            return state.componentNames.applications
        }
    }
})
export default store;