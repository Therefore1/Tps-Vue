<template>
  <h1>Offres d'emploi</h1>
  <router-link to="/ajouter"><button>Ajouter un emploi</button></router-link>

  <div class="job" v-for="job in jobs" :key="job.id">
    <h3>{{ job.title }}</h3>
    <p>{{ job.salary }} DH -- {{ job.experience }} an(s) d'expérience</p>
    <router-link :to="`/jobs/${job.id}`">Voir détails</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return { jobs: [] }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then(response => response.json())
      .then(data => this.jobs = data)
      .catch(err => console.log(err))
  }
}
</script>
