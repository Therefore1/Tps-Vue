<template>
  <h1>Catalogue de livres</h1>
  <p class="loading" v-show="loading">Chargement du catalogue...</p>

  <AddBookForm @add-book="addBook" />
  <BookList :books="books" @toggle-fav="toggleFav" />
</template>

<script>
import AddBookForm from './components/AddBookForm.vue'
import BookList from './components/BookList.vue'

const initialBooks = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, isFav: true },
  { id: 2, title: 'Introduction to Algorithms', author: 'Cormen, Leiserson, Rivest, Stein', year: 2009, isFav: false },
  { id: 3, title: 'Design Patterns', author: 'Gamma, Helm, Johnson, Vlissides', year: 1994, isFav: true },
  { id: 4, title: 'Computer Networks', author: 'Andrew S. Tanenbaum', year: 2010, isFav: false }
]

export default {
  name: 'App',
  components: { AddBookForm, BookList },
  data() {
    return {
      books: [],
      loading: true
    }
  },
  methods: {
    addBook(bookData) {
      this.books.push({ id: Date.now(), ...bookData })
    },
    toggleFav(id) {
      const book = this.books.find(b => b.id === id)
      book.isFav = !book.isFav
    }
  },
  mounted() {
    // simule un chargement réseau
    setTimeout(() => {
      this.books = initialBooks
      this.loading = false
    }, 600)
  }
}
</script>
