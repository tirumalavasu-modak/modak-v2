<template>
  <div class="max-w-2xl mx-auto my-16">
    <v-card class="px-16 py-8">
    <h1 class="text-2xl font-bold my-4">I'm ready to grow my business. Schedule my live demo.</h1>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation    
    >
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
          Request
        </v-btn>
      </div>
    </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'RequestDemo',
  data: () => ({
      valid: true,
      requestForm: {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        mobile: '',
        designation: ''
      },
      firstNameRules: [
        v => !!v || 'First Name is required',
        v => (v && v.length <= 10) || 'First Name must be less than 10 characters',
      ],
      lastNameRules: [
        v => !!v || 'Last Name is required',
        v => (v && v.length <= 10) || 'Last Name must be less than 10 characters',
      ],
      companyRules: [
        v => !!v || 'Company name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      mobileRules: [
        v => !!v || 'Mobile or phone number is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      designationRules: [
        v => !!v || 'Designation is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    }),
    methods: {
      reset () {
        this.$refs.form.reset()
      },
      request () {
        this.$refs.form.validate()
      },
    }
};
</script>

<style lang="scss" scoped>
</style>