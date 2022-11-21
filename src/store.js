import {
    createStore
} from 'vuex'
import componentNames from "./data/components/componentNames.json"
import themes from "./data/components/themes.json"
import fonts from "./data/components/fonts.json"
import fontSizes from "./data/components/fontsizes.json"
import errors from "./data/components/errors.json"
import selectOptions from "./data/components/selectOptions.json"

const store = createStore({
    state() {
        return {
            cardList: [],
            componentNames,
            currentLeftComponent: componentNames.StartLeftApplications,
            currentRightComponent: componentNames.StartConfiguration,
            dinamicLeftComponent: componentNames.applications.ComputedVue,
            themes,
            currentTheme: themes.brightTheme,
            fonts,
            currentAppFont: fonts.Times,
            fontSizes,
            currentFontSize: fontSizes.averageFont,
            errors,
            selectOptions : selectOptions.selectOptions
        }
    },
    mutations: {
        addCardToList(state, newCard) {
            state.cardList.push(newCard)
        },
        deleteCard(state, index) {
            state.cardList.splice(index, 1)
        },
        setCurrentRightComponent(state, currentRightComponent) {
            state.currentRightComponent = currentRightComponent
        },
        setCurrentLeftComponent(state, currentLeftComponent) {
            state.currentLeftComponent = currentLeftComponent
        },
        setDinamicLeftComponent(state, dinamicLeftComponent) {
            state.dinamicLeftComponent = dinamicLeftComponent
        },
        setCurrentTheme(state, currentTheme) {
            state.currentTheme = currentTheme
        },
        setCurrentAppFont(state, currentAppFont) {
            state.currentAppFont = currentAppFont
        },
        setCurrentFontSize(state, currentFontSize) {
            state.currentFontSize = currentFontSize
        }
    },
    getters: {
        getApplicationList(state) {
            return state.componentNames.applications
        }
    }
})
export default store;