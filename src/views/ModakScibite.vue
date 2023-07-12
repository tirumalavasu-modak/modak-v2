<template>
  <v-container class="mt-24">
    <v-row class="flex flex-col items-start">
      <h3 class="text-modak-blue leading-tight">Building a Scalable FAIR Data Ecosystem to Extract Insights Faster and More Efficiently</h3>
      <span class="block font-medium">July 10, 2023 (Monday) - 9:00 AM CST</span>
    </v-row>
    <v-row class="flex flex-row items-start my-12">
      <v-col cols="12" md="6">
        <h4 class="text-modak-blue">Register Now</h4>
        <span class="block font-medium">To reserve your seat, a completed form is required including work email
          address:</span>
          <div id="bigmarker-conference-widget-containerd32bb193b00e"></div>
      </v-col>
      <v-col cols="12" md="6">
        <p>Digital transformation has created vast data assets, that when combined with developments in AI and ML offer the potential to revolutionize the way that drugs are discovered and brought to market. However, the scale, complexity and siloing of this data remains a significant roadblock that needs to be overcome.</p><br/>
        <p>In the upcoming webinar, learn how Modak and SciBite are collaborating to de-silo enterprise wide scientific data and provide harmonized and machine readable data aligned to common enterprise data standards, fueling innovation in the life sciences . We will explore how these key practices can revolutionize the way enterprises approach scientific research and unlock and accelerate new insights from vast amounts of structured and unstructured data.</p><br/>
        <p>We will delve into integrating and orchestrating data from diverse public data sources, standardizing and harmonizing unstructured data with named entity recognition (NER) and how this can be combined with enterprise ontology management to deliver data that is aligned to enterprise wide data standards and support downstream applications that fuel scientific discovery.</p><br/>
        <h4>Agenda</h4>
        <ul class="ml-4">
          <li>How to unlock insights from unstructured scientific text</li>
          <li>Modak and SciBite Synergy</li>
          <li>Named entity recognition (NER) and Ontology Management</li>
          <li>Modak Nabu™ and SciBite TERMite joint product demonstration</li>
        </ul>
        <br/>
        <h4>About Modak</h4>
        <p>Modak is a solutions company that enables enterprises to manage and utilize their data landscape effectively. They provide technology, cloud, and vendor-agnostic software and services to accelerate data migration initiatives. Using machine learning (ML) techniques to transform how structured and unstructured data is prepared, consumed, and shared. Find out more at <a href="https://modak.com" target="_blank" class="no-underline text-modak-blue">modak.com</a>.</p>
        <br/>
        <h4>About Scibite</h4>
        <p>SciBite’s data-first, semantic analytics software is for those who want to innovate and get more from their data. SciBite believes data fuels discovery and is leading the way with its pioneering infrastructure that combines the latest in machine learning with an ontology-led approach to unlock the value of scientific content.  Find out more at <a href="https://scibite.com/" target="_blank" class="no-underline text-modak-blue">www.scibite.com</a>.</p>
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
          <v-img src="https://1lzctcc4hd2zm.cdn.shift8web.com/wp-content/uploads/2023/06/Harpreet-160x160.jpg"></v-img>
        </v-avatar>
        <span class="font-oswald block font-medium text-xl text-modak-blue mt-4">Harpreet Singh Riat</span>
        <span>Technical Sales Manager, SciBite</span>
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
      script.src = "https://www.bigmarker.com/widget/register_widget.js?club=modak2&conference=d32bb193b00e&widget_type=form_register&series_register=&upcoming_sub_title=Reserve%20Your%20Spot&live_sub_title=Watch%20Now&rec_sub_title=View%20Our%20Webinar&upcoming_button_text=Confirm%20Registration&live_button_text=Register%20%26%20Join&rec_button_text=View%20Webinar&link_to_channel=true&widget_width=&widget_height=&enable_iframe=true&background_color=ffffff&btext_color=2d374d&link_color=1089f5<ext_color=ffffff&redirect_to_confirmation_page=0&widget_button_registered_content=View Now&widget_webinar_descriptions=&widget_redirect_type=no_redirect&cid=16870f034eaa";
      script.type = "text/javascript";
      document.body.appendChild(script);
    });

    return {}
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  max-width: 1200px;
}
</style>