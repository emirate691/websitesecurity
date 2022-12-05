<template>
    <div class="scanning_page h-100 w-100" align-v="stretch">
        <b-row>
            <b-col cols="2">
            </b-col>
            <b-col cols="7">
                <div  class="scanning_page-scanning_url d-flex justify-content-center align-items-center  m-5 p-5 h-100 mt-5 pt-5">
                    <div class="h-100">
                        <span class="mt-5">
                            Scanning "Https&#58;//maintestwebsite.com"
                        </span>
                        <div class="scan"> 
                            
                            <img src="@/assets/scaning__process.png" class="m-5 pt-5">
                        </div>
                        <span class="mt-5 pt-2">Checking for website accessibility.....{{ counter }}%</span>
                    </div>

                </div>
            </b-col>
        </b-row>

    </div>
</template>
<script>
export default {
    data() {
        return {
         counter: 30
        }
        
    
    },
    
    
}
</script>
<style lang="scss" scoped>

    .scanning_page {
        &-scanning_url{
            background: linear-gradient(116.88deg, rgba(255, 255, 255, 0.4) 1.79%, rgba(255, 255, 255, 0) 100.47%);
            box-shadow: 30px 40px 20px -30px rgba(4, 15, 21, 0.1);
            //filter: drop-shadow(0px 16px 80px rgba(4, 15, 21, 0.15));
            border-radius: 30px;
        }
        .scan{
            
            text-align: center;
            padding:6px 2px;
            left:0;
            right:0;
            top:50%;
            margin:auto;
            transform: translate(0%);
           
        }
        .scan::after {
            content: '';
            background: linear-gradient(to bottom, rgba(47, 128, 237, 0), rgba(47, 128, 237, 8));
            width:190px;
            height:8px;
           
            display: block;
            position:absolute;
            top:70px;
            right:0;
            left:0;
            bottom:20px;

            margin: auto;
            opacity: 7;
            z-index: 2;
            animation: 20s linear infinite roll;

            
        }
        @keyframes roll{
            0% {
                transform: translateY(-90px);
            }
             50% {
                transform: translateY(100px);
            }
             100% {
                transform: translateY(-100px);
            }

        }

    }
</style>