<template>
  <v-container class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-6">
    <div class="flex flex-col">
      <LiteYouTubeEmbed
        id="UxowYkdcQDA"
        title="Modak wins Best of Show Award at BIO IT Expo &amp; Conference"
      />
      <span class="text-[#1b4962] text-[1.4rem] font-bold font-oswald my-3"
        >Modak wins at BIO IT Expo & Conference</span
      >
      <span
        >Modak is proud to announce that Modak Nabu™ is the winner of the “Best
        of Show” award at the Bio-IT World Conference & Expo, 2022 held at Hynes
        Convention Center, Boston.</span
      >
    </div>
    <div class="flex flex-col">
      <LiteYouTubeEmbed
        id="bnN6y052H9g"
        title="Modak wins Best of Show Award at BIO IT Expo &amp; Conference"
      />
      <span class="text-[#1b4962] text-[1.4rem] font-bold font-oswald my-3"
        >Interoperability Matters</span
      >
      <span>Driving interoperability in healthcare to drive ecosystems.</span>
    </div>
    <div class="flex flex-col">
      <LiteYouTubeEmbed
        id="rC35p6SwUAI"
        title="Modak wins Best of Show Award at BIO IT Expo &amp; Conference"
      />
      <span class="text-[#1b4962] text-[1.4rem] font-bold font-oswald my-3"
        >Data Lake delivered in record time</span
      >
      <span
        >Modak delivers petabyte-scale Data Lake for a large pharma company in
        record time.</span
      >
    </div>
  </v-container>
</template>

<script>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
export default {
  components: {
    LiteYouTubeEmbed
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
