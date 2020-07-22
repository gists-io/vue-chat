export { default as ChatBox } from '../../components/ChatBox.vue'

export const LazyChatBox = import('../../components/ChatBox.vue' /* webpackChunkName: "components/ChatBox'}" */).then(c => c.default || c)
