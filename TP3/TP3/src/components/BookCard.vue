<template>
  <div class="book" :class="{ favori: book.isFav }">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }} -- {{ book.year }}</p>
    <span class="badge-favori" v-if="book.isFav">Favori</span>
    <slot name="actions"></slot>
    <div>
      <button @click="$emit('toggle-fav', book.id)">Favori</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
      validator(value) {
        return value.title !== undefined && value.title !== ''
      }
    }
  },
  emits: ['toggle-fav']
}
</script>
