<template>
  <div class="m-20">
    <div v-for="(musician, index) in musicians" :key="index" >
       <div class="group w-full p-6 border-b border-gray-700 text-white">
        <p>{{index}}</p>
        <div :id="index" class="flex items-center justify-between p-4 cursor-pointer" @click="selected !== index ? selected = index : selected = null">
            <p class="text-5xl font-bold tracking-tighter rounded-xl opacity-60 transition duration-200 group-hover:opacity-100">{{musician.name}}</p>
            <p class="text-lg tracking-tighter text-mute-400">{{musician.surname}}</p>
        </div>

        <div class="details overflow-hidden max-h-0 duration-500" :style="selected == index ? 'max-height: 600px' : ''">
            <div class="leading-loose p-4">
                <p class="text-mute-400 uppercase font-semibold mb-4 tracking-wider text-sm">{{musician.category}}</p>
            <div class="flex">
                <div class="w-1/2">
                    <p>{{musician.description}}
                        <a class="text-blue-600 font-bold underline" :href="musician.link" target="_blank">More on Wikipedia</a>
                    </p>
                    </div>
                <div class="w-1/2"></div>
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
          selected: false,
          musicians: [
            {
              id: 1,
              name: 'Jimi Hendrix',
              surname: 'James Marshall "Jimi" Hendrix',
              category: 'Guitarist / Singer / Songwriter',
              description: 'Jimi Hendrix was an American musician, singer, and songwriter. Although his mainstream career spanned only four years, he is widely regarded as one of the most influential electric guitarists in the history of popular music, and one of the most celebrated musicians of the 20th century. The Rock and Roll Hall of Fame describes him as "arguably the greatest instrumentalist in the history of rock music',
              link: 'https://en.wikipedia.org/wiki/Jimi_Hendrix'
            },
            {
              id: 2,
              name: "Matt Bellamy",
              surname: "Matthew James Bellamy",
              category: "Multi-instrumentalist / singer / songwriter",
              description: "Matt Bellamy is best known as the lead singer, guitarist, pianist, and primary songwriter of the rock band Muse. He is recognised for his eccentric stage persona, wide tenor vocal range and musicianship. He has also released solo compositions.",
              link: "https://en.wikipedia.org/wiki/Matt_Bellamy"
            },
          ]
        }
      }
    } 
</script>