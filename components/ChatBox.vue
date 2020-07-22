<template>
  <v-card>
    <v-card-title v-text="title" />
    <v-divider />
    <v-virtual-scroll
      :items="messages"
      :item-height=50
      height="400"
      id="virtualScroll"
    >
    <template v-slot="{ item, index }">
        <v-list-item :key="index" class="ma-2 ma-md-3">
          <v-row :justify="item.from==='gists.io'?'start':'end'">
            <v-chip class="black--text" v-text="item.text" :color="item.from==='gists.io'?'yellow accent-2':'green accent-2'" />
          </v-row>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <v-divider />
    <v-card-actions>
      <v-text-field class="mx-2 mx-md-3" color="yellow accent-2" v-model="newMessage" v-on:keyup.enter="sendMessage"/>
      <v-btn @click="sendMessage" rounded outlined color="yellow accent-2" class="px-3 mx-2 mx-md-3">Send it!</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      newMessage: '',
      title: 'Gists.io Echo Chat Box',
      messages: [
        {
          text: 'Hello there',
          from: 'gists.io',
          timestamp: 0
        }
      ]
    }
  },
  methods: {
    sendMessage () {
      if (this.newMessage.length !== 0) {
        this.messages.push(
          {
            text: this.newMessage,
            from: 'user',
            timestamp: 0
          }
        )
        this.messages.push(
          {
            text: this.newMessage,
            from: 'gists.io',
            timestamp: 0
          }
        )
        this.newMessage = ''
      }
    }
  }
}
</script>