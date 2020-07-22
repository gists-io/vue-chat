<template>
  <v-row
  justify="center"
  align="center"
  >
    <v-col cols=12 md=6 lg=4>
      <chat-box />
    </v-col>
  </v-row>
</template>

<script>
import ChatBox from '@/components/ChatBox'
export default {
  components: {
    ChatBox
  }
}
</script>
