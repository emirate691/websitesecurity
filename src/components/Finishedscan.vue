<template>
    <div class="scanning_page h-100" align-v="stretch">
        <b-row>
            <b-col cols="2">
            </b-col>
            <b-col cols="7">
                <div class="scanning_page-scanning_url d-flex justify-content-center align-items-center  m-5 p-5 h-100 mt-5 pt-5">
                    <div class="h-100">
                        <span class="mt-5">
                            Scanning "Https&#58;//maintestwebsite.com"
                        </span>
                        <div class="pt-5 mx-5">
                            <div class="successful_scanned">
                                <scan class="processing m-5 position-absolute">processing</scan>
                            </div>
                        </div>
                        <div class="mt-5">
                            <span class="mt-5 pt-5">Successful scanned... please wait</span>
                        </div>
                    </div>

                </div>
            </b-col>
        </b-row>

    </div>
</template>

<style lang="scss" scoped>

    .scanning_page {
        &-scanning_url{
            background: linear-gradient(116.88deg, rgba(255, 255, 255, 0.4) 1.79%, rgba(255, 255, 255, 0) 100.47%);
            box-shadow: 30px 40px 20px -30px rgba(4, 15, 21, 0.1);
            //filter: drop-shadow(0px 16px 80px rgba(4, 15, 21, 0.15));
            border-radius: 30px;
        }
        .successful_scanned{
           
            width:200px;
            height:200px;
            border:5px solid #000000;
            border-radius:100%;

           
        }
        .processing{
            top:200px;
        }
    }
</style>