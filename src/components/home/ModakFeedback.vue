<template>
  <v-container class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-6">
    <div class="flex flex-col">
      <iframe
        width="374"
        height="210"
        src="https://www.youtube.com/embed/UxowYkdcQDA"
        title="Modak wins Best of Show Award at BIO IT Expo &amp; Conference"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
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
      <video
        controls
        poster="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/image-without-play.jpg"
      >
        <source
          src="@/assets/videos/Levi_Bailey_Final_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <span class="text-[#1b4962] text-[1.4rem] font-bold font-oswald my-3"
        >Interoperability Matters</span
      >
      <span>Driving interoperability in healthcare to drive ecosystems.</span>
    </div>
    <div class="flex flex-col">
      <video
        controls
        poster="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2021/09/image-without-play-2.jpg"
      >
        <source
          src="@/assets/videos/Mark_Ramsey-Long_Version01.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
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
export default {
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
