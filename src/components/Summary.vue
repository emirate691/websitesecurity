<template>
    <b-row class="summary_page h-100 w-100" align-v="stretch">
      <b-container fluid>
        <b-row class="summary_page-bg-white m-5  p-5  h-100">
            <b-row class="button_row">
                
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
                    <h6 class="summary mx-5 mt-5">Summary</h6>
                </b-col>
                <b-col class="d-flex justify-content-right align-items-right">
                    
                    <div class="">
                        <b-button
                        variant="clear"
                        class="download_pdf-report mt-5 mb-3 mx-5"
                        >
                            <span class=""><img src="@/assets/download_pdf_report.png" height="20px"></span>
                            <span class="mx-2"> Download report as pdf </span>
                        </b-button>
                    </div>
                       
                </b-col>
                 
            </b-row>
          <hr class="mt-5">  
        <b-row class="mx-5">
          <b-col cols="4">
            <div>
                <h6>overall risk level</h6>
                <span class="medium">Medium</span>
            </div>
          </b-col>
          <b-col cols="4">
            <div>
                <h6>Risk rating</h6>
                <div class="scan_info">High&#58; <scan class="high mx-5">1</scan></div>
                <div class="mt-3 scan_info">Medium&#58;<scan class="scan-medium mx-4">1</scan></div>
                <div class="mt-3 scan_info">Low&#58;<scan class="low mx-5 text-right">5</scan></div>
                <div class="mt-3 scan_info">Info&#58;<scan class="info mx-5">13</scan></div>
            </div>
          </b-col>
          <b-col cols="4">
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
            <h4 class="">Findings</h4>
         </div>
         <hr class="mt-5">
         <b-row>
            
            <b-col class="mx-5">
               
               <img src="@/assets/Flag.png" height="30px" class="">
               <span class="vulneral mx-2">Vulnerabilities found server-side software</span>
               
            </b-col>
            <b-col cols="3">
               <b-form-group>
                  <b-form-checkbox-group id="solved_checkbox">
                     <b-form-checkbox
                        id="solved"
                        value="1"
                        unchecked-value=""
                     >
                        <div class="mb-3">
                           Marked as solved
                        </div>
                     </b-form-checkbox>
                  </b-form-checkbox-group>
               </b-form-group>
            </b-col>
         
            <b-row >
               <b-col class="mx-5">
                
                  <img  class="absolute" src="@/assets/Flag.png" height="30px">
                  <span class ="vulneral mx-2">Missing security header: Referral-policy <span class="confirm_btn mx-5"><b-button variant="clear" class="btn btn-outline-success" style="border-radius:20px; width:100px; height:40px;">confirm </b-button></span></span>
            
               </b-col>
               <b-col cols="3" class="">
               <b-form-group>
                  <b-form-checkbox-group id="solved_checkbox">
                     <b-form-checkbox
                        id="solved"
                        value="1"
                        unchecked-value=""
                        class="mx-4"
                     >
                        <div class="mb-3">
                           Marked as solved
                        </div>
                     </b-form-checkbox>
                  </b-form-checkbox-group>
               </b-form-group>
               </b-col>
            </b-row>
            
         </b-row>
         <div class="vulnerability_table p-5">
             <table style="width:100%">
                  <thead>
                     <tr class="row">
                        <th class="col-md-2">Risk level </th>
                        <th class="col-md-2">CVSS </th>
                        <th class="col-md-2">CVE</th>
                        <th class="col-md-2">API KEY </th>
                        <th class="col-md-2">STATUS</th>
                        <th class="col-md-2">ACTION</th>
                     </tr>
                  
                  </thead>
                  <tbody>
                  
                  <tr class="row">
                     <td class="col-md-2"><li class="style-color-warning"></li></td>
                     <td class="col-md-2">4.3</td>
                     <td class="col-md-2">CVE-2022-11358</td>
                     <td class="col-md-2" width="50%">JQuery before 3.4.0 , as drupal, Bootstrap CMS and other 
                        products mishandles, JQuery extend(true {},...)because of object prototype pollution.if an unsanitized source object contained an enumerable__ptoto__property,it could extend native object prototype
                      </td>
                      <td class="col-md-2">N/A</td>
                      <td class="col-md-2">JQuery 3.3.1</td>
                  </tr>

                  <tr class="row">
                     <td class="col-md-2"><li class=""></li></td>
                     <td class="col-md-2">4.3</td>
                     <td class="col-md-2">CVE-2022-11358</td>
                     <td class="col-md-2"> in JQuery greater than 1.2and before 3.5.0 passing HTML from untrusted source-even after sanitizing it-one of it's JQuery manipulation methods(i.e html), .append{} and others may execute untrusted code.This problem is partner in JQuery 3.5.0
                     </td>
                     <td class="col-md-2">N/A</td>

                     <td class="col-md-2">JQuery 3.5.0</td>
                  </tr>
                  </tbody>
               </table>
            <div class="descriptiob_bg p-4">
               <div class="risk_description mt-5">
                  <h6 class="risk_description__header">Risk Description</h6>
                  <p class="risk_description__para">These vulnrabilities exposed the affected application to the risk of unauthorized access to confidential data and possibly to denial of service attacks. An attacker could search for an appropriate exploit(0r create one himself) for any of these vulnerabilities and use it to attack the system</p>
               </div>
               <div class="recommendation mt-5">
                  <h6 class="recommendation__header">Recommendations</h6>
                  <p class="recommendation__para"> We rcommend you to upgrade the affected software to the lastest version in order to elimiate the risk of these vulnerabilities</p>
               </div>
            </div>
         </div>
        </b-row>
       
       
      </b-container>
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
     .vulneral{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
     }
     .descriptiob_bg{
      background: #E5E5E5;
     }
     .risk_description__header, .recommendation__header{
      color:#000000;
     }
     .risk_description__para, .recommendation__para{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-size: 22px;
     }
     
   }
</style>