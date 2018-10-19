<template>
    <div class="item-list">
        {{ hello }}
    </div>
</template>

<script>
export default {
    name: 'itemList',
    data () {
        return {
            hello: 'hello world!'
        }
    }
}
</script>
