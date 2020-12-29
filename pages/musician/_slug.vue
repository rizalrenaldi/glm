<template>
<article>
    <h1>{{ musician.name }}</h1>
    <p>{{ musician.surname }}</p>

    <nuxt-content :document="musician" />
    <pre>{{musician}}</pre>
  </article>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const musician = await $content('musicians', params.slug).fetch()

        return {
            musician
        }
    }
}
</script>

<style>

</style>