<template>
    <b-container fluid class="homepage__container p-0 m-0">
        <div>
            
            <div class="h-100 flex-1 py-5">
                <Finishedscan />
            </div>
        </div>
       
    </b-container>
</template>
<script>



import Finishedscan from '../components/Finishedscan.vue'
export default {
    name: "Home",
    components: { Finishedscan },

    data() {
      return {

      };
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');
.homepage__container {
    background-color:#E5E5E5;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    .footer__container {
        margin-top: auto;
    }
}
</style>