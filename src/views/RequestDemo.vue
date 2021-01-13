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

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="companyName"
        :rules="nameRules"
        label="Company Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="phoneNumber"
        :rules="numberRules"
        label="Phone Number"
        required
      ></v-text-field>

      <v-text-field
        v-model="designation"
        :rules="nameRules"
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
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
};
</script>

<style lang="scss" scoped>
</style>