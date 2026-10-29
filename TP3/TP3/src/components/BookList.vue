<template>
  <div>
    <BookCard
      v-for="book in books"
      :key="book.id"
      :book="book"
      @toggle-fav="$emit('toggle-fav', $event)"
    >
      <template #actions>
        <small>Livre n°{{ book.id }}</small>
      </template>
    </BookCard>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
  name: 'BookList',
  components: { BookCard },
  props: {
    books: { type: Array, required: true }
  },
  emits: ['toggle-fav']
}
</script>
