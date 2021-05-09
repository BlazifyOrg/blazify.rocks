import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {dark: localStorage.getItem("theme") !== "true", themes: {dark: {primary: "#F44336"}, light:{primary: "#F44336"}}}
});
