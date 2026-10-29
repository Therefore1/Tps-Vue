<template>
  <form @submit.prevent="soumettre">
    <input ref="titreInput" v-model="newBook.title" placeholder="Titre" />
    <input v-model="newBook.author" placeholder="Auteur" />
    <input v-model.number="newBook.year" type="number" placeholder="Année" />
    <button type="submit">Ajouter</button>
  </form>
</template>

<script>
export default {
  name: 'AddBookForm',
  emits: ['add-book'],
  data() {
    return {
      newBook: { title: '', author: '', year: null, isFav: false }
    }
  },
  methods: {
    soumettre() {
      if (this.newBook.title === '') return
      this.$emit('add-book', { ...this.newBook })
      this.newBook = { title: '', author: '', year: null, isFav: false }
    }
  },
  mounted() {
    this.$refs.titreInput.focus()
  }
}
</script>
