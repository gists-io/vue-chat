<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container class="fill-height" >
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Gists.io'
    }
  }
}
</script>
