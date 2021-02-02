<template>
  <div class="max-w-4xl mx-auto my-16">
    <v-card>      
      <div class="grid grid-cols-3 m-flex">
        <div class="col-span-2 max-w-3xl mx-auto p-0 lg:px-16 xl:px-16 2xl:px-16">
          <h1 class="text-2xl font-bold my-8">Drop us a line</h1>
          <v-form
          ref="form"
          v-model="valid"
          lazy-validation    
          >
            <div class="grid grid-cols-2 gap-8 m-flex">
              <v-text-field
                v-model="contactForm.firstName"
                :rules="firstNameRules"
                label="First name"
                required
              ></v-text-field>

              <v-text-field
                v-model="contactForm.lastName"
                :rules="lastNameRules"
                label="Last name"
                required
              ></v-text-field>
            </div>
            
            <div class="grid grid-cols-2 gap-8">
              <v-text-field
                v-model="contactForm.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="contactForm.subject"
                :rules="subjectRules"
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
                v-model="contactForm.message"
                :rules="messageRules"
              ></v-textarea>
            </div>

            <div class="flex flex-row items-center">
              <span class="inline mr-4">Are you an existing client? :</span>
              <v-radio-group
                v-model="contactForm.isClient"
                row
                class="inline"
                required
              >
                <v-radio
                  label="Yes"
                  value="true"
                ></v-radio>
                <v-radio
                  label="No"
                  value="false"
                ></v-radio>
              </v-radio-group>
            </div>

            <div>
              <v-checkbox
                v-model="contactForm.acceptTerms"
                label="Accept terms & conditions"
                required
              >Accept terms & conditions</v-checkbox>
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
                v-if="!disableForm"
                @click="request"
              >
                Send
              </v-btn>
              <v-btn color="primary" large v-if="disableForm" loading>
                <span class="custom-loader">
                  <v-icon light>mdi-cached</v-icon>
                </span>
              </v-btn>
            </div>
          </v-form>
          <v-dialog v-model="alert" max-width="480">
            <v-card>
              <v-card-title class="headline mt-16">
                <v-icon class="block mx-auto" color="green" x-large
                  >mdi-check-circle</v-icon
                >
              </v-card-title>
              <h5 class="px-16 pb-16 text-center">
                Thank you for reaching us. We will get back to you shortly.
              </h5>
            </v-card>
          </v-dialog>
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
  name: 'ContactUs',
  data: () => ({
    valid: true,
    alert: false,
    disableForm: false,
    contactForm: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      isClient: false,
      acceptTerms: false
    },
    firstNameRules: [
      (v) => !!v || "First Name is required",
      (v) =>
        (v && v.length <= 25) || "First Name must be less than 25 characters",
    ],
    lastNameRules: [
      (v) => !!v || "Last Name is required",
      (v) =>
        (v && v.length <= 25) || "Last Name must be less than 25 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    clientRules: [
      (v) => !!v || "Client is required"
    ],
    subjectRules: [
      (v) => !!v || "Subject is required",
      (v) => (v && v.length <= 30) || "Subject must be less than 30 characters",
    ],
    messageRules: [
      (v) => !!v || "Message is required",
      (v) => (v && v.length <= 150) || "Message must be less than 150 characters",
    ],
  }),
  computed: {
    emailObject: function () {
      const emailBody = `Firstname: ${this.contactForm.firstName}<br/>Lastname: ${this.contactForm.lastName}<br/>Email: ${this.contactForm.email}<br/>Is existing client: ${this.contactForm.isClient}<br/>Message: ${this.contactForm.message}<br/>`;
      return {
        SecureToken: "38a58962-974b-454f-b54f-e26746d16d4d",
        To: "sales@modak.com",
        From: "testwebsite@modak.com",
        Subject: this.contactForm.subject,
        Body: emailBody,
      };
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    request() {      
      if (this.$refs.form.validate()) {
        this.disableForm = true;
        window.Email.send(this.emailObject).then((message) => {
          if (message !== 'OK') return false
          this.reset();
          this.disableForm = false;
          this.alert = true;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text-white {
  color: #fff !important;
}
</style>