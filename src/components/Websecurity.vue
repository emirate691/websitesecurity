<template>
    <b-row class="websitesecurity_page h-100 w-100" align-v="stretch">
         <b-row>
            <b-col cols="2" class="h-100 d-none d-md-block">
                <div class="dasjboard"></div>

            </b-col>
            <b-col>
                <div class="d-flex justify-content-left align-items-left h-100 mt-5 pt-5">
                    <div class="websitesecurity_page-url_scanner">
                        <h4>Website scanner</h4>
                
                    <div class="websitesecurity_page-url_scanner-container mt-3 h-100">
                        <div class="mx-4">
                            <h6 class="pt-5">Your website URL is<span>&#58;</span> </h6> 
                            <h4 class="mt-3">Https&#58;//maintestwebsite.com</h4>
                            <div class="url_scanner-container_content">
                                <b-row>
                                    <b-col cols="5">
                                        <div class="paragraph mt-5">
                                            <p>
                                                Scan for vulnerability in website and web applications and find 
                                                SQL injections, XSS, Server Side-Request Forgery, Directory Traversal
                                                and others plus web server configuration issues. click the button below to scan 
                                            </p>
                                            
                                            <div>
                                                <div :class="{ scanning: disabled }">
                                                <b-button 
                                                variant="clear"
                                                class="scan_btn w-100"
                                                size="large"
                                                @click="scanUrl()"
                                                to="/scan"
                                             
                                                 
                                                >
                                                Scan website
                                                </b-button>
                                                <b-button
                                                variant="clear"
                                                class="change_url-btn w-100 mt-4"

                                                >
                                                Change URL
                                                </b-button>
                                            </div>
                                        </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <div class="websecurity_image">
                                            <img src="@/assets/web_security__image.png" class="d-none d-md-block mt-5 pt-5">
                                        </div>
                                    </b-col>

                                </b-row>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-row>
   
</template>
<script>
export default {
    data() {
        return {
            disabled: false
        }
    },
    methods : {
        scanUrl() {
            this.disabled = true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

    .websitesecurity_page {
        overflow-y:hidden;
        &-url_scanner{
            
            &-container{
               background: linear-gradient(116.88deg, rgba(255, 255, 255, 0.4) 1.79%, rgba(255, 255, 255, 0) 100.47%);
               box-shadow: 30px 40px 20px -30px rgba(4, 15, 21, 0.1);
               //filter: drop-shadow(0px 16px 80px rgba(4, 15, 21, 0.15));
               border-radius: 20px;
               
               
            }
        }
        .scan_btn{
            background: #2F80ED;
            color:#ffffff;
            border-radius: 20px    
        }
        .change_url-btn{
            background: #BDBDBD;
            border-radius: 20px;
            color:#ffffff;
        }
        p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 350;
            font-size: 20px;
            line-height:48px;
        }
        .scanning_page-scanning_url{
            width: 58px;
            height: 58px;
            border:solid 3px #AAB8BE;
        }

        .scanning_page-scanning_url::after {
            content: '';
            position:absolute;
            width:58px;
            height:8px;
            background-image: linear-gradient(to bottom, rgba(170, 184, 190, 0),rgba(170, 184, 190, 8));
            animation:.8s linear infinite;
        }
    }
</style>