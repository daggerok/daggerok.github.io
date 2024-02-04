import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Footer", defineAsyncComponent(() => import("/Users/maksim.kostromin/Documents/code/private/daggerok.github.io/.vuepress/components/Footer.vue"))),
      app.component("Post", defineAsyncComponent(() => import("/Users/maksim.kostromin/Documents/code/private/daggerok.github.io/.vuepress/components/Post.vue"))),
      app.component("Posts", defineAsyncComponent(() => import("/Users/maksim.kostromin/Documents/code/private/daggerok.github.io/.vuepress/components/Posts.vue")))
  },
}
