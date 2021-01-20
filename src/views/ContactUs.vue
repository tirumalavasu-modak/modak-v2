<template>
  <div class="max-w-4xl mx-auto my-16">
    <v-card>      
      <div class="grid grid-cols-3">
        <div class="col-span-2 max-w-3xl mx-auto px-16">
          <h1 class="text-2xl font-bold my-8">Drop us a line</h1>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation    
          >
            <div class="grid grid-cols-2 gap-8">
              <v-text-field
                v-model="firstName"
                :rules="nameRules"
                label="First name"
                required
              ></v-text-field>

              <v-text-field
                v-model="lastName"
                :rules="nameRules"
                label="Last name"
                required
              ></v-text-field>
            </div>
            
            <div class="grid grid-cols-2 gap-8">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="subject"
                :rules="nameRules"
                label="Subject"
                required
              ></v-text-field>
            </div>

            <div>
              <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Your message"
                value=""
              ></v-textarea>
            </div>

            <div class="flex flex-row items-center">
              <span class="inline mr-4">Are you an existing client? :</span>
              <v-radio-group
                v-model="row"
                row
                class="inline"
              >
                <v-radio
                  label="Yes"
                  value="radio-1"
                ></v-radio>
                <v-radio
                  label="No"
                  value="radio-2"
                ></v-radio>
              </v-radio-group>
            </div>

            <div>
              <v-checkbox
                v-model="checkbox"
                label="Accept terms & conditions"
              ></v-checkbox>
            </div>
            
            <div class="flex flex-row items-center justify-center mb-8">      
              <v-btn
                color="white"
                class="mr-4"
                large
                @click="reset"
              >
                Reset
              </v-btn>

              <v-btn
                color="primary"
                large
                @click="request"
              >
                Send
              </v-btn>
            </div>
          </v-form>
        </div>
        <div class="col-span-1 bg-gray p-8">
          <h5>Contact us:</h5>
          <div class="my-2">
            <a href="https://twitter.com/ModakAnalytics" class="" target="_blank"><v-icon class="text-primary">mdi-twitter</v-icon></a>
						<a href="https://www.facebook.com/Modak-Analytics-684532614917623/" class="ml-2" target="_blank"><v-icon class="text-primary">mdi-facebook</v-icon></a>
						<a href="https://www.linkedin.com/company/modak-analytics/about/" class="ml-2" target="_blank"><v-icon class="text-primary">mdi-linkedin</v-icon></a>
						<a href="https://github.com/modakanalytics" class="ml-2" target="_blank"><v-icon class="text-primary">mdi-github</v-icon></a>
          </div><br/>
          <h5>E-Mail:</h5>
          <a href="" class="">sales@modak.com</a><br/><br/>
          <h5>USA</h5>
          <span>
            21660 W Field Parkway,<br>
            Deer Park, IL – 60010,<br>
            USA.
          </span><br/><br/>
          <h5>Dubai</h5>
          <span class="">
            Dubai Silicon Oasis(DSO),<br>
            Dubai, UAE.
          </span><br/><br/>
          <h5>India</h5>
          <span>
            The Platina,<br>
            Gachibowli, Hyderabad, India.
          </span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ContactUs'
};
</script>

<style lang="scss" scoped>
.text-white {
  color: #fff !important;
}
</style>