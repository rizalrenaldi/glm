<template>
     <div class="group w-full p-6 border-b border-gray-700 text-white">
        <p>{{index}}</p>
        <div :id="index" class="flex items-center justify-between p-4 cursor-pointer" @click="selected !== index ? selected = index : selected = null">
            <p class="text-5xl font-bold tracking-tighter rounded-xl opacity-60 transition duration-200 group-hover:opacity-100">{{name}}</p>
            <p class="text-lg tracking-tighter text-mute-400">{{surname}}</p>
        </div>

        <div class="details overflow-hidden max-h-0 duration-500" :style="selected == index ? 'max-height: 600px' : ''">
            <div class="leading-loose p-4">
                <p class="text-mute-400 uppercase font-semibold mb-4 tracking-wider text-sm">{{category}}</p>
            <div class="flex">
                <div class="w-1/2">
                    <p>{{description}}
                        <a class="text-blue-600 font-bold underline" :href="link" target="_blank">More on Wikipedia</a>
                    </p>
                    </div>
                <div class="w-1/2"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: null
        }
    },
    props: [
        'index',
        'name',
        'surname',
        'category',
        'description',
        'link'
    ]
}
</script>