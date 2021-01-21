<template>
  <div class="max-w-2xl mx-auto my-16">
    <v-card class="px-16 py-8">
      <h1 class="text-2xl font-bold my-4">
        I'm ready to grow my business. Schedule my live demo.
      </h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="requestForm.firstName"
          :rules="firstNameRules"
          label="First name"
          required
        ></v-text-field>

        <v-text-field
          v-model="requestForm.lastName"
          :rules="lastNameRules"
          label="Last name"
          required
        ></v-text-field>

        <v-text-field
          v-model="requestForm.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="requestForm.company"
          :rules="companyRules"
          label="Company Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="requestForm.mobile"
          :rules="mobileRules"
          label="Phone Number"
          required
        ></v-text-field>

        <v-text-field
          v-model="requestForm.designation"
          :rules="designationRules"
          label="Designation"
          required
        ></v-text-field>

        <div class="flex flex-row items-center justify-center">
          <v-btn color="white" class="mr-4" large @click="reset"> Reset </v-btn>

          <v-btn
            color="primary"
            large
            :disabled="disableForm"
            v-if="!disableForm"
            @click="request"
          >
            Request
          </v-btn>
          <v-btn color="primary" large v-if="disableForm" loading>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </v-btn>
        </div>
      </v-form>
    </v-card>
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
</template>

<script>
export default {
  name: "RequestDemo",
  data: () => ({
    valid: true,
    alert: false,
    disableForm: false,
    requestForm: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      mobile: "",
      designation: "",
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
    companyRules: [
      (v) => !!v || "Company name is required",
      (v) => (v && v.length <= 25) || "Company name must be less than 25 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    mobileRules: [
      (v) => !!v || "Mobile or phone number is required",
      (v) => (v && v.length === 10) || "Mobile must be 10 characters",
    ],
    designationRules: [
      (v) => !!v || "Designation is required",
      (v) => (v && v.length <= 20) || "Designation must be less than 20 characters",
    ],
  }),
  computed: {
    emailObject: function () {
      const emailBody = `Firstname: ${this.requestForm.firstName}<br/>Lastname: ${this.requestForm.lastName}<br/>Email: ${this.requestForm.email}<br/>Company: ${this.requestForm.company}<br/>Mobile: ${this.requestForm.mobile}<br/>Designation: ${this.requestForm.designation}<br/>`;
      return {
        SecureToken: "38a58962-974b-454f-b54f-e26746d16d4d",
        // SecureToken: "f9605302-dbb1-4912-91b2-b7b0bc3aacc8",
        To: "vasudevsykam@gmail.com",
        From: "testwebsite@modak.com",
        Subject: "Request for a demo",
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
</style>