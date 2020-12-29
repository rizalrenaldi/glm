<template>
  <div>
    <div v-for="musician of musicians" :key="musician.slug" >
       <div class="group w-full px-4 py-12 border-b border-mute-700 border-opacity-70 cursor-pointer">
        <div :id="musician.id" class="flex items-center justify-between p-4 cursor-pointer" @click="selected !== musician.id ? selected = musician.id : selected = null">
            <p class="text-mute-400 list-nonetext-5xl md:text-7xl font-bold tracking-tighter rounded-xl transition duration-200 group-hover:text-opacity-60">{{musician.name}}</p>
            <p class="text-sm md:text-lg tracking-tighter text-mute-400">{{musician.surname}}</p>
        </div>

        <div class="details overflow-hidden max-h-0 duration-500" :style="selected == musician.id ? 'max-height: 600px' : ''">
            <div class="leading-loose p-4">
                <p class="text-mute-600 uppercase font-semibold mb-4 tracking-wider text-sm">{{musician.category}}</p>
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2">
                    <p>{{musician.description}}
                        <a class="text-blue-600 font-bold underline" :href="musician.link" target="_blank">More on Wikipedia</a>
                    </p>
                    <p class="mt-8 p-4 bg-mute-800 text-mute-400">{{musician.notes}}</p>
                    <iframe class="my-16" :src="musician.spotify" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    </div>
                <div class="w-full md:w-1/2"></div>
            </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>
<script> 
    export default { 
      async asyncData({ $content, params }) {
        const musicians = await $content('musicians', params.slug).fetch() 

        return {
          musicians
        }
      },
      data () {
        return {
          selected: null
        }
      }
    } 
</script>