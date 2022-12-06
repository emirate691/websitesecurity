<template>
    <b-row class="summary_page h-100 w-100" align-v="stretch">
        <b-row class="summary_page-bg-white m-5  h-100">
            <b-row class="button_row m-5">
                
                <b-col class="">
                
                    <h4 class="mt-2">Https://maintestwebsite.com</h4>
                
                    
                </b-col>
                <b-col class="mt-3">
                    <div class="right_section d-flex justify-content-right align-items-right mb-2">
                        <b-button class="download-btn mx-5" variant="clear">Download wordpress security fixed plugin</b-button>
                        <b-button class="rescan-btn mx-2" variant="clear">Rescan website</b-button>

                    </div>
                </b-col>
        
            </b-row>
            <b-row>
                <b-col>
                    <h6 class="summary mx-5">Summary</h6>
                </b-col>
                <b-col class="d-flex justify-content-right align-items-right">
                    
                    <div class="">
                        <b-button
                        variant="clear"
                        class="download_pdf-report mb-3 mx-5"
                        >
                            <span class=""><img src="@/assets/download_pdf_report.png" height="20px"></span>
                            <span class="mx-2"> Download report as pdf </span>
                        </b-button>
                    </div>
                       
                </b-col>
            </b-row>
             <hr class="mt-5">
        <b-row class="mx-5">
          <b-col>
            <div>
                <h6>overall risk level</h6>
                <span class="medium">Medium</span>
            </div>
          </b-col>
          <b-col>
            <div>
                <h6>Risk rating</h6>
                <div class="scan_info">High&#58; <scan class="high mx-5">1</scan></div>
                <div class="mt-3 scan_info">Medium&#58;<scan class="scan-medium mx-4">1</scan></div>
                <div class="mt-3 scan_info">Low&#58;<scan class="low mx-5 text-right">5</scan></div>
                <div class="mt-3 scan_info">Info&#58;<scan class="info mx-5">13</scan></div>
            </div>
          </b-col>
          <b-col>
            <div>
                <h6>scan information</h6>
                <div class="scan_info">Start time&#58;<span class="fulldate">{{ fulldatetime }}</span></div>
                <div class="mt-3 scan_info">Finish time&#58;{{ fulldatetime }}</div>
                <div class="mt-3 scan_info">scan duration&#58;</div>
                <div class="mt-3 scan_info">Test Performed&#58;</div>
            </div>
          </b-col>
          
        </b-row>
         <hr class="mt-5">
         <div class="d-flex justify-content-center align-items-center">
            <h4>Findings</h4>
         </div>
         <hr class="mt-5">
        </b-row>
       
       

    </b-row>
</template>
<script>
export default {
   props: ["time"],
   data() {
      return {
         starTime:"",
         endTime:"",
         scanDuration:"",
         testPerformed:"",
         fulldatetime: ''
      }
   },
   methods: {
    printFullDate: function(){
            return new Date();
          }
    },
    mounted: function () {
      
      
      this.fulldatetime = this.printFullDate()
   },

  
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&family=Quando&display=swap');

   .summary_page{
     &-bg-white{
        background:#ffffff;
     }
     .button_row{
        //background:#E0E0E066;
        background: rgba(224, 224, 224, 0.4);
        border-radius: 10px;
     }
     .download-btn{
        background: #56CCF2;
        border-radius: 20px;
        color:#ffffff
     }
     .rescan-btn{
        background: #2F80ED;
        border-radius: 20px;
        color:#ffffff
     }
     .download_pdf-report{
        border: 1px solid #828282;
        border-radius: 20px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        position: absolute;
        right:0;
        top:-10px
     }
     .summary{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color:#000000   
     }
     h6{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
        color: #2F80ED;
     }
     .scan_info{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
     }
     .medium{
        width:200px;
        height:50px;
        background: #F2994A;
        border-radius: 5px;
        justify-content:center;
        color:#ffffff;
        padding:10px 20px;
     }
     .scan-medium{
        width:200px;
        height:50px;
        background: #F2994A;
        justify-content:center;
        color:#ffffff;
        padding:5px 10px;
     }
     .high{
        width:200px;
        height:50px;
        background: #EB5757;
        justify-content:center;
        color:#ffffff;
        padding:5px 10px;
        
     }
     .low{
        width:200px;
        height:50px;
        background: #2D9CDB;
        justify-content:right;
        color:#ffffff;
        padding:5px 50px;
     }
     .info {
        width:200px;
        height:50px;
        background: #27AE60;
        justify-content:right;
        color:#ffffff;
        padding:5px 100px;
     }
     .fulldate{
       //
     }
   }
</style>