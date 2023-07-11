<template>
  <v-sheet>
    <v-container class="mt-12">
      <PageHeader title="Modak's Vibrant team" subtitle="" />
      <v-row class="flex flex-row items-center my-8">
        <v-col cols="12" md="6">
          <v-img src="@/assets/images/Modaks-Vibrant-Team.svg"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h3>
            <span class="text-modak-blue">A </span
            ><span class="text-navy">Culture of Trust</span>
          </h3>
          <p>
            A culture of trust prevails in our organization. And we believe that
            trust can only come from our commitment to our corporate culture.
          </p>
          <br />
          <p>
            We adhere to a culture of – no hidden agendas, no office politics,
            zero fear of expression of ideas, and transparent communications.
            Every employee in our organization commits to promoting honesty and
            integrity at work.
          </p>
        </v-col>
      </v-row>
      <v-row class="flex flex-row items-center my-8">
        <v-col cols="12" md="6">
          <h3>
            <span class="text-modak-blue">Corporate </span
            ><span class="text-navy">culture</span>
          </h3>
          <p>
            Our corporate culture sets us apart in a highly competitive
            marketplace. We believe in our ideals to preserve our corporate
            culture. Our commitment is our insurance for success.
          </p>
          <br />
          <p>
            During the period of challenges and opportunities, we encountered,
            our culture and values have encouraged us to face them and deliver
            quality deliverables to our clients.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/images/Corporate-Culture.svg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax height="400" src="@/assets/images/bg_2-4.png">
      <v-container class="md">
        <v-row class="flex flex-row items-center mt-8">
          <v-col class="text-center">
            <v-img src="@/assets/images/do_it_once.svg" height="100"></v-img>
            <h4 class="text-navy my-4">Do it Once</h4>
            <span class="h-0.5 w-12 bg-black block mx-auto"></span>
            <p class="text-md mt-4">
              Modak Analytics recognizes the amount of effort a customer makes
              in selecting products and services. Modak Analytics solutions make
              it possible to make a wise decision at once.
            </p>
          </v-col>
          <v-col class="text-center">
            <v-img src="@/assets/images/do_it_right.svg" height="100"></v-img>
            <h4 class="text-navy my-4">Do it Right</h4>
            <span class="h-0.5 w-12 bg-black block mx-auto"></span>
            <p class="text-md mt-4">
              In implementing customer solutions, Modak Analytics always aims to
              do it right, as per customer’s terms, and in the customer’s
              allotted time frame.
            </p>
          </v-col>
          <v-col class="text-center">
            <v-img src="@/assets/images/make_it_last.svg" height="100"></v-img>
            <h4 class="text-navy my-4">Make it Last</h4>
            <span class="h-0.5 w-12 bg-black block mx-auto"></span>
            <p class="text-md mt-4">
              Modak Analytics employees, products, and services give importance
              to customer satisfaction and thereby, build long-lasting customer
              relationships.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container>
      <v-row class="flex flex-row items-center my-12">
        <v-col cols="12" md="6">
          <h3>
            <span class="text-modak-blue">Women in </span
            ><span class="text-navy">Data Analytics</span>
          </h3>
          <p>
            We pride ourselves in being a Women-Led organization and being an equal employment provider. More than 30% of our workforce is comprised of women and we believe women have a big role to play in the analytics for being more analytical thinkers, this has helped us to an extent while finding solutions to some of the most complex analytical solutions.
          </p>
          <p>
            Being led by Aarti Joshi, as the chief architect of people and business growth of the organization, she has been critical in building Modak from a 3-member team into a dynamic, cross-functional 200+ professionals strong company in 6 years.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="@/assets/images/img_3-4.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import PageHeader from "@/components/general/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>
