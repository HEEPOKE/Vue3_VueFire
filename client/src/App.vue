<template>
  <div>
    <label class="form-control">Name:</label>
    <input class="form-control" type="text" v-model="name" />
    <button class="btn btn-primary col-3" @click="SubmitEvent()">Add</button>
  </div>
</template>

<script lang="ts">
import { namesRef } from './config/Firebase';

export default {
  data() {
    return {
      name: 'Heepoke',
    }
  },
  methods: {
    SubmitEvent() {
      namesRef.push({
        name: this.name, edit: false
      })
    }
  }
}
</script>