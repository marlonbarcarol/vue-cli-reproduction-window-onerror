import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.onerror = (message, source, lineno, colno, error) => {
	// eslint-disable-next-line
  console.log(message, source, lineno, colno, error);

  // This is just to not throw the error and ignore it, as we are using console.
  return true;
};

new Vue({
  render: h => h(App)
}).$mount('#app')

throw new Error('Oops! An error occurred');
