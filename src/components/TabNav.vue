<template>
<div class="container">
    <h2>Tabbed Content</h2><br><br><br>
    <div style="width: 100%">
        <ul class="nav nav-tabs">
            <li v-for="tab in tabs" :key="tab" class="nav-item">
                <a class="nav-link" :class="{ active: tab === selected }" @click="setTab(tab)">
                    {{ tab }}
                </a>
            </li>
        </ul>
        <slot></slot>
    </div>
</div>
</template>
<style scoped>
    a.nav-link{
        color: #ffffff;
    }
    a.nav-link:hover{
        color: black;
    }
    a.nav-link.active{
        color: black;
    }
</style>
<script>
export default {
    props:{
        tabs: {
            type: Array,
            required: true,
        },
        selected: {
            type: String,
            required: true,
        },
    },
    methods:{
        setTab(tab) {
            this.$emit('selected', tab);
        },
    },
};
</script>
