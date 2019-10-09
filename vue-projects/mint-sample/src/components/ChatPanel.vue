<template>
  <div class="q-pa-md row justify-center" style="border-style: dotted;">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message label="Sunday, 19th" />
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar4.jpg"
        :text="['hey, how are you?']"
        sent
        stamp="7 minutes ago"
      />
      <q-chat-message
        name="Jane"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['doing fine, how r you?']"
        stamp="4 minutes ago"
      />
    </div>
    <div class="q-pa-md" style="width: 500px">
      <q-input v-model="text" filled type="textarea" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPanel",
  data() {
    return {
      text: ""
    };
  }
};
</script>
