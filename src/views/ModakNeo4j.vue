<template>
  <v-container class="mt-24">
    <v-row class="flex flex-col items-start">
      <h3 class="text-modak-blue">Enabling Data Products to Accelerate Business Value</h3>
      <span class="block font-medium">June 23rd, 2023 (Friday) - 10 AM CST</span>
    </v-row>
    <v-row class="flex flex-row items-start my-12">
      <v-col cols="12" md="6">
        <h4 class="text-modak-blue">Register Now</h4>
        <span class="block font-medium">To reserve your seat, a completed form is required including work email
          address:</span>
        <div id="bigmarker-conference-widget-container7d23ac35b023"></div>
      </v-col>
      <v-col cols="12" md="6">
        <p>In the upcoming Modak and Neo4j joint webinar, we will highlight the significance of data orchestration and
          data products development in driving business outcomes. We will delve into integrating and orchestrating data
          from diverse sources, standardizing and harmonizing data and building domain-driven data products with a data
          fabric architecture that reduces the time and cost.</p><br />
        <p>Modak X Neo4j is a major leap towards futuristic data science with powerful solutions for data preparation,
          visualization, and orchestration, enabling organizations’ data preparation efficiency with graph technology.</p>
        <v-btn aria-label="Read More" color="secondary" rounded="xl" variant="outlined" class="capitalize my-4" @click="$router.push('/blog/graph-analytics-the-future-in-data-science')">Read more here</v-btn>
      </v-col>
    </v-row>
    <h4 class="text-navy">Speakers:</h4>
    <v-row class="my-8">
      <v-col class="text-center">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2022/04/mayank-160x160.png"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Mayank Mehra</span>
        <span>Head of Product Management, Modak</span>
      </v-col>
      <v-col class="text-center">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2023/06/Govardhan-Jeeru-160x160.jpg.webp"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Govardhan Jeeru</span>
        <span>Senior Software Engineer, Modak</span>
      </v-col>
      <v-col class="text-center">
        <v-avatar size="90">
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2023/06/Micheal_Moore-160x160.png"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Dr. Michael Moore</span>
        <span>Principal, Partner Solutions and Technology, Neo4j</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {

    onMounted(() => {
      let script = document.createElement('script');
      script.src = "https://www.bigmarker.com/widget/register_widget.js?club=modak2&conference=7d23ac35b023&widget_type=form_register&series_register=&upcoming_sub_title=Reserve%20your%20spot&live_sub_title=Watch%20Now&rec_sub_title=Modak%20x%20Neo4j%20Webinar&upcoming_button_text=Confirm%20Registration&live_button_text=Register%20%26%20Join&rec_button_text=View%20Now!&link_to_channel=true&widget_width=&widget_height=&enable_iframe=true&background_color=ffffff&btext_color=2d374d&link_color=1089f5&ltext_color=ffffff&redirect_to_confirmation_page=0&widget_button_registered_content=Thank you for registering! &widget_webinar_descriptions=&widget_redirect_type=no_redirect&cid=16870f034eaa";
      script.type = "text/javascript";
      document.body.appendChild(script);
    });

    return {}
  }
}
</script>

<style lang="scss" scoped>.v-container {
  max-width: 1200px;
}</style>