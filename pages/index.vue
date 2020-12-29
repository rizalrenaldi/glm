<template>
<section class="relative m-4 min-h-screen text-mute-100">
  <img class="w-full fixed inset-0 -z-0" src="~/assets/images/bg-texture.png" alt="">
  <img class="w-1/2 absolute -inset-1/4 -z-0 opacity-50" src="~assets/images/bluri.svg" alt="blur" />

  <div class="inner border border-mute-700 border-opacity-70 flex flex-col md:flex-row flex-wrap relative z-10">
      <div class="w-full md:w-1/2 border-r border-b border-mute-700 border-opacity-70 flex flex-col justify-between">
          <h1 class="p-8 md:p-4 lg:p-8 text-7xl md:text-6xl lg:text-8xl font-bold tracking-tighter">
            <span class="relative glm-title">God-like Musicians</span>
          </h1>
          <div class="h-16 w-full border-t border-mute-700 border-opacity-70 flex items-center">
              <div class="text-xs md:text-md lg:text-base flex-1 flex items-center px-8 md:px-4 lg:px-8 h-full uppercase md:tracking-wider lg:tracking-wider text-mute-400">A List by &nbsp;<a href="https://rizalrenaldi.com">Rizal Renaldi</a></div>
              <div class="flex-1 flex items-center justify-around border-l border-mute-700 border-opacity-70 h-full px-8 md:px-4 lg:px-8 text-mute-600">
                  <p class="uppercase">Share</p>
                  <div>
                      <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.5533 2.84168C28.4463 3.32958 27.2734 3.65156 26.0724 3.79721C27.3391 3.03999 28.2856 1.84631 28.7343 0.440431C27.5456 1.14729 26.2444 1.64471 24.8873 1.91097C24.0557 1.02589 22.9773 0.411015 21.7921 0.146041C20.6069 -0.118932 19.3694 -0.0217915 18.24 0.424875C17.1106 0.871542 16.1415 1.64714 15.4581 2.65114C14.7748 3.65514 14.4087 4.84125 14.4075 6.05575C14.4083 6.52126 14.4603 6.98527 14.5626 7.43941C12.1551 7.32175 9.79901 6.70047 7.64653 5.61568C5.49405 4.53089 3.59301 3.00671 2.06619 1.14157C1.29622 2.47159 1.06014 4.04441 1.40571 5.54187C1.75128 7.03933 2.65269 8.34965 3.92762 9.20777C2.96427 9.17731 2.02203 8.91782 1.17891 8.45079V8.53145C1.17998 9.93054 1.66496 11.2862 2.55159 12.3685C3.43822 13.4508 4.67193 14.193 6.04345 14.4694C5.15074 14.709 4.21564 14.745 3.30714 14.5749C3.69305 15.7791 4.44626 16.8324 5.46111 17.5868C6.47595 18.3413 7.70152 18.7591 8.96589 18.7817C6.81916 20.4604 4.17083 21.3694 1.44571 21.3629C0.962521 21.3623 0.479781 21.3333 0 21.276C2.77439 23.0634 6.00687 24.0094 9.30715 23.9999C20.4757 23.9999 26.5502 14.7672 26.5502 6.76309C26.5502 6.49628 26.5502 6.23568 26.5502 5.97508C27.7291 5.11691 28.7459 4.05593 29.5533 2.84168Z" fill="#4A4A4A"/>
                          </svg>                                    
                  </div>
                  <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.6781 0H1.32186C0.971279 0 0.63505 0.139267 0.387153 0.387164C0.139256 0.635061 0 0.97128 0 1.32186V22.6781C0 23.0287 0.139256 23.3649 0.387153 23.6128C0.63505 23.8607 0.971279 24 1.32186 24H12.821V14.7057H9.67642V11.0912H12.8055V8.41136C12.8055 5.31325 14.6953 3.62479 17.4527 3.62479C18.3858 3.62051 19.3184 3.66878 20.2461 3.76936V7.00689H18.3305C16.8227 7.00689 16.5336 7.72461 16.5336 8.77281V11.0861H20.1222L19.6523 14.7005H16.5542V23.9948H22.673C23.0236 23.9948 23.3598 23.8556 23.6077 23.6077C23.8556 23.3598 23.9948 23.0236 23.9948 22.673V1.32186C23.9948 0.972173 23.8563 0.636733 23.6095 0.388984C23.3627 0.141235 23.0278 0.00136596 22.6781 0V0Z" fill="#4A4A4A"/>
                          </svg>                                    
                  </div>
              </div>
          </div>
      </div>
      <div class="w-full md:w-1/2 hidden md:flex flex-col justify-between">
          <div class="flex-1 flex items-center">
              <p class="text-2xl p-16 text-mute-400 relative leading-relaxed">
                  <!-- <svg class="absolute left-0 top-16" width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L24 15.5L0 31V0Z" fill="#242424"/>
                  </svg> -->
                  <svg class="w-16 absolute -left-8 top-0" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.5 0V59" stroke="#0C44BA" stroke-width="4"/>
                  <path d="M50.3594 8.64062L8.64008 50.3599" stroke="#0C44BA" stroke-width="4"/>
                  <path d="M59 29.5L1.43051e-06 29.5" stroke="#0C44BA" stroke-width="4"/>
                  <path d="M50.3594 50.3594L8.64008 8.64007" stroke="#0C44BA" stroke-width="4"/>
                  </svg>

                  <svg class="w-1/2 absolute left-16 top-24" viewBox="0 0 344 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.80193C15.1435 4.60493 29.2213 3.57437 43.3293 3.04178C64.3956 2.24648 85.6546 2.40812 106.757 2.40812C126.46 2.40812 146.2 2.82512 165.9 2.51373C172.983 2.40177 179.995 1.90869 187.064 1.70406C194.352 1.49309 201.137 1.95048 206.317 1.95048C244.366 1.95048 282.578 2.87656 320.579 1.73926C328.181 1.51176 335.772 1 343.392 1C345.584 1 341.171 1 340.821 1C337.524 1 334.228 1 330.931 1" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M33.6367 5.67565C77.0581 6.12148 120.414 6.32968 163.855 6.3093C185.514 6.29914 207.163 6.23917 228.8 5.67565C238.567 5.42126 248.324 5.04199 258.107 5.04199C262.463 5.04199 266.75 5.35882 271.129 5.35882C279.603 5.35882 288.042 5.04199 296.513 5.04199" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
       
                  Opinionated & subjective list of genius musicians across era and genre &mdash; This list is based on my years of music listening journey and it will keeps growing and changing.
              </p>
          </div>
          <div class="h-16 w-full border-t border-b border-mute-700 border-opacity-70 flex items-center">
              <div class="flex-1 flex items-center px-16 h-full text-mute-600 uppercase tracking-widest">{{musicians.length}} Musicians &nbsp;<span class="relative">
                  <svg class="w-2/3 absolute left-8 top-2" viewBox="0 0 344 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.80193C15.1435 4.60493 29.2213 3.57437 43.3293 3.04178C64.3956 2.24648 85.6546 2.40812 106.757 2.40812C126.46 2.40812 146.2 2.82512 165.9 2.51373C172.983 2.40177 179.995 1.90869 187.064 1.70406C194.352 1.49309 201.137 1.95048 206.317 1.95048C244.366 1.95048 282.578 2.87656 320.579 1.73926C328.181 1.51176 335.772 1 343.392 1C345.584 1 341.171 1 340.821 1C337.524 1 334.228 1 330.931 1" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M33.6367 5.67565C77.0581 6.12148 120.414 6.32968 163.855 6.3093C185.514 6.29914 207.163 6.23917 228.8 5.67565C238.567 5.42126 248.324 5.04199 258.107 5.04199C262.463 5.04199 266.75 5.35882 271.129 5.35882C279.603 5.35882 288.042 5.04199 296.513 5.04199" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>    
                  in no particular order</span></div>
              <div class="w-1/6 flex items-center justify-center border-l border-mute-700 border-opacity-70 h-full text-mute-600">Show all</div>
          </div>
      </div>

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

  </div>
  </section>
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
          selected: null
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
    bottom: 56px;
    right: -32px;
  }

  .musician-img img {
    @apply transition duration-200;
    filter: grayscale(100%);
  }

  .musician-img img:hover {
    filter: grayscale(0%);
  }

</style>
