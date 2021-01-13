<template>
  <div class="max-w-7xl mx-auto my-16">
    <v-card class="py-16">
      <h1 class="text-2xl font-bold mb-8 mx-16">Drop us a line</h1>
      <div class="grid grid-cols-3">
        <div class="col-span-2 max-w-2xl px-16">
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
            
            <div class="flex flex-row items-center justify-center">      
              <v-btn
                color="white"
                class="mr-4"
                @click="reset"
              >
                Reset
              </v-btn>

              <v-btn
                color="primary"
                @click="request"
              >
                Send
              </v-btn>
            </div>
          </v-form>
        </div>
        <div class="col-span-1">
          <h1 class="font-bold tex-2xl">Contact us:</h1>
          <div></div>
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
</style>