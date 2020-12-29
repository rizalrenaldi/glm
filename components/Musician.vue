<template>
  <div>
    <div v-for="(musician, index) in musicians" :key="index" >
       <div class="group w-full px-4 py-12 border-b border-mute-700 border-opacity-70 cursor-pointer">
        <div :id="index" class="flex items-center justify-between p-4 cursor-pointer" @click="selected !== index ? selected = index : selected = null">
            <p class="text-mute-400 list-nonetext-5xl md:text-7xl font-bold tracking-tighter rounded-xl transition duration-200 group-hover:text-opacity-60">{{musician.name}}</p>
            <p class="text-sm md:text-lg tracking-tighter text-mute-400">{{musician.surname}}</p>
        </div>

        <div class="details overflow-hidden max-h-0 duration-500" :style="selected == index ? 'max-height: 600px' : ''">
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
                <div class="w-full md:w-1/2 md:mx-16">
                    <div class="bg-mute-800">
                        <div class="w-full overflow-hidden transform -rotate-3 musician-img">
                            <img class="w-full h-full object-cover object-center" src="~/assets/images/{{musician.foto}}" alt="{{musician.name}}">
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
      data () {
        return {
          selected: null,
          musicians: [
            {
              id: 1,
              name: 'Jimi Hendrix',
              surname: 'James Marshall "Jimi" Hendrix',
              category: 'Guitarist / Singer / Songwriter',
              description: 'Jimi Hendrix was an American musician, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music',
              notes: "I have been into Blues since my junior high school days, and still until this day. Interestingly, my first encounter to Blues is not Hendrix, but later I learn that you can listen to all Blues you can think of, but if you absence to Hendrix, it is never been complete. Hendrix expanded modern Blues above and beyond.",
              link: "https://en.wikipedia.org/wiki/Jimi_Hendrix",
              spotify: "https://open.spotify.com/embed/track/0wJoRiX5K5BxlqZTolB2LD",
              foto: "jimi-hendrix.jpg"
            },
            {
              id: 2,
              name: "Matt Bellamy",
              surname: "Matthew James Bellamy",
              category: "Multi-instrumentalist / singer / songwriter",
              description: "Matt Bellamy is best known as the lead singer, guitarist, pianist, and primary songwriter of the rock band Muse. He is recognised for his eccentric stage persona, wide tenor vocal range and musicianship. He has also released solo compositions.",
              notes: "For me, Matt and Muse always has a special part in my music journey. Through his music, he teach me to see beyond future, to always one step ahead. To be excels in everything as long you enjoy it, and just dont give a fuck. The world will be ready. Not all people, but some people might ready. Plug in Baby and Sunburn are among Muse songs that shaped my teenage years.",
              link: "https://en.wikipedia.org/wiki/Matt_Bellamy",
              spotify: "https://open.spotify.com/embed/track/5wq8wceQvaFlOZovDtfr0j",
              foto: "matt-bellamy.jpg"
            },
          ]
        }
      }
    } 
</script>