<template>
      <div v-for="musician of musicians" :key="musician.slug" >
       <div class="group w-full px-4 py-4 md:py-12 border-b border-mute-700 border-opacity-70 cursor-pointer">
        <div :id="musician.id" class="flex items-baseline justify-between md:p-4 cursor-pointer" @click="selected !== musician.id ? selected = musician.id : selected = null">
            <p class="font-handwrite text-mute-400 md:mb-0 text-5xl md:text-7xl transition duration-200 group-hover:text-opacity-60">{{musician.name}} &nbsp; <br class="md:hidden"><span class="hidden md:inline-block whitespace-nowrap font-sans font-normal opacity-60 text-sm md:text-lg tracking-tighter text-mute-400">{{musician.band}}</span></p>
            <p class="text-sm md:text-lg tracking-tighter text-mute-400 hidden md:block">{{musician.surname}}</p>
        </div>

        <div class="details overflow-hidden max-h-0 duration-500" :class="selected == musician.id ? 'open-height' : ''">
            <div class="leading-loose pt-8 md:pt-0 md:p-4">
                <p class="text-mute-600 uppercase font-semibold mb-4 md:tracking-wider text-xs md:text-sm">{{musician.category}}</p>
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2">
                    <p>{{musician.description}}
                        <a class="text-blue-600 text-xs" :href="musician.link" target="_blank">
                            <svg class="inline-block mx-1 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.25 2.75H7.74915C4.98772 2.75 2.74915 4.98858 2.74915 7.75V16.2499C2.74915 19.0114 4.98773 21.2499 7.74915 21.2499H16.2508C19.0122 21.2499 21.2508 19.0112 21.2508 16.2498C21.2508 15.3354 21.2508 14.4505 21.2508 13.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.75 2.75H21.25V9.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.25 2.75L12.75 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>

                            More on Wikipedia</a>
                    </p>
                    <p class="mt-8 p-6 bg-mute-800 bg-opacity-50 text-mute-400 rounded-lg">{{musician.notes}}</p>
                    <div class="song">
                        <!-- <div class="isLoading"></div> -->
                        <iframe class="my-16" :src="musician.spotify" width="100%" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>

                    </div>
                 <div class="w-full md:w-1/2 md:mx-16">
                    <div class="bg-mute-800">
                        <div class="w-full overflow-hidden transform -rotate-3 musician-img">
                            <img class="w-full h-full object-cover object-center" :src="require(`~/assets/images/${musician.foto}`)" :alt="musician.name">
                        </div>

                    </div>
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
        const musicians = await $content('musicians', params.slug).sortBy('id').fetch() 

        return {
          musicians
        }
      },
      data () {
        return {
          selected: null,
          iframeLoaded: false
        }
      },
      methods: {
          load: function(e){
                console.log(e)
                this.iframeLoaded = true;
            }
      }
    } 
</script>

<style>
.glm-title::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    @apply bg-blue-600;
    position:absolute;
    bottom: 32px;
    right: -24px;
  }

@screen md {
  .glm-title::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    @apply bg-blue-600;
    position:absolute;
    bottom: 64px;
    right: -24px;
  }
}

  .musician-img img {
    @apply transition duration-200;
    filter: grayscale(100%);
  }

  .musician-img img:hover {
    filter: grayscale(0%);
  }

.isLoading {
    width: 100%;
    height: 80px;
    background-image: linear-gradient(90deg, rgba(36, 36, 36, 1) 0px, rgba(74, 74, 74, 0.4) 40px, rgba(36, 36, 36, 1) 80px);
  background-size: 400px;
  /* background-position: 1000%; */
  animation: shine-lines 2s infinite ease-out;
}

@keyframes shine-lines {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 1000px;
  }
}


</style>
