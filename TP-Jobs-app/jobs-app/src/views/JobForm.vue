<template>
  <h1>{{ id ? 'Modifier' : 'Ajouter' }} un emploi</h1>

  <form @submit.prevent="envoyer">
    <input v-model="job.title" placeholder="Titre" required />
    <textarea v-model="job.description" placeholder="Description" required></textarea>
    <input v-model.number="job.salary" type="number" placeholder="Salaire" required />
    <input v-model.number="job.experience" type="number" min="0" placeholder="Années d'expérience" required />
    <label>Date de création <input v-model="job.createdAt" type="date" required /></label>
    <button type="submit">Enregistrer</button>
  </form>
</template>

<script>
export default {
  name: 'JobForm',
  data() {
    return {
      job: {
        title: '',
        description: '',
        salary: null,
        experience: null,
        createdAt: new Date().toISOString().slice(0, 10)
      }
    }
  },
  computed: {
    // présent seulement sur la route /modifier/:id
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    // en modification, on pré-remplit le formulaire
    if (this.id) {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then(response => response.json())
        .then(data => this.job = data)
        .catch(err => console.log(err))
    }
  },
  methods: {
    envoyer() {
      const url = this.id
        ? 'http://localhost:3000/jobs/' + this.id
        : 'http://localhost:3000/jobs'

      fetch(url, {
        method: this.id ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.job)
      })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
