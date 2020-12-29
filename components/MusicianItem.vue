<template>
    <div :id="index" class="group w-full p-6 border-b border-mute-600 text-white">
        <div class="flex items-center justify-between p-4 cursor-pointer" @click="toggle">
            <p class="text-5xl font-bold tracking-tighter rounded-xl opacity-60 transition duration-200 group-hover:opacity-100">{{name}}</p>
            <p class="text-lg tracking-tighter text-mute-400">{{surname}}</p>
        </div>

        <div class="overflow-hidden max-h-0 duration-500" v-if="visible">
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
            visible: false
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