<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.description }}</p>
    <p>Salaire : {{ job.salary }} DH</p>
    <p>Expérience : {{ job.experience }} an(s)</p>
    <p>Date de création : {{ job.createdAt }}</p>

    <router-link :to="`/modifier/${job.id}`"><button>Modifier</button></router-link>
    <button @click="supprimer">Supprimer</button>
  </div>
</template>

<script>
export default {
  name: 'JobDetails',
  data() {
    return { job: null }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.$route.params.id)
      .then(response => response.ok ? response.json() : null)
      .then(data => this.job = data)
      .catch(err => console.log(err))
  },
  methods: {
    supprimer() {
      if (!confirm('Voulez-vous vraiment supprimer cet emploi ?')) return
      fetch('http://localhost:3000/jobs/' + this.job.id, { method: 'DELETE' })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}
</script>
